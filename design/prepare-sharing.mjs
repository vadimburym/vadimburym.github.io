// Run after setting site.url to the final HTTPS origin. No frontend build required.
import { readFile, writeFile } from 'node:fs/promises';
import { site } from '../src/js/data/site.js';
const root = new URL('../src/', import.meta.url);
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const origin = site.url ? new URL(site.url).origin : null;
if (origin && !origin.startsWith('https://')) throw new Error('site.url must be an HTTPS origin');
for (const route of ['', 'skills/', 'meta-skills/', 'projects/']) {
  const path = new URL(`${route}index.html`, root);
  let html = await readFile(path, 'utf8');
  html = html.replace(/\n?<!-- sharing:start -->[\s\S]*?<!-- sharing:end -->\n?/g, '\n');
  const title = html.match(/<title>(.*?)<\/title>/)[1];
  const description = html.match(/name="description" content="([^"]*)"/)[1];
  const image = `${origin || ''}/assets/images/social-preview.png`;
  const metadata = [
    '<!-- sharing:start -->',
    `<meta property="og:type" content="website">`,
    `<meta property="og:locale" content="ru_RU">`,
    `<meta property="og:site_name" content="Вадим Бурым — Unity Developer">`,
    `<meta property="og:title" content="${escape(title)}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="og:image:type" content="image/png">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="Вадим Бурым — Unity Developer. Игровой ИИ и архитектура">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escape(title)}">`,
    `<meta name="twitter:description" content="${description}">`,
    `<meta name="twitter:image" content="${image}">`,
    ...(origin ? [`<meta property="og:url" content="${origin}/${route}">`, `<link rel="canonical" href="${origin}/${route}">`] : []),
    '<!-- sharing:end -->',
  ].join('\n');
  html = html.replace('</head>', `${metadata}\n</head>`);
  await writeFile(path, html);
}
console.log(origin ? `Sharing metadata ready for ${origin}` : 'Preview prepared; set site.url and rerun before publishing for absolute sharing URLs.');
