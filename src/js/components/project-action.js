import { element } from './skill-list.js?v=20261009-mobile-review';

const starRequests = new Map();
const starCacheDuration = 60 * 60 * 1000;

async function getGithubStars(repository) {
  const key = `portfolio:github-stars:${repository}`;
  try {
    const cached = JSON.parse(localStorage.getItem(key));
    if (Number.isInteger(cached?.count) && cached.count >= 0 && Date.now() - cached.savedAt < starCacheDuration) return cached.count;
  } catch { /* Storage may be unavailable; the link still works. */ }
  if (!starRequests.has(repository)) {
    const request = (async () => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);
      try {
        const response = await fetch(`https://api.github.com/repos/${repository}`, {
          headers: { Accept: 'application/vnd.github+json' }, signal: controller.signal,
        });
        if (!response.ok) return null;
        const { stargazers_count: count } = await response.json();
        if (!Number.isInteger(count) || count < 0) return null;
        try { localStorage.setItem(key, JSON.stringify({ count, savedAt: Date.now() })); } catch { /* Optional cache. */ }
        return count;
      } catch { return null; }
      finally { clearTimeout(timeout); }
    })();
    starRequests.set(repository, request);
    setTimeout(() => starRequests.delete(repository), starCacheDuration);
  }
  return starRequests.get(repository);
}

export function createProjectAction(action) {
  if (!action) return null;
  const link = element(action.url ? 'a' : 'button', 'project-external-link');
  if (action.url) {
    link.href = action.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    const host = new URL(action.url).hostname;
    const iconName = host === 'github.com' ? 'github-mark' : host === 'store.steampowered.com' ? 'steam-mark' : host === 'jammer.website' ? 'jammer-mark' : host === 'yandex.ru' ? 'yandex-mark' : host === 'itch.io' || host.endsWith('.itch.io') ? 'itch-mark' : null;
    if (iconName) {
      const icon = element('img');
      icon.src = `/assets/images/${iconName}.svg`;
      icon.alt = '';
      icon.width = icon.height = 16;
      link.append(icon);
    }
  } else {
    link.type = 'button';
    link.disabled = true;
    link.title = 'Ссылка пока не указана';
  }
  link.append(element('span', '', action.label));
  const arrow = element('span', 'social-arrow', '↗');
  arrow.setAttribute('aria-hidden', 'true');
  link.append(arrow);
  if (action.url) {
    const url = new URL(action.url);
    const parts = url.pathname.split('/').filter(Boolean);
    if (url.hostname === 'github.com' && parts.length >= 2) {
      const repository = parts.slice(0, 2).join('/');
      getGithubStars(repository).then(count => {
        if (count === null) return;
        const stars = element('span', 'project-github-stars');
        const icon = element('span', 'project-star-icon', '★');
        icon.setAttribute('aria-hidden', 'true');
        stars.append(icon, element('span', '', count.toLocaleString('ru-RU')));
        stars.setAttribute('aria-label', `Звезд на GitHub: ${count}`);
        stars.title = `Звезд на GitHub: ${count}`;
        link.insertBefore(stars, arrow);
      });
    }
  }
  return link;
}
