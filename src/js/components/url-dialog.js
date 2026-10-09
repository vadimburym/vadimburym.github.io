import { element } from './skill-list.js?v=20261009-mobile-review';
import { animate, stopMotion } from '../lib/motion.js?v=20261009-mobile-review';
import { createCopyButton } from './copy-button.js?v=20261009-mobile-review';

export function mountUrlDialog({ parameter, find, render, canonicalId = id => id }) {
  const stateKey = `${parameter}Dialog`;
  const dialog = element('dialog', `skill-dialog ${parameter}-dialog`);
  dialog.setAttribute('aria-labelledby', `${parameter}-dialog-title`);
  const close = element('button', 'dialog-close', 'Закрыть ×');
  close.type = 'button';
  const body = element('div', 'dialog-content');
  const actions = element('div', 'dialog-actions');
  actions.append(createCopyButton('Копировать ссылку', () => {
    const url = new URL(location.pathname, location.origin);
    url.searchParams.set(parameter, currentId);
    return url.href;
  }), close);
  dialog.append(actions, body);
  document.body.append(dialog);
  let opener = null;
  let currentId = null;
  let outsideDown = false;
  let revision = 0;
  let closing = false;
  let closeRequested = false;

  function removeParameter() {
    const url = new URL(location.href);
    url.searchParams.delete(parameter);
    const state = { ...history.state };
    delete state[stateKey];
    history.replaceState(state, '', url);
  }
  async function sync() {
    const request = ++revision;
    let id = new URL(location.href).searchParams.get(parameter);
    const item = find(id);
    if (!item) {
      if (id) removeParameter();
      if (dialog.open) {
        dialog.querySelectorAll('.skill-gallery').forEach(gallery => gallery.dispatchEvent(new Event('gallery-close')));
        closing = true;
        dialog.querySelectorAll('video').forEach(video => video.pause());
        const from = getComputedStyle(dialog);
        const first = { opacity: from.opacity, transform: from.transform };
        dialog.classList.add('is-closing');
        await animate(dialog, [first, { opacity: 0, transform: 'translateY(8px) scale(.99)' }], { duration: 190, easing: 'cubic-bezier(.4, 0, 1, 1)' });
        if (request !== revision) return;
        dialog.close();
        dialog.classList.remove('is-closing');
        if (!document.querySelector('dialog[open]')) document.documentElement.classList.remove('dialog-open');
        const fallback = document.querySelector('dialog[open] .dialog-close') || document.querySelector('#skill-search') || document.querySelector('#content') || document.querySelector('#home');
        (opener?.isConnected && !opener.closest('dialog:not([open])') ? opener : fallback)?.focus({ preventScroll: true });
      }
      currentId = null;
      closing = closeRequested = false;
      return;
    }
    const canonical = canonicalId(id, item);
    if (canonical !== id) {
      const url = new URL(location.href);
      url.searchParams.set(parameter, canonical);
      const state = { ...history.state };
      if (state[stateKey] === id) state[stateKey] = canonical;
      history.replaceState(state, '', url);
      id = canonical;
    }
    const reopening = closing;
    closing = closeRequested = false;
    dialog.classList.remove('is-closing');
    if (reopening) stopMotion(dialog);
    const changed = currentId !== id;
    const wasOpen = dialog.open;
    if (changed) {
      dialog.querySelectorAll('.skill-gallery').forEach(gallery => gallery.dispatchEvent(new Event('gallery-close')));
      render(item, body);
      currentId = id;
      dialog.dataset[parameter] = id;
    }
    if (!dialog.open) {
      document.querySelectorAll('video').forEach(video => video.pause());
      document.documentElement.classList.add('dialog-open');
      dialog.showModal();
      dialog.scrollTop = 0;
      close.focus({ preventScroll: true });
      animate(dialog, [
        { opacity: 0, transform: 'translateY(16px) scale(.985)' },
        { opacity: 1, transform: 'translateY(0) scale(1)' },
      ], { duration: 300 });
    } else if (reopening) {
      animate(dialog, [{ opacity: .6 }, { opacity: 1 }], { duration: 180 });
    }
    if (changed || !wasOpen) document.dispatchEvent(new CustomEvent('portfolio:dialog-open', { detail: { type: parameter, id } }));
  }
  function requestClose() {
    if (closing || closeRequested || !dialog.open) return;
    closeRequested = true;
    if (history.state?.[stateKey] === currentId) history.back();
    else { removeParameter(); sync(); }
  }
  document.addEventListener('click', event => {
    const link = event.target.closest(`[data-open-${parameter}]`);
    if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = link;
    document.querySelectorAll('dialog[open] video').forEach(video => video.pause());
    const url = new URL(location.href);
    url.searchParams.set(parameter, link.getAttribute(`data-open-${parameter}`));
    history.pushState({ ...history.state, [stateKey]: link.getAttribute(`data-open-${parameter}`) }, '', url);
    sync();
  });
  close.addEventListener('click', requestClose);
  dialog.addEventListener('close', () => dialog.querySelectorAll('video').forEach(video => video.pause()));
  dialog.addEventListener('cancel', event => { if (event.target !== dialog) return; event.preventDefault(); requestClose(); });
  function outside(event) {
    const box = dialog.getBoundingClientRect();
    return event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
  }
  dialog.addEventListener('pointerdown', event => { outsideDown = outside(event); });
  dialog.addEventListener('click', event => { if (outsideDown && outside(event)) requestClose(); outsideDown = false; });
  window.addEventListener('popstate', sync);
  sync();
}
