import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { site } from '../src/js/data/site.js';
import { projects } from '../src/js/data/projects.js';
import { coreSkills, coreLevels, coreCategories } from '../src/js/data/core-skills.js';
import { metaSkills, metaLevels, metaCategories } from '../src/js/data/meta-skills.js';
import { education } from '../src/js/data/education.js';
import { featuredSkills, validateSkills } from '../src/js/lib/skills.js';
import { validateProjects } from '../src/js/lib/projects.js';
import { escapeHtml as e, renderProjects, renderSkillList, renderSkillGroups, renderScale, renderEducation, renderProjectDetails, projectPath } from '../src/js/lib/render.js';

export const catalogs = [
  { skills: coreSkills, levels: coreLevels, categories: coreCategories, label: 'Core Skills', pathname: '/skills/', slot: 'core' },
  { skills: metaSkills, levels: metaLevels, categories: metaCategories, label: 'Meta Skills', pathname: '/meta-skills/', slot: 'meta', showCategories: false },
];
function slot(html, name, content) {
  const pattern = new RegExp(`<!-- prerender:${name} -->[\\s\\S]*?<!-- /prerender:${name} -->`);
  if (!pattern.test(html)) throw new Error(`Missing prerender slot: ${name}`);
  return html.replace(pattern, () => `<!-- prerender:${name} -->${content}<!-- /prerender:${name} -->`);
}
function contacts(html) {
  return html.replace(/<(button|a)\b([^>]*\bdata-contact="(email|github|telegram)"[^>]*)>([\s\S]*?)<\/\1>/g, (_,tag,attrs,key,body) => {
    const value = site[key];
    if (!value) throw new Error(`Missing public contact: ${key}`);
    const clean = attrs.replace(/\s(?:type|data-pending|href|target|rel)="[^"]*"/g, '');
    return `<a${clean} href="${e(key === 'email' ? `mailto:${value}` : value)}"${key === 'email' ? '' : ' target="_blank" rel="noopener noreferrer"'}>${key === 'email' ? `${e(value)} ↗` : body}</a>`;
  });
}
function metadata(html, { title, description, url, image, schema }) {
  if (title) html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${e(title)}</title>`)
    .replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*"/g, `$1${e(title)}"`);
  if (description) html = html.replace(/<meta (?:name="description"|property="og:description"|name="twitter:description") content="[^"]*"\s*>/g, '');
  // Replace descriptions explicitly, without interpreting dollar signs in user text.
  if (description) html = html.replace('</head>', `<meta name="description" content="${e(description)}">\n<meta property="og:description" content="${e(description)}">\n<meta name="twitter:description" content="${e(description)}">\n</head>`);
  html = html.replace(/(<link rel="canonical" href=")[^"]*"/, () => `<link rel="canonical" href="${e(url)}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, () => `<meta property="og:url" content="${e(url)}"`);
  if (image) html = html.replace(/(<meta (?:property="og:image"|name="twitter:image") content=")[^"]*"/g, (match,prefix) => `${prefix}${e(image)}"`);
  html = html.replace(/<script type="application\/ld\+json" data-portfolio-schema>[\s\S]*?<\/script>\r?\n?/g, '')
    .replace(/<link rel="alternate" type="text\/plain"[^>]*>\r?\n?/g,'');
  if (schema) html = html.replace('</head>', `<script type="application/ld+json" data-portfolio-schema>${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>\n<link rel="alternate" type="text/plain" href="/portfolio.txt" title="Полный текст портфолио">\n</head>`);
  return html;
}
export async function prerender(root) {
  validateProjects(projects);
  catalogs.forEach(c => validateSkills(c.skills,c.categories,c.levels.length));
  const origin = new URL(site.url).origin;
  const pages = new Map();
  const person = { '@type': 'Person', '@id': `${origin}/#person`, name: 'Вадим Бурым', url: `${origin}/`, jobTitle: 'Unity Developer', email: site.email, sameAs: [site.github, site.telegram] };
  for (const route of ['', 'projects/', 'skills/', 'meta-skills/']) {
    let html = await readFile(path.join(root, route, 'index.html'), 'utf8');
    html = contacts(html);
    html = html.replace(/<div class="load-status[^>]*>[\s\S]*?<\/div>/g, '')
      .replace(/<noscript>[\s\S]*?<\/noscript>/g, '');
    html = html.replace(/<(div)([^>]*(?:data-featured-projects|data-project-list|data-featured-core|data-featured-meta|class="education-grid"|id="skill-results")[^>]*)>/g, (m,tag,attrs) => `<${tag}${attrs.replace(/ data-prerendered="[^"]*"/g,'')} data-prerendered="true">`);
    if (!route) {
      html = slot(html, 'projects', renderProjects(projects, true));
      for (const c of catalogs) html = slot(html, c.slot, renderSkillList(featuredSkills(c.skills),c.levels,null,c.label,{showColumns:false,pathname:'/'}));
      html = slot(html, 'education', renderEducation(education));
    } else if (route === 'projects/') html = slot(html, 'projects', renderProjects(projects));
    else {
      const c = catalogs.find(c => c.pathname === `/${route}`);
      html = slot(html, 'scale', renderScale(c.levels,c.label));
      html = slot(html, 'skills', renderSkillGroups(c));
    }
    html = metadata(html, {url:`${origin}/${route}`, schema:{'@context':'https://schema.org','@type': !route ? 'ProfilePage' : 'CollectionPage', url:`${origin}/${route}`, mainEntity: !route ? person : {'@type':'ItemList',itemListElement:route==='projects/' ? projects.map((p,i)=>({'@type':'ListItem',position:i+1,name:p.name,url:origin+projectPath(p.id)})) : catalogs.find(c=>c.pathname===`/${route}`).skills.map((s,i)=>({'@type':'ListItem',position:i+1,name:s.name}))}}});
    // Root-relative resources also work at the new project paths.
    html = html.replace(/(href|src|srcset)="(assets\/|css\/|js\/)/g, '$1="/$2').replace(/, (assets\/)/g, ', /$1');
    pages.set(`${route}index.html`,html.replace(/[ \t]+$/gm, ''));
  }
  for (const p of projects) {
    const url = origin + projectPath(p.id);
    let html = pages.get('projects/index.html');
    const gallery = p.details.gallery.length ? `<div data-static-gallery><h3>Материалы проекта</h3><ul>${p.details.gallery.map(item=>`<li><a href="${e(item.src)}">${e(item.alt)}</a></li>`).join('')}</ul></div>` : '';
    const document = renderProjectDetails(p).replace('<h2 id="project-dialog-title">','<h1 id="project-dialog-title">').replace(`${e(p.name)}</h2>`,`${e(p.name)}</h1>`);
    html = html.replace('<main id="content" tabindex="-1">', `<main id="content" tabindex="-1"><div data-static-backdrop></div><article class="skill-dialog project-dialog" data-static-dialog="project" data-project="${e(p.id)}" aria-labelledby="project-dialog-title"><div class="dialog-actions"><a href="/projects/" class="dialog-close">Закрыть ×</a></div><div class="dialog-content" data-project-document="${e(p.id)}">${document}${gallery}</div></article>`);
    html = metadata(html, {title:`${p.name} — Вадим Бурым`,description:p.summary,url,schema:{'@context':'https://schema.org','@type':'WebPage',url,name:p.name,description:p.summary,mainEntity:{'@type':'CreativeWork',name:p.name,description:p.details.description,url,contributor:person,...(p.action?.url ? {sameAs:p.action.url} : {})}}});
    pages.set(`projects/${p.id}/index.html`,html.replace(/[ \t]+$/gm, ''));
  }
  return pages;
}

export function publicText() {
  const origin = new URL(site.url).origin;
  const lines = ['Вадим Бурым — Unity Developer', 'Специализация: Игровой ИИ, Архитектура', `Портфолио: ${origin}/`, `CV: ${origin}/assets/documents/vadim-burym-cv.pdf`, `Почта: ${site.email}`, `Telegram: ${site.telegram}`, `GitHub: ${site.github}`, '', 'ПРОЕКТЫ'];
  for (const p of projects) {
    lines.push('',p.name,origin+projectPath(p.id),`${p.role} | ${p.date}`,`${p.genre} | ${p.platform}`,`Технологии: ${p.technologies.join(', ')}`,p.summary,'',p.details.description,`Моя ответственность: ${p.details.responsibility}`,'Достижения:',...(Array.isArray(p.details.achievements) ? p.details.achievements : [p.details.achievements]).map(a=>`- ${a}`));
    if (p.details.benchmark) { const b=p.details.benchmark; lines.push(b.caption,b.headers.join(' | '),...b.rows.map(row=>row.join(' | ')),b.note); }
    if (p.action?.url) lines.push(`${p.action.label}: ${p.action.url}`);
    p.details.gallery.forEach(item=>lines.push(`${item.alt}: ${origin}${item.src}`));
  }
  for (const c of catalogs) {
    lines.push('',c.label,'Уровни ниже являются самооценкой отдельных навыков.');
    c.skills.forEach(s=>lines.push(`${s.name}: ${s.level || 0}/${c.levels.length}${s.level ? ` (${c.levels[s.level-1]})` : ''}${s.bestResult ? `. ${s.bestResult}` : ''}`));
  }
  lines.push('','ОБРАЗОВАНИЕ');
  education.forEach(item=>lines.push(`${item.date}: ${item.institution}. ${item.name}. ${item.program}${item.programName ? `. ${item.programName}` : ''}`));
  return lines.join('\n')+'\n';
}
