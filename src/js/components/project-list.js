import { element } from './skill-list.js?v=20261009-mobile-review';
import { selectProjects } from '../lib/projects.js?v=20261009-mobile-review';
import { selectMediaSource } from '../lib/media.js?v=20261009-mobile-review';

export function mountProjects(projects, featured = false) {
  const target = document.querySelector(featured ? '[data-featured-projects]' : '[data-project-list]');
  if (!target) return;
  const selection = selectProjects(projects, featured);
  let resetActiveCover = null;
  target.replaceChildren(...selection.map(project => {
    const article = element('article', 'project');
    const url = new URL(location.href);
    url.searchParams.set('project', project.id);
    const href = url.pathname + url.search + url.hash;
    const cover = element(project.coverVideo ? 'div' : 'a', `media ${project.tone}${project.coverVideo ? ' video-cover' : ''}`);
    cover.dataset.project = project.id;
    if (!project.coverVideo) {
      cover.href = href;
      cover.dataset.openProject = project.id;
      cover.setAttribute('aria-label', `Открыть проект: ${project.name}`);
    }
    if (project.cover) {
      const image = element('img');
      image.src = project.cover;
      image.alt = '';
      image.loading = 'lazy';
      image.decoding = 'async';
      if (project.coverMobile) {
        const picture = element('picture');
        const source = element('source');
        source.media = '(max-width: 600px)';
        source.srcset = project.coverMobile;
        picture.append(source, image);
        cover.append(picture);
      } else {
        cover.append(image);
      }
    } else {
      cover.append(element('span', 'eyebrow', 'ВИЗУАЛ ПРОЕКТА'), element('b', '', String(project.order).padStart(2, '0')));
    }
    if (project.coverVideo) {
      const play = element('button', 'cover-play');
      play.type = 'button';
      const playLabel = project.coverVideo.label || 'Смотреть геймплей';
      play.setAttribute('aria-label', `${playLabel}: ${project.name}`);
      const icon = element('span', 'cover-play-icon', '▶');
      icon.setAttribute('aria-hidden', 'true');
      play.append(icon, element('span', 'cover-play-label', `${playLabel} · ${project.coverVideo.duration} сек`));
      const posterNodes = [...cover.childNodes, play];
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
      cover.append(play);
    }
    const info = element('div', 'project-info');
    const title = element('div', 'project-title');
    title.append(element(featured ? 'h3' : 'h2', '', project.name));
    if (project.showTitleMeta !== false) {
      title.append(element('span', 'eyebrow', project.showGenre === false ? project.platform : `${project.genre} / ${project.platform}`));
    }
    const detail = element('div', 'detail');
    const link = element('a', 'link', 'Подробнее ↗');
    link.href = href;
    link.dataset.openProject = project.id;
    link.setAttribute('aria-label', `Подробнее: ${project.name}`);
    detail.append(element('span', 'eyebrow', project.technologies.join(' · ')), link);
    info.append(title, element('div', 'eyebrow', `${project.role} · ${project.date}`), element('p', '', project.summary), detail);
    article.append(cover, info);
    return article;
  }));
}
