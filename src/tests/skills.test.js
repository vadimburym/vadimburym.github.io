import test from 'node:test';
import assert from 'node:assert/strict';
import { coreSkills, coreCategories } from '../js/data/core-skills.js';
import { metaSkills, metaCategories, metaLevels } from '../js/data/meta-skills.js';
import { validateSkills, filterSkills, featuredSkills, groupSkills } from '../js/lib/skills.js';

test('Meta catalog shares the data contract with its three-level scale', () => {
  assert.equal(validateSkills(metaSkills, metaCategories, metaLevels.length), true);
  assert.equal(groupSkills(metaSkills, metaCategories).flatMap(group => group.skills).length, metaSkills.length);
  assert.equal(metaLevels.length, 3);
  const edited = structuredClone(metaSkills);
  edited[0].level = 4;
  assert.throws(() => validateSkills(edited, metaCategories, metaLevels.length));
  edited[0].level = null;
  assert.equal(validateSkills(edited, metaCategories, metaLevels.length), true);
});

test('Meta featured skills preserve the approved home order', () => {
  const selected = featuredSkills(metaSkills);
  assert.deepEqual(selected.map(skill => [skill.id, skill.level]), [
    ['technical-art', 2], ['figma', 2], ['photoshop', 2],
  ]);
  assert.ok(selected.every(skill => metaSkills.includes(skill)));
  assert.ok(metaSkills.filter(skill => skill.level === 0).every(skill => skill.bestResult === ''));
});

test('Meta aliases filter categories and popup IDs are unique across catalogs', () => {
  assert.deepEqual(filterSkills(metaSkills, ' ФИГМА ').map(skill => skill.id), ['figma']);
  assert.deepEqual(groupSkills(metaSkills, metaCategories, 'фигма').map(group => group.id), ['design']);
  assert.equal(filterSkills(metaSkills, 'гит').length, 0);
  const all = [...coreSkills, ...metaSkills];
  assert.equal(new Set(all.map(skill => skill.id)).size, all.length);
});

test('the shared catalog is valid and every skill appears in exactly one category', () => {
  assert.equal(validateSkills(coreSkills, coreCategories), true);
  const groups = groupSkills(coreSkills, coreCategories);
  assert.equal(groups.flatMap(group => group.skills).length, coreSkills.length);
  assert.equal(new Set(groups.flatMap(group => group.skills.map(skill => skill.id))).size, coreSkills.length);
});

test('search handles aliases, Cyrillic, case, whitespace and multiple terms', () => {
  assert.deepEqual(filterSkills(coreSkills, '  СИ   ШАРП ').map(skill => skill.id), ['unity-lifecycle']);
  assert.ok(filterSkills(coreSkills, 'C#').some(skill => skill.id === 'unity-lifecycle'));
  assert.deepEqual(filterSkills(coreSkills, ' ECS ').map(skill => skill.id), ['ecs']);
  assert.deepEqual(filterSkills(coreSkills, 'unity UI').map(skill => skill.id), ['ugui']);
  const custom = [{ name: 'Учет', aliases: [] }];
  assert.equal(filterSkills(custom, 'учет').length, 1);
});

test('empty search restores all skills; unknown search leaves no empty categories', () => {
  assert.equal(filterSkills(coreSkills, '   ').length, coreSkills.length);
  assert.deepEqual(groupSkills(coreSkills, coreCategories, '<unknown>'), []);
  assert.deepEqual(groupSkills(coreSkills, coreCategories, 'leoecs').map(group => group.id), ['architecture']);
});

test('home uses the same objects; feature changes do not require editing HTML', () => {
  const selected = featuredSkills(coreSkills);
  assert.equal(selected.length, 7);
  assert.ok(selected.every(skill => coreSkills.includes(skill)));
  const edited = structuredClone(coreSkills);
  const promoted = edited.find(skill => skill.id === 'oop');
  promoted.featured = true;
  promoted.featuredOrder = 0;
  promoted.bestResult = 'Updated once in the data';
  assert.equal(featuredSkills(edited)[0], promoted);
  assert.equal(groupSkills(edited, coreCategories, 'oop')[0].skills[0].bestResult, promoted.bestResult);
});

test('selection and grouping preserve source arrays', () => {
  const before = JSON.stringify(coreSkills);
  featuredSkills(coreSkills);
  groupSkills(coreSkills, coreCategories);
  assert.equal(JSON.stringify(coreSkills), before);
});

test('invalid data fails validation before rendering', () => {
  for (const patch of [{ level: 6 }, { level: -1 }, { level: 2.5 }, { categoryId: 'missing' }, { id: 'not a slug' }, { icon: 'https://example.com/icon.svg' }, { details: { description: 42, sections: [] } }]) {
    const edited = structuredClone(coreSkills);
    Object.assign(edited[0], patch);
    assert.throws(() => validateSkills(edited, coreCategories));
  }
  assert.throws(() => validateSkills([...coreSkills, coreSkills[0]], coreCategories));
  const edited = structuredClone(coreSkills);
  edited.find(skill => skill.id === 'modules').featuredOrder = edited.find(skill => skill.id === 'ecs').featuredOrder;
  assert.throws(() => validateSkills(edited, coreCategories));
});

test('unknown level and missing detail are valid independent states', () => {
  const edited = structuredClone(coreSkills);
  edited[0].level = null;
  edited[0].details = null;
  assert.equal(validateSkills(edited, coreCategories), true);
});

test('gallery accepts local still images, animation and browser video formats', () => {
  const edited = structuredClone(coreSkills);
  edited[0].details = { description: 'Пример подробного разбора', gallery: [] };
  edited[0].details.gallery = [
    { src: '/assets/images/demo.gif', alt: 'Анимация' },
    { src: '/assets/images/demo.webp', alt: 'WebP' },
    { src: '/assets/videos/demo.mp4', alt: 'Видео MP4' },
    { src: '/assets/videos/demo.webm', alt: 'Видео WebM' },
  ];
  assert.equal(validateSkills(edited, coreCategories), true);
  for (const src of ['javascript:alert(1)', '/assets/videos/demo.exe', '/assets/videos/../private.mp4']) {
    edited[0].details.gallery = [{ src, alt: 'Invalid' }];
    assert.throws(() => validateSkills(edited, coreCategories));
  }
});
