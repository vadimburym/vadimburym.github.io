import test from 'node:test';
import assert from 'node:assert/strict';
import { validGalleryItem, selectMediaSource } from '../js/lib/media.js';
import { projects } from '../js/data/projects.js';
import { coreSkills, coreCategories } from '../js/data/core-skills.js';
import { validateProjects } from '../js/lib/projects.js';
import { validateSkills } from '../js/lib/skills.js';

test('gallery supports video posters without changing existing records', () => {
  const video = { src: '/assets/videos/gameplay.webm', poster: '/assets/images/gameplay-cover.webp', alt: 'Игровой процесс' };
  assert.ok(validGalleryItem(video));
  assert.ok(validGalleryItem({ src: null, alt: 'Заглушка' }));
  assert.ok(validGalleryItem({ src: '/assets/images/screen.avif', alt: 'Схема' }));
  const projectCopy = structuredClone(projects);
  projectCopy[0].details.gallery = [video];
  assert.ok(validateProjects(projectCopy));
  const skillCopy = structuredClone(coreSkills);
  skillCopy[0].details = { description: 'Видео навыка', gallery: [video] };
  assert.ok(validateSkills(skillCopy, coreCategories));
});

test('compact screens select the smaller video with a desktop fallback', () => {
  const item = { src: '/assets/videos/demo.mp4', mobileSrc: '/assets/videos/demo-mobile.mp4', alt: 'Демо' };
  assert.ok(validGalleryItem(item));
  assert.equal(selectMediaSource(item, true), item.mobileSrc);
  assert.equal(selectMediaSource(item, false), item.src);
  assert.equal(selectMediaSource({ src: item.src }, true), item.src);
  for (const mobileSrc of ['https://example.com/video.mp4', '/assets/videos/../secret.mp4', '/assets/images/screen.png', 1]) {
    assert.equal(validGalleryItem({ ...item, mobileSrc }), false);
  }
  assert.equal(validGalleryItem({ ...item, src: '/assets/images/screen.png' }), false);
});

test('poster rejects external URLs, traversal, video files and missing accessible labels', () => {
  for (const poster of ['https://example.com/image.webp', '/assets/images/../secret.png', '/assets/videos/game.webm', 3]) {
    assert.equal(validGalleryItem({ src: '/assets/videos/demo.mp4', poster, alt: 'Видео' }), false);
  }
  assert.equal(validGalleryItem({ src: '/assets/images/screen.png', alt: '' }), false);
});
