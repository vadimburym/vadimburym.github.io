import { languageSwitch, otherLanguageUrl } from '/js/lib/language.js';
import { element } from './skill-list.js?v=20261010-readable';
import { animate, stopMotion } from '../lib/motion.js?v=20261010-readable';

export function mountHeader() {
  const header = document.querySelector('[data-site-header]');
  if (!header) return;
  const currentPage = document.body.dataset.page;
  const brand = element('a', 'brand', 'Vadim Burym');
  brand.href = '/en/';
  const toggle = element('button', 'menu-toggle');
  toggle.type = 'button';
  toggle.setAttribute('aria-controls', 'main-nav');
  toggle.append(element('span'), element('span'));
  const nav = element('nav');
  nav.id = 'main-nav';
  nav.setAttribute('aria-label', 'Main navigation');
  [
    ['home', '/en/', 'Home'], ['cv', '/assets/documents/vadim-burym-cv-en.pdf', 'CV'], ['projects', '/en/projects/', 'Projects'],
    ['core-skills', '/en/skills/', 'Core Skills'], ['meta-skills', '/en/meta-skills/', 'Meta Skills'],
  ].forEach(([id, href, title]) => {
    const link = element('a', currentPage === id ? 'active' : '', title);
    link.href = href;
    if (id === 'cv') { link.target = '_blank'; link.rel = 'noopener'; }
    if (currentPage === id) link.setAttribute('aria-current', 'page');
    nav.append(link);
  });
  const contact = element('a', 'link', 'Contact ↗');
  contact.href = '/en/#contacts';
  header.replaceChildren(brand, toggle, nav, contact);
  header.insertAdjacentHTML('beforeend', languageSwitch(location.pathname));
  const language = header.lastElementChild;
  const updateLanguageUrl = () => {
    language.href = otherLanguageUrl(location.pathname, location.search, location.hash);
  };
  updateLanguageUrl();
  for (const event of ['focus', 'pointerdown', 'contextmenu', 'click']) {
    language.addEventListener(event, updateLanguageUrl);
  }
  window.addEventListener('popstate', updateLanguageUrl);
  window.addEventListener('hashchange', updateLanguageUrl);

  const compact = matchMedia('(max-width: 900px)');
  let menuRevision = 0;
  async function setMenu(open, restoreFocus = false) {
    const request = ++menuRevision;
    const wasOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (restoreFocus) toggle.focus();
    if (!compact.matches) { stopMotion(nav); nav.hidden = false; nav.inert = false; return; }
    nav.inert = !open;
    if (open) {
      nav.hidden = false;
      animate(nav, [{ opacity: 0, transform: 'translateY(-6px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 220 });
    } else {
      if (wasOpen) await animate(nav, [{ opacity: 1 }, { opacity: 0 }], { duration: 140 });
      if (request === menuRevision) nav.hidden = true;
    }
  }
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  compact.addEventListener('change', () => setMenu(false));
  nav.addEventListener('click', event => { if (event.target.closest('a') && compact.matches) setMenu(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => { if (!header.contains(event.target)) setMenu(false); });
  setMenu(false);
}
