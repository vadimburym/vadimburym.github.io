import test from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { addEnglish } from '../../tools/english.mjs';
import { prerender, publicText } from '../../tools/prerender.mjs';
import { otherLanguageUrl } from '../js/lib/language.js';

test('language changes preserve the page, search and fragment in both directions', () => {
  for (const route of ['/', '/projects/dodbt/', '/skills/', '/meta-skills/']) {
    assert.equal(otherLanguageUrl(route), '/en' + route);
    assert.equal(otherLanguageUrl('/en' + route, '?q=DOTS', '#content'), route + '?q=DOTS#content');
  }
});

test('every Russian page has a complete English counterpart and links to the matching CV', async () => {
  const root = fileURLToPath(new URL('../', import.meta.url));
  const pages = await prerender(root);
  pages.set('portfolio.txt', publicText());
  await addEnglish(pages, root);
  for (const [file, source] of pages) {
    if (file.startsWith('en/')) {
      assert.doesNotMatch(source, /[\u0400-\u04FF]/u, file + ' has untranslated content');
      continue;
    }
    if (!file.endsWith('index.html')) continue;
    const en = pages.get('en/' + file);
    const route = '/' + file.slice(0, -'index.html'.length);
    assert.ok(en.includes('<html lang="en">'), file);
    assert.ok(source.includes('vadim-burym-cv.pdf') && en.includes('vadim-burym-cv-en.pdf'), file);
    assert.ok(!en.includes('vadim-burym-cv.pdf'), file);
    assert.ok(en.includes('hreflang="ru" href="https://vadimburym.ru' + route + '"'), file);
    if (route === '/cv/') continue;
    assert.ok(en.includes('class="language-switch" href="' + route + '"'), file);
    assert.ok(source.includes('class="language-switch" href="/en' + route + '"'), file);
    assert.ok(en.includes('rel="canonical" href="https://vadimburym.ru/en' + route + '"'), file);
    for (const key of ['data-skill-id', 'data-open-project', 'data-open-education']) {
      const ids = html => [...html.matchAll(new RegExp(key + '="([^"]+)"', 'g'))].map(match => match[1]);
      assert.deepEqual(ids(en), ids(source), file);
    }
    assert.deepEqual([...en.matchAll(/href="(https?:[^"]+)"/g)].map(m=>m[1]).filter(s=>!s.startsWith('https://vadimburym.ru')),
      [...source.matchAll(/href="(https?:[^"]+)"/g)].map(m=>m[1]).filter(s=>!s.startsWith('https://vadimburym.ru')), file);
  }
});
