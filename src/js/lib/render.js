// Shared, DOM-free templates. The build and browser use exactly the same content.
import { selectProjects } from './projects.js';
import { groupSkills } from './skills.js';

export const escapeHtml = value => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const e = escapeHtml;
export const projectPath = id => `/projects/${encodeURIComponent(id)}/`;
export function projectIdFromPath(path) {
  const match = /^\/projects\/([a-z0-9-]+)\/$/.exec(path);
  return match?.[1] || null;
}
export const projectMeta = p => p.showTitleMeta === false ? p.date : `${p.showGenre === false ? p.platform : `${p.genre} / ${p.platform}`} · ${p.date}`;

export function renderProjects(projects, featured = false) {
  return selectProjects(projects, featured).map(p => {
    const href = projectPath(p.id);
    const image = p.cover ? `<img src="${e(p.cover)}" alt="" loading="lazy" decoding="async">` : `<span class="eyebrow">ВИЗУАЛ ПРОЕКТА</span><b>${String(p.order).padStart(2, '0')}</b>`;
    const media = p.coverMobile ? `<picture><source media="(max-width: 600px)" srcset="${e(p.coverMobile)}">${image}</picture>` : image;
    const label = p.coverVideo?.label || 'Смотреть геймплей';
    const play = p.coverVideo ? `<button class="cover-play" type="button" aria-label="${e(label)}: ${e(p.name)}"><span class="cover-play-icon" aria-hidden="true">▶</span><span class="cover-play-label">${e(label)} · ${p.coverVideo.duration} сек</span></button>` : '';
    const tag = p.coverVideo ? 'div' : 'a';
    return `<article class="project"><${tag} class="media ${e(p.tone)}${p.coverVideo ? ' video-cover' : ''}" data-project="${e(p.id)}"${p.coverVideo ? '' : ` href="${href}" data-open-project="${e(p.id)}" aria-label="Открыть проект: ${e(p.name)}"`}>${media}${play}</${tag}><div class="project-info"><div class="project-title"><${featured ? 'h3' : 'h2'}>${e(p.name)}</${featured ? 'h3' : 'h2'}>${p.showTitleMeta === false ? '' : `<span class="eyebrow">${e(p.showGenre === false ? p.platform : `${p.genre} / ${p.platform}`)}</span>`}</div><div class="eyebrow">${e(p.role)} · ${e(p.date)}</div><p>${e(p.summary)}</p><div class="detail"><span class="eyebrow">${e(p.technologies.join(' · '))}</span><a class="link" href="${href}" data-open-project="${e(p.id)}" aria-label="Подробнее: ${e(p.name)}">Подробнее ↗</a></div></div></article>`;
  }).join('');
}

