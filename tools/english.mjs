import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { site } from '../src/js/data/site.js';
import { escapeHtml } from '../src/js/lib/render.js';
import { languageSwitch } from '../src/js/lib/language.js';

const dictionary = JSON.parse(await readFile(new URL('./english.json', import.meta.url), 'utf8'));
const forms = new Map();
for (const [ru, en] of Object.entries(dictionary)) {
  forms.set(ru, en.replaceAll("'", '’'));
  forms.set(escapeHtml(ru), escapeHtml(en.replaceAll("'", '’')));
  forms.set(JSON.stringify(ru).slice(1, -1), JSON.stringify(en.replaceAll("'", '’')).slice(1, -1));
}
const escapeRegex = value => value.replace(/[.*+?^$()|[\]\\]/g, '\\$&');
const alternatives = [...forms.keys()].sort((a,b) => b.length - a.length).map(escapeRegex);
const phrases = new RegExp('(?<![А-Яа-яЁё])(?:' + alternatives.join('|') + ')(?![А-Яа-яЁё])', 'gu');

function english(text) {
  return text.replace(phrases, match => forms.get(match))
    .replaceAll('/assets/images/social-preview.png', '/assets/images/social-preview-en.png')
    .replaceAll('vadim-burym-cv.pdf', 'vadim-burym-cv-en.pdf')
    .replaceAll('lang="ru"', 'lang="en"').replaceAll('ru_RU', 'en_US').replaceAll("'ru-RU'", "'en-US'")
    .replaceAll("toLocaleLowerCase('ru')", "toLocaleLowerCase('en')")
    .replaceAll("'е'", "'\\u0435'")
    .replace(/https:\/\/vadimburym\.ru\/(?!assets\/)/g, site.url + '/en/')
    .replace(/(["'\x60])\/(?=(?:projects\/|skills\/|meta-skills\/|portfolio\.txt|cv\/|[?#]))/g, '$1/en/')
    .replaceAll('href="/"', 'href="/en/"').replaceAll("href = '/'", "href = '/en/'")
    .replaceAll("['home', '/',", "['home', '/en/',").replaceAll("new Set(['/',", "new Set(['/en/',")
    .replaceAll("fallbackPath = '/'", "fallbackPath = '/en/'")
    .replaceAll('^\\/projects\\/', '^\\/en\\/projects\\/')
    .replace(/(["'])\/js\/(?!vendor\/|lib\/language\.js)/g, '$1/en/js/');
}

function withSwitch(html, route, englishPage) {
  // The public checkout is also a valid build input.
  html = html.replace(/<a class="language-switch"[^>]*>[\s\S]*?<\/a>/g, '')
    .replace(/<link rel="alternate" hreflang="(?:ru|en|x-default)"[^>]*>\s*/g, '');
  const alternates = ['ru', 'en', 'x-default'].map(lang =>
    '<link rel="alternate" hreflang="' + lang + '" href="' + site.url + (lang === 'en' ? '/en' : '') + route + '">');
  const control = languageSwitch((englishPage ? '/en' : '') + route);
  return html.replace('</header>', control + '</header>')
    .replace('<div class="dialog-actions">', '<div class="dialog-actions">' + control)
    .replace('</head>', alternates.join('\n') + '\n</head>');
}

export async function addEnglish(pages, root) {
  pages.set('cv/index.html', await readFile(path.join(root, 'cv/index.html'), 'utf8'));
  for (const [file, source] of [...pages]) {
    if (file.endsWith('.html')) {
      const route = '/' + file.slice(0, -'index.html'.length);
      const clean = source.replace(/<a class="language-switch"[^>]*>[\s\S]*?<\/a>/g, '');
      pages.set('en/' + file, withSwitch(english(clean), route, true));
      pages.set(file, withSwitch(source, route, false));
    } else {
      pages.set('en/' + file, english(source));
    }
  }
  // Mirror only modules the public application imports. Images, fonts, CSS and
  // the language switch implementation remain shared between both versions.
  const pending = ['js/page-transition.js', 'js/bootstrap.js', 'js/main.js', 'js/analytics.js'];
  while (pending.length) {
    const file = pending.pop();
    if (pages.has('en/' + file)) continue;
    const source = await readFile(path.join(root, file), 'utf8');
    pages.set('en/' + file, english(source));
    for (const match of source.matchAll(/\bfrom\s+['"](\.[^'"]+\.js)(?:\?[^'"]*)?['"]/g)) {
      pending.push(path.posix.join(path.posix.dirname(file), match[1]));
    }
  }
}
