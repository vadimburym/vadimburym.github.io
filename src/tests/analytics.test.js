import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { analyticsEnabled, linkGoal } from '../js/lib/analytics.js';
import { projects } from '../js/data/projects.js';

test('analytics runs only with a real counter on the public domain', () => {
  assert.ok(analyticsEnabled(12345, 'vadimburym.ru'));
  assert.ok(analyticsEnabled(12345, 'www.vadimburym.ru'));
  for (const host of ['localhost', '127.0.0.1', 'vadimburym.github.io', 'vadimburym.ru.example.com']) {
    assert.equal(analyticsEnabled(12345, host), false);
  }
  for (const id of [null, 0, -1, '12345', NaN]) assert.equal(analyticsEnabled(id, 'vadimburym.ru'), false);
});

test('CV goal matches the public PDF, not any similarly named external file', () => {
  const origin = 'https://vadimburym.ru';
  assert.equal(linkGoal('/assets/documents/vadim-burym-cv.pdf', origin), 'cv_open');
  assert.equal(linkGoal('https://other.example/assets/documents/vadim-burym-cv.pdf', origin), null);
  assert.equal(linkGoal('https://t.me/vadimburym', origin), 'telegram_click');
  assert.equal(linkGoal('https://t.me/other', origin), null);
  assert.equal(linkGoal('mailto:vadimburym@yandex.ru', origin), 'email_click');
});

test('public counter initializes once and records actual video starts without counting resume', () => {
  const code = readFileSync(new URL('../js/analytics.js', import.meta.url), 'utf8').replace(/^import .*;\r?\n/gm, '');
  for (const hostname of ['vadimburym.ru', 'localhost']) {
    const calls = [], scripts = [], listeners = new Map();
    const context = {
      site: { metricaId: 113589005 }, projects, analyticsEnabled, linkGoal, URL, WeakSet, Date,
      window: { ym: (...args) => calls.push(args) },
      location: { hostname, origin: `https://${hostname}`, pathname: '/', href: `https://${hostname}/` },
      document: { referrer: '', head: { append: script => scripts.push(script) }, createElement: () => ({}), addEventListener: (name, callback) => listeners.set(name, callback) },
    };
    runInNewContext(code, context);
    if (hostname === 'localhost') {
      assert.equal(calls.length, 0);
      assert.equal(scripts.length, 0);
      continue;
    }
    assert.equal(scripts.length, 1);
    assert.equal(scripts[0].src, 'https://mc.yandex.ru/metrika/tag.js?id=113589005');
    assert.equal(scripts[0].async, true);
    assert.equal(calls[0][1], 'init');
    assert.equal(calls[0][2].webvisor, true);
    const video = { tagName: 'VIDEO', closest: selector => selector === '[data-project]' ? { dataset: { project: 'exodus-core' } } : null };
    listeners.get('play')({ target: video });
    listeners.get('play')({ target: video });
    assert.equal(calls.filter(call => call[2] === 'video_start').length, 1);
    assert.equal(calls.at(-1)[3].item, 'exodus-core');
    listeners.get('ended')({ target: video });
    assert.equal(calls.at(-1)[2], 'video_complete');
    listeners.get('portfolio:dialog-open')({ detail: { type: 'project', id: 'exodus-core' } });
    assert.equal(calls.at(-1)[2], 'video_complete'); // Direct links/back navigation are not clicks.
    const link = { href: 'https://t.me/vadimburym', dataset: {}, classList: { contains: () => false } };
    listeners.get('click')({ target: { closest: () => link } });
    assert.equal(calls.at(-1)[2], 'telegram_click');
    const projectLink = { href: 'https://vadimburym.ru/?project=exodus-core', dataset: { openProject: 'exodus-core' }, classList: { contains: () => false } };
    listeners.get('click')({ target: { closest: () => projectLink } });
    assert.equal(calls.at(-1)[2], 'project_open');
    assert.equal(calls.at(-1)[3].project_id, 'exodus-core');
    assert.equal(calls.at(-1)[3].project_name, 'Osis Studio / Exodus Core');
    const cvLink = { href: 'https://vadimburym.ru/assets/documents/vadim-burym-cv.pdf', dataset: {}, classList: { contains: () => false } };
    listeners.get('click')({ target: { closest: () => cvLink } });
    assert.equal(calls.at(-1)[2], 'cv_open');
  }
});
