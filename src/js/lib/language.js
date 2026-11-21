// Keep the page, search and fragment when crossing the language boundary.
export function otherLanguageUrl(pathname, search = '', hash = '') {
  const path = pathname.replace(/index\.html$/, '');
  return (path.startsWith('/en/') ? path.slice(3) : '/en/' + path.slice(1)) + search + hash;
}

export function languageSwitch(pathname) {
  const english = pathname.startsWith('/en/');
  const label = english ? 'Switch to Russian' : 'Переключить на английский';
  return `<a class="language-switch" href="${otherLanguageUrl(pathname)}" hreflang="${english ? 'ru' : 'en'}" aria-label="${label}"><span class="lang-ru">RU</span><span aria-hidden="true">/</span><span class="lang-en">EN</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg></a>`;
}
