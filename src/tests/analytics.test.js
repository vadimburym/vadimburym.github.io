import test from 'node:test';
import assert from 'node:assert/strict';
import { analyticsEnabled, linkGoal } from '../js/lib/analytics.js';

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
