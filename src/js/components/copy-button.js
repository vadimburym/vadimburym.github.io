import { element } from './skill-list.js?v=20261009-mobile-review';

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
      button.textContent = 'Скопировано ✓';
      status.textContent = 'Скопировано в буфер обмена';
    } catch {
      let field = wrapper.querySelector('input');
      if (!field) {
        field = element('input', 'copy-fallback');
        field.readOnly = true;
        field.setAttribute('aria-label', 'Текст для ручного копирования');
        wrapper.append(field);
      }
      field.value = getValue();
      field.focus();
      field.select();
      status.textContent = 'Автоматическое копирование недоступно. Скопируйте выделенный текст';
    }
    timer = setTimeout(() => { button.textContent = label; status.textContent = ''; }, 2500);
  });
  return wrapper;
}
