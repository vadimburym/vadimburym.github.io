import { element } from './skill-list.js?v=20261010-readable';

export function createCopyButton(label, getValue, className = 'copy-button') {
  const button = element('button', className, label);
  button.type = 'button';
  const status = element('span', 'sr-only');
  status.setAttribute('role', 'status');
  const wrapper = element('span', 'copy-control');
  wrapper.append(button, status);
  let timer;
  button.addEventListener('click', async () => {
    clearTimeout(timer);
    try {
      await navigator.clipboard.writeText(getValue());
      button.textContent = 'Copied ✓';
      status.textContent = 'Copied to clipboard';
    } catch {
      let field = wrapper.querySelector('input');
      if (!field) {
        field = element('input', 'copy-fallback');
        field.readOnly = true;
        field.setAttribute('aria-label', 'Text to copy manually');
        wrapper.append(field);
      }
      field.value = getValue();
      field.focus();
      field.select();
      status.textContent = 'Automatic copying is unavailable. Copy the selected text';
    }
    timer = setTimeout(() => { button.textContent = label; status.textContent = ''; }, 2500);
  });
  return wrapper;
}
