// Copy the public dependency graph only. No drafts, notes or unused source media.
import { readFile, writeFile, stat, mkdir, copyFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from '../src/js/data/site.js';

const root = path.resolve(fileURLToPath(new URL('../src/', import.meta.url)));
const output = path.resolve(root, '../output/site-release');
const queue = ['index.html', 'projects/index.html', 'skills/index.html', 'meta-skills/index.html', 'cv/index.html'];
const seen = new Set(), files = [], external = new Set(), missing = [];
function add(ref, parent) {
  if (/^https?:\/\//.test(ref)) { external.add(ref); return; }
  if (ref.includes('${') || ref.includes('\\') || ref.startsWith('//')) return;
  ref = ref.split(/[?#]/)[0];
  if (!ref || !/^(\/|\.\.?\/|assets\/|css\/|js\/)/.test(ref)) return;
  let rel = ref.startsWith('/') ? ref.slice(1) : path.posix.join(path.posix.dirname(parent), ref);
  if (ref.endsWith('/')) rel += 'index.html';
  const absolute = path.resolve(root, rel);
  if (!absolute.startsWith(root + path.sep)) throw new Error('Reference escapes public root: ' + ref);
  queue.push(rel);
}
while (queue.length) {
  const rel = queue.shift();
  if (seen.has(rel)) continue;
  seen.add(rel);
  const absolute = path.join(root, rel);
  let info;
  try { info = await stat(absolute); } catch { missing.push(rel); continue; }
  if (!info.isFile()) { missing.push(rel); continue; }
  files.push({ path: rel, bytes: info.size });
  if (!/\.(html|css|js)$/.test(rel)) continue;
  const text = await readFile(absolute, 'utf8');
  if (!rel.endsWith('.css')) for (const match of text.matchAll(/["']((?:https?:\/\/|\/|\.\.?\/|assets\/|css\/|js\/)[^"'<>\s]+)["']/g)) add(match[1], rel);
  for (const match of text.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)) add(match[1], rel);
  for (const match of text.matchAll(/srcset="([^"]+)"/g)) for (const part of match[1].split(',')) add(part.trim().split(/\s+/)[0], rel);
}
if (missing.length) throw new Error('Missing public files:\n' + missing.join('\n'));
// The resolved destination is fixed within output; source files are never removed.
if (output !== path.resolve(root, '../output/site-release')) throw new Error('Invalid release destination');
await rm(output, { recursive: true, force: true });
for (const file of files) {
  const target = path.join(output, file.path);
  await mkdir(path.dirname(target), { recursive: true });
  await copyFile(path.join(root, file.path), target);
}
await writeFile(path.join(output, '.nojekyll'), '');
if (site.url) {
  const origin = new URL(site.url).origin;
  await writeFile(path.join(output, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
  const routes = ['', 'projects/', 'skills/', 'meta-skills/'];
  await writeFile(path.join(output, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + routes.map(route => `<url><loc>${origin}/${route}</loc></url>`).join('') + '</urlset>');
}
const report = { files, totalBytes: files.reduce((sum, f) => sum + f.bytes, 0), external: [...external].sort(), missing };
await mkdir(path.resolve(root, '../output/mobile-review'), { recursive: true });
await writeFile(path.resolve(root, '../output/mobile-review/release-report.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ files: files.length, megabytes: +(report.totalBytes / 1e6).toFixed(1), largest: [...files].sort((a,b) => b.bytes-a.bytes).slice(0,3), externalLinks: external.size }));
