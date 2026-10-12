import { site } from './data/site.js?v=20261012-clarity';
import { analyticsEnabled, clarityEnabled, linkGoal } from './lib/analytics.js?v=20261012-clarity';
import { projects } from './data/projects.js?v=20261010-readable';

// Independent of the UI module graph. Analytics must never block the portfolio.
const useMetrica = analyticsEnabled(site.metricaId, location.hostname);
const useClarity = clarityEnabled(site.clarityId, location.hostname);

if (useMetrica) {
  try {
    const id = site.metricaId;
    window.ym = window.ym || function () { (window.ym.a = window.ym.a || []).push(arguments); };
    window.ym.l = Date.now();
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://mc.yandex.ru/metrika/tag.js?id=${id}`;
    document.head.append(script);
    window.ym(id, 'init', { ssr: true, clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true, referrer: document.referrer, url: location.href });
  } catch { /* Clarity still starts if Metrica initialization fails. */ }
}

if (useClarity) {
  try {
    window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${site.clarityId}`;
    document.head.append(script);
  } catch { /* Analytics never interrupts the UI or the other provider. */ }
}

if (useMetrica || useClarity) {
  function goal(name, params = {}) {
    try { if (useMetrica) window.ym(site.metricaId, 'reachGoal', name, { page: location.pathname, ...params }); }
    catch { /* Blocking analytics must not affect interactions or navigation. */ }
    try {
      if (useClarity) {
        window.clarity('event', name);
        if (params.project_id) {
          window.clarity('set', 'project_id', params.project_id);
          window.clarity('set', 'project_name', params.project_name);
          window.clarity('event', `project_open_${params.project_id}`);
        }
      }
    } catch { /* Providers are independent; failure in one must not block the other. */ }
  }
  document.addEventListener('click', event => {
    const link = event.target.closest?.('a[href]');
    if (!link) return;
    const name = linkGoal(link.href, location.origin);
    if (name) goal(name);
    const project = projects.find(item => item.id === link.dataset.openProject);
    if (project) goal('project_open', { item: project.id, project_id: project.id, project_name: project.name });
    if (link.classList.contains('project-external-link')) {
      goal('project_link_click', { project: link.closest('.project-dialog')?.dataset.project || '', destination: new URL(link.href).hostname });
    }
  }, true);

  document.addEventListener('portfolio:dialog-open', event => {
    if (event.detail?.type === 'skill') {
      goal(`${event.detail.type}_open`, { item: event.detail.id });
    }
  });
  const started = new WeakSet();
  const completed = new WeakSet();
  function videoContext(video) {
    const project = video.closest('[data-project]')?.dataset.project;
    const skill = video.closest('[data-skill]')?.dataset.skill;
    return { item: project || skill || '', placement: video.closest('dialog') ? 'gallery' : 'cover' };
  }
  document.addEventListener('play', event => {
    const video = event.target;
    if (video.tagName !== 'VIDEO' || started.has(video)) return;
    started.add(video);
    goal('video_start', videoContext(video));
  }, true);
  document.addEventListener('ended', event => {
    const video = event.target;
    if (video.tagName !== 'VIDEO' || completed.has(video)) return;
    completed.add(video);
    goal('video_complete', videoContext(video));
  }, true);
}
