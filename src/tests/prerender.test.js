import test from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { prerender } from '../../tools/prerender.mjs';
import { projects } from '../js/data/projects.js';
import { coreSkills } from '../js/data/core-skills.js';
import { metaSkills } from '../js/data/meta-skills.js';
import { escapeHtml, renderProjects, renderProjectDetails, projectPath, projectIdFromPath } from '../js/lib/render.js';

const root = fileURLToPath(new URL('../', import.meta.url));
test('HTML contains the entire public catalog and real contacts without executing JavaScript', async () => {
  const pages = await prerender(root);
  assert.equal(pages.size, 12);
  for (const [file, html] of pages) {
    assert.doesNotMatch(html, /hello@example\.com|Название университета|Загрузка навыков|Загрузка содержимого/);
    assert.ok(html.includes('mailto:vadimburym@yandex.ru'),file);
    const schemas = [...html.matchAll(/<script type="application\/ld\+json" data-portfolio-schema>(.*?)<\/script>/g)];
    assert.equal(schemas.length,1,file);
    assert.doesNotThrow(()=>JSON.parse(schemas[0][1]));
  }
  for(const [skills,file] of [[coreSkills,'skills/index.html'],[metaSkills,'meta-skills/index.html']]) {
    const html=pages.get(file);
    assert.equal((html.match(/data-skill-id=/g)||[]).length,skills.length);
    skills.forEach(s=>assert.ok(html.includes(escapeHtml(s.name))));
    assert.ok(html.includes('Уровень 2 из'));
  }
  for(const p of projects) {
    const html=pages.get(`projects/${p.id}/index.html`);
    assert.ok(pages.get('projects/index.html').includes(`href="${projectPath(p.id)}"`));
    assert.ok(html.includes(escapeHtml(p.details.description)));
    const achievements=Array.isArray(p.details.achievements) ? p.details.achievements : [p.details.achievements];
    achievements.forEach(a=>assert.ok(html.includes(escapeHtml(a))));
    assert.ok(html.includes(`rel="canonical" href="https://vadimburym.ru${projectPath(p.id)}"`));
    if(p.action?.url) assert.ok(html.includes(escapeHtml(p.action.url)));
  }
});
test('building already generated pages is idempotent (local sync followed by CI build)', async () => {
  const first = await prerender(root);
  const prefix = path.join(os.tmpdir(),'portfolio-prerender-');
  const temp = await mkdtemp(prefix);
  try {
    for(const [name,html] of first) { await mkdir(path.dirname(path.join(temp,name)),{recursive:true}); await writeFile(path.join(temp,name),html); }
    const second=await prerender(temp);
    for(const [name,html] of first) assert.equal(second.get(name),html,name);
  } finally {
    if (!path.resolve(temp).startsWith(path.resolve(prefix))) throw new Error('Unexpected test directory');
    await rm(temp,{recursive:true,force:true});
  }
});
test('shared templates escape plain text; paths do not accept traversal', () => {
  const p=structuredClone(projects[0]);
  p.name='<img src=x onerror=alert(1)>';
  p.details.description='<script>alert(1)</script>';
  const html=renderProjects([p])+renderProjectDetails(p);
  assert.doesNotMatch(html,/<script>|<img src=x/);
  assert.ok(html.includes('&lt;script&gt;'));
  assert.equal(projectIdFromPath('/projects/exodus-core/'),'exodus-core');
  for(const path of ['/projects/','/projects/../','/projects/x/extra/','/projects/%2e%2e/']) assert.equal(projectIdFromPath(path),null);
});
