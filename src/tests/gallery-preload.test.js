import test from 'node:test';
import assert from 'node:assert/strict';
import { preloadGalleryImages } from '../js/lib/gallery-preload.js';

test('gallery preloads still images in order, skips videos and waits for each request', async () => {
  const calls = [], pending = [];
  const items = [{src:'first.webp'}, {src:'clip.mp4'}, {src:null}, {src:'second.webp'}];
  const task = preloadGalleryImages(items, item => {
    calls.push(item.src);
    return new Promise(resolve => pending.push(resolve));
  });
  assert.deepEqual(calls, ['first.webp']);
  pending.shift()();
  await new Promise(resolve => setImmediate(resolve));
  assert.deepEqual(calls, ['first.webp', 'second.webp']);
  pending.shift()();
  await task;
});

test('closing a gallery stops its queue after the in-flight request', async () => {
  let active = true, finish;
  const calls = [];
  const task = preloadGalleryImages([{src:'first.webp'}, {src:'second.webp'}], item => {
    calls.push(item.src);
    return new Promise(resolve => { finish = resolve; });
  }, () => active);
  active = false;
  finish();
  await task;
  assert.deepEqual(calls, ['first.webp']);
});

test('a failed image does not block the rest of the gallery', async () => {
  const calls = [];
  await preloadGalleryImages([{src:'missing.webp'}, {src:'second.webp'}], async item => {
    calls.push(item.src);
    if (item.src === 'missing.webp') throw new Error('Missing file');
  });
  assert.deepEqual(calls, ['missing.webp', 'second.webp']);
});
