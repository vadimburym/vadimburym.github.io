const publicHosts = new Set(['vadimburym.ru', 'www.vadimburym.ru']);

export function analyticsEnabled(counterId, hostname) {
  return Number.isSafeInteger(counterId) && counterId > 0 && publicHosts.has(hostname);
}

export function clarityEnabled(projectId, hostname) {
  return typeof projectId === 'string' && /^[a-z0-9]{6,32}$/.test(projectId)
    && publicHosts.has(hostname);
}

export function linkGoal(href, origin) {
  let url;
  try { url = new URL(href, origin); } catch { return null; }
  if (url.origin === origin && url.pathname === '/assets/documents/vadim-burym-cv.pdf') return 'cv_open';
  if (url.hostname === 't.me' && url.pathname.slice(1) === 'vadimburym') return 'telegram_click';
  if (url.protocol === 'mailto:') return 'email_click';
  return null;
}
