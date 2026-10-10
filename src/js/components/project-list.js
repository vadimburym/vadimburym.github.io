import { renderProjects } from '../lib/render.js';
import { element } from './skill-list.js?v=20261010-readable';
import { selectProjects } from '../lib/projects.js?v=20261010-readable';
import { selectMediaSource } from '../lib/media.js?v=20261010-readable';

export function mountProjects(projects, featured = false) {
  const target = document.querySelector(featured ? '[data-featured-projects]' : '[data-project-list]');
  if (!target) return;
  const selection = selectProjects(projects, featured);
  let resetActiveCover = null;
  if (!target.dataset.prerendered) target.innerHTML = renderProjects(projects, featured);
  for (const project of selection) {
    const cover = target.querySelector(`[data-project="${project.id}"]`);
    if (project.coverVideo) {
      const play = cover.querySelector('.cover-play');
      const posterNodes = [...cover.childNodes];
      play.addEventListener('click', () => {
        resetActiveCover?.();
        const video = element('video');
        video.controls = true;
        video.playsInline = true;
        video.muted = project.coverVideo.muted !== false;
        video.preload = 'none';
        const compact = matchMedia('(max-width: 640px)').matches;
        video.poster = compact && project.coverMobile ? project.coverMobile : project.cover;
        video.setAttribute('aria-label', `Видео: ${project.name}`);
        video.src = selectMediaSource(project.coverVideo, compact);
        cover.replaceChildren(video);
        resetActiveCover = () => {
          video.pause();
          cover.replaceChildren(...posterNodes);
          video.removeAttribute('src');
          video.load();
          resetActiveCover = null;
        };
        video.focus();
        video.play().catch(() => { /* Native controls remain available for retry. */ });
        video.addEventListener('error', () => {
          if (!video.isConnected) return;
          const error = element('div', 'cover-video-error', 'Не удалось загрузить видео');
          const retry = element('button', 'link', 'Повторить');
          retry.type = 'button';
          retry.addEventListener('click', () => { error.remove(); video.load(); video.play().catch(() => {}); });
          error.append(retry);
          cover.append(error);
        });
      });
    }
  }
}
