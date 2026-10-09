import { element } from './skill-list.js?v=20261009-mobile-review';
import { animate, stopMotion, motionPreference } from '../lib/motion.js?v=20261009-mobile-review';
import { selectMediaSource } from '../lib/media.js?v=20261009-mobile-review';

export function createSkillGallery(items, label = 'Галерея навыка') {
  const gallery = element('div', 'skill-gallery');
  gallery.setAttribute('role', 'region');
  gallery.setAttribute('aria-label', label);
  if (!items.length) return gallery;
  const stage = element('div', 'gallery-stage');
  stage.setAttribute('role', 'group');
  const frame = element('div', 'gallery-frame');
  function button(className, text, name) {
    const node = element('button', className, text);
    node.type = 'button';
    node.setAttribute('aria-label', name);
    node.title = name;
    return node;
  }
  const previous = button('gallery-step gallery-previous', '‹', 'Предыдущий слайд');
  const next = button('gallery-step gallery-next', '›', 'Следующий слайд');
  const expand = button('gallery-expand', '', 'Развернуть галерею на весь экран');
  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  icon.setAttribute('viewBox', '0 0 24 24');
  icon.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(icon.namespaceURI, 'path');
  path.setAttribute('d', 'M9 4H4v5M15 4h5v5M20 15v5h-5M9 20H4v-5');
  icon.append(path);
  expand.append(icon);
  const dots = element('div', 'gallery-dots');
  dots.setAttribute('role', 'group');
  dots.setAttribute('aria-label', 'Выбор слайда');
  const announcement = element('span', 'sr-only');
  announcement.setAttribute('aria-live', 'polite');
  const viewer = element('dialog', 'gallery-viewer');
  viewer.setAttribute('aria-label', `${label} — полноэкранный просмотр`);
  const toolbar = element('div', 'gallery-viewer-toolbar');
  const caption = element('span', 'gallery-viewer-caption');
  const close = button('gallery-viewer-close', 'Закрыть ×', 'Закрыть полноэкранный просмотр');
  toolbar.append(caption, close);
  viewer.append(toolbar);
  let current = 0;
  let activeSlide = null;
  let closing = false;
  function pauseVideo() { stage.querySelectorAll('video').forEach(video => video.pause()); }
  function visual(item, index) {
    const slide = element('div', 'gallery-slide');
    if (item.src) {
      const video = /\.(mp4|webm)$/i.test(item.src);
      const media = element(video ? 'video' : 'img');
      if (video) {
        media.controls = !item.duration;
        media.playsInline = true;
        media.preload = 'none';
        media.poster = item.poster || '/assets/images/video-poster.svg';
        media.setAttribute('aria-label', item.alt);
      } else {
        media.alt = item.alt;
        media.decoding = 'async';
        media.draggable = false;
      }
      media.addEventListener('error', () => {
        if (!slide.isConnected) return;
        const error = element('div', 'gallery-error');
        error.setAttribute('role', 'status');
        const retry = button('gallery-retry', 'Повторить', 'Повторить загрузку файла');
        retry.addEventListener('click', () => show(current, true));
        error.append(element('span', '', 'Не удалось загрузить файл'), retry);
        slide.replaceChildren(error);
      }, { once: true });
      if (video && item.duration) {
        const poster = element('img', 'gallery-video-poster');
        poster.src = media.poster;
        poster.alt = item.alt;
        slide.append(poster);
        const play = button('cover-play', '', `Смотреть: ${item.alt}`);
        const playIcon = element('span', 'cover-play-icon', '▶');
        playIcon.setAttribute('aria-hidden', 'true');
        play.append(playIcon, element('span', 'cover-play-label', `Смотреть · ${item.duration} сек`));
        play.addEventListener('click', () => {
          play.remove();
          poster.replaceWith(media);
          media.controls = true;
          media.src = selectMediaSource(item, matchMedia('(max-width: 640px)').matches);
          media.focus({ preventScroll: true });
          media.play().catch(() => { /* Native controls allow retry. */ });
        }, { once: true });
        slide.append(play);
      } else {
        media.src = selectMediaSource(item, matchMedia('(max-width: 640px)').matches);
        slide.append(media);
      }
    } else {
      const placeholder = element('span', `gallery-placeholder gallery-tone-${index % 3}`);
      placeholder.setAttribute('aria-hidden', 'true');
      placeholder.append(element('span', 'gallery-placeholder-number', String(index + 1).padStart(2, '0')));
      placeholder.append(element('span', 'gallery-placeholder-label', 'Изображение проекта'));
      slide.append(placeholder);
    }
    return slide;
  }
  const buttons = items.map((item, index) => {
    const dot = button('gallery-dot', '', `Слайд ${index + 1}: ${item.alt}`);
    dot.addEventListener('click', () => show(index));
    dots.append(dot);
    return dot;
  });
  function show(index, force = false) {
    const target = (index + items.length) % items.length;
    if (!force && activeSlide && target === current) return;
    const direction = index < current ? -1 : 1;
    const outgoing = activeSlide;
    pauseVideo();
    current = target;
    activeSlide = visual(items[current], current);
    if (outgoing && !motionPreference.matches) {
      stopMotion(outgoing);
      outgoing.inert = true;
      outgoing.setAttribute('aria-hidden', 'true');
      stage.replaceChildren(outgoing, activeSlide);
      animate(outgoing, [{ opacity: 1 }, { opacity: 0 }], { duration: 180 }).then(() => outgoing.remove());
      animate(activeSlide, [{ opacity: 0, transform: `translateX(${direction * 10}px)` }, { opacity: 1, transform: 'translateX(0)' }], { duration: 240 });
    } else stage.replaceChildren(activeSlide);
    const text = `Слайд ${current + 1} из ${items.length}: ${items[current].alt}`;
    stage.setAttribute('aria-label', text);
    if (outgoing) announcement.textContent = text;
    caption.textContent = items[current].alt;
    buttons.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
  }
  function restore() {
    pauseVideo();
    gallery.insertBefore(frame, viewer);
    gallery.insertBefore(dots, viewer);
    expand.hidden = false;
    closing = false;
  }
  async function closeViewer(immediate = false) {
    if (!viewer.open || closing) return;
    closing = true;
    pauseVideo();
    if (!immediate) await animate(viewer, [{ opacity: 1 }, { opacity: 0 }], { duration: 160 });
    viewer.close();
    restore();
    if (!immediate) expand.focus({ preventScroll: true });
  }
  expand.addEventListener('click', () => {
    pauseVideo();
    viewer.append(frame, dots);
    expand.hidden = true;
    viewer.showModal();
    close.focus({ preventScroll: true });
    animate(viewer, [{ opacity: 0 }, { opacity: 1 }], { duration: 220 });
  });
  close.addEventListener('click', () => closeViewer());
  viewer.addEventListener('cancel', event => { event.preventDefault(); event.stopPropagation(); closeViewer(); });
  viewer.addEventListener('close', () => { if (frame.parentElement === viewer) restore(); });
  // Fullscreen controls must not trigger the parent dialog's outside-click handler.
  viewer.addEventListener('pointerdown', event => event.stopPropagation());
  viewer.addEventListener('click', event => event.stopPropagation());
  gallery.addEventListener('gallery-close', () => closeViewer(true));
  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  gallery.addEventListener('keydown', event => {
    if (event.target.closest('video')) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      event.stopPropagation();
      show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  let gesture = null;
  stage.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0 || event.target.closest('video,button')) return;
    gesture = { x: event.clientX, y: event.clientY, id: event.pointerId };
    stage.setPointerCapture(event.pointerId);
  });
  stage.addEventListener('pointercancel', () => { gesture = null; });
  stage.addEventListener('pointerup', event => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    gesture = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) show(current + (dx < 0 ? 1 : -1));
  });
  previous.hidden = next.hidden = dots.hidden = items.length < 2;
  frame.append(stage, previous, next, expand);
  gallery.append(frame, dots, viewer, announcement);
  show(0);
  return gallery;
}