export function renderLevel(level, levels, scaleId) {
  const label = !level ? 'Уровень пока не указан' : `Уровень ${level} из ${levels.length} — ${levels[level - 1]}`;
  return `<span class="level level-${levels.length}" role="img" aria-label="${e(label)}" title="${e(label)}"${scaleId ? ` aria-describedby="${e(scaleId)}"` : ''}>${levels.map((_, i) => `<i${level && i < level ? ' class="filled"' : ''}></i>`).join('')}<span class="sr-only">${e(label)}</span></span>`;
}
export const renderColumns = () => '<div class="column-head" aria-hidden="true"><span>НАВЫК</span><span>УРОВЕНЬ</span><span>ЛУЧШИЙ РЕЗУЛЬТАТ</span><span></span></div>';
export function renderSkillList(skills, levels, scaleId, label, { showColumns = true, pathname = '/skills/' } = {}) {
  return `<div class="skill-list" role="list" aria-label="${e(label)}">${showColumns ? renderColumns() : ''}${skills.map(s => `<div class="skill" data-skill-id="${e(s.id)}" role="listitem"><span class="skill-name${s.icon ? ' has-icon' : ''}">${s.icon ? `<img class="skill-icon" src="${e(s.icon)}" alt="" width="20" height="20" aria-hidden="true">` : ''}<span>${e(s.name)}</span></span>${renderLevel(s.level, levels, scaleId)}<span class="skill-desc">${e(s.bestResult)}</span>${s.details ? `<a class="skill-arrow" href="${e(pathname)}?skill=${e(s.id)}" data-open-skill="${e(s.id)}" aria-label="Подробнее: ${e(s.name)}">` : `<button class="skill-arrow" type="button" disabled title="Подробного разбора нет" aria-label="${e(s.name)}: подробного разбора нет">`}<span aria-hidden="true">↗</span></${s.details ? 'a' : 'button'}></div>`).join('')}</div>`;
}
export function renderSkillGroups(catalog, query = '', collapsed = new Set()) {
  const groups = groupSkills(catalog.skills, catalog.categories, query);
  if (!groups.length) return '';
  const options = { showColumns: false, pathname: catalog.pathname };
  if (catalog.showCategories === false) return renderColumns() + renderSkillList(groups.flatMap(g => g.skills).sort((a,b) => a.order - b.order), catalog.levels, 'catalog-levels', catalog.label, options);
  return renderColumns() + groups.map(c => {
    const hidden = !query.trim() && collapsed.has(c.id);
    const list = renderSkillList(c.skills, catalog.levels, 'catalog-levels', c.name, options).replace('<div ', `<div id="skills-${e(c.id)}"${hidden ? ' hidden' : ''} `);
    return `<section class="skill-category" aria-labelledby="category-${e(c.id)}"><h2 class="category-heading"><button class="category-toggle" type="button" id="category-${e(c.id)}" aria-controls="skills-${e(c.id)}" aria-expanded="${!hidden}"><span class="category-label">${c.icon ? `<img class="skill-icon" src="${e(c.icon)}" alt="" width="20" height="20" aria-hidden="true">` : ''}<span>${e(c.name)}</span></span><span class="category-chevron"></span></button></h2>${list}</section>`;
  }).join('');
}
export function renderScale(levels, label) {
  return `<aside class="scale-guide scale-guide-animated" id="catalog-levels" aria-label="Шкала оценки ${e(label)}"><div class="scale-heading"><div class="scale-preview" aria-hidden="true">${renderLevel(1, levels)}</div></div><ol class="scale-items scale-items-${levels.length}">${levels.map((text,i) => `<li><button class="scale-choice" type="button" aria-label="Уровень ${i+1}: ${e(text)}"><span class="scale-number" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><span>${e(text)}</span></button></li>`).join('')}</ol></aside>`;
}
export function renderEducation(items) {
  return items.map(item => `<article class="edu-card"><div class="edu-top"><div class="edu-logo${item.logo ? ' has-logo' : ''}">${item.logo ? `<img src="${e(item.logo)}" alt="${e(item.institution)}" width="56" height="56" loading="lazy">` : ''}</div><span class="dates">${e(item.date)}</span></div><h3>${e(item.name)}</h3><p>${e(item.institution)}<br>${e(item.programName || item.program)}</p><a class="link" href="/?education=${e(item.id)}" data-open-education="${e(item.id)}" aria-label="Документ: ${e(item.name)}">Документ ↗</a></article>`).join('');
}
export function renderProjectAction(action) {
  if (!action) return '';
  const host = action.url ? new URL(action.url).hostname : '';
  const icon = host === 'github.com' ? 'github-mark' : host === 'store.steampowered.com' ? 'steam-mark' : host === 'jammer.website' ? 'jammer-mark' : host === 'yandex.ru' ? 'yandex-mark' : host === 'itch.io' || host.endsWith('.itch.io') ? 'itch-mark' : null;
  const tag = action.url ? 'a' : 'button';
  return `<${tag} class="project-external-link"${action.url ? ` href="${e(action.url)}" target="_blank" rel="noopener noreferrer"` : ' type="button" disabled title="Ссылка пока не указана"'}>${icon ? `<img src="/assets/images/${icon}.svg" alt="" width="16" height="16">` : ''}<span>${e(action.label)}</span><span class="social-arrow" aria-hidden="true">↗</span></${tag}>`;
}
export function renderProjectDetails(p) {
  const b = p.details.benchmark;
  const benchmark = b ? `<table class="project-benchmark"><caption>${e(b.caption)}</caption><thead><tr>${b.headers.map(s=>`<th scope="col">${e(s)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(row=>`<tr>${row.map((s,i)=>`<${i ? 'td' : 'th scope="row"'}>${e(s)}</${i ? 'td' : 'th'}>`).join('')}</tr>`).join('')}</tbody></table><p class="project-benchmark-note">${e(b.note)}</p>` : '';
  return `<div class="eyebrow">ПРОЕКТ</div><div class="project-dialog-heading"><h2 id="project-dialog-title">${e(p.name)}</h2>${renderProjectAction(p.action)}</div><p class="project-dialog-meta">${e(projectMeta(p))}</p><div class="project-dialog-layout"><dl class="project-facts"><div><dt>${e(p.role)}</dt><dd>${e(p.details.responsibility)}</dd></div><div><dt>Технологии</dt><dd>${e(p.technologies.join(' · '))}</dd></div></dl><div class="project-context"><h3>Описание</h3><p class="dialog-description">${e(p.details.description)}</p></div><div class="project-achievements"><h3>Достижения</h3>${Array.isArray(p.details.achievements) ? `<ul class="project-achievement-list">${p.details.achievements.map(s=>`<li>${e(s)}</li>`).join('')}</ul>` : `<p class="dialog-description">${e(p.details.achievements)}</p>`}${benchmark}</div></div>`;
}
