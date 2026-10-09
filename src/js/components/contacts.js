import { site } from '../data/site.js?v=20261009-mobile-review';
import { createCopyButton } from './copy-button.js?v=20261009-mobile-review';

export function mountContacts() {
  document.querySelectorAll('[data-contact]').forEach(control => {
    const key = control.dataset.contact;
    const value = site[key];
    if (!value) return;
    const email = key === 'email';
    if (email ? !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) : !/^https:\/\//i.test(value)) return;
    const link = document.createElement('a');
    link.className = control.className;
    link.href = email ? `mailto:${value}` : value;
    if (email) link.textContent = `${value} ↗`;
    else {
      link.replaceChildren(...control.childNodes);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    control.replaceWith(link);
    if (email) link.after(createCopyButton('Копировать', () => value, 'copy-email'));
  });
}
