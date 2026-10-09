import test from 'node:test';
import assert from 'node:assert/strict';
import { projects } from '../js/data/projects.js';
import { selectProjects, validateProjects } from '../js/lib/projects.js';

test('project catalog has valid media and plain-text descriptions', () => {
  assert.equal(validateProjects(projects), true);
  const edited = structuredClone(projects);
  edited[0].details.gallery = [{ src: '/assets/videos/gameplay.webm', alt: 'Геймплей' }];
  assert.equal(validateProjects(edited), true);
});

test('benchmark tables require text cells matching the column count', () => {
  const edited = structuredClone(projects);
  edited[0].details.benchmark = { caption: 'BT', headers: ['Режим', 'Время'], rows: [['Burst', '1 мс']], note: 'Условия теста' };
  assert.equal(validateProjects(edited), true);
  edited[0].details.benchmark.rows = [['Burst']];
  assert.throws(() => validateProjects(edited));
  edited[0].details.benchmark.rows = [['Burst', 1]];
  assert.throws(() => validateProjects(edited));
});

test('home uses three featured project objects without mutating the catalog', () => {
  const before = JSON.stringify(projects);
  const selected = selectProjects(projects, true);
  assert.deepEqual(selected.map(project => project.id), ['exodus-core', 'dodbt', 'half-empty']);
  assert.ok(selected.every(project => projects.includes(project)));
  assert.equal(selectProjects(projects).length, projects.length);
  assert.deepEqual(selectProjects(projects).slice(0, 4).map(project => project.id), ['exodus-core', 'half-empty', 'dots-battle-simulator', 'dodbt']);
  assert.equal(JSON.stringify(projects), before);
});

test('project actions are optional, allow custom labels, and reject unsafe destinations', () => {
  const edited = structuredClone(projects);
  edited[0].action = { label: 'Репозиторий', url: 'https://github.com/example/game' };
  edited[1].action = null;
  delete edited[2].action;
  assert.equal(validateProjects(edited), true);
  for (const action of [
    { label: '', url: null },
    { label: 'Играть', url: 'javascript:alert(1)' },
    { label: 'Играть', url: '/missing-address' },
    { label: 'Играть', url: 'https://user:secret@example.com' },
  ]) {
    edited[0].action = action;
    assert.throws(() => validateProjects(edited));
  }
});

test('bad content, unsafe media and invalid achievement text fail before rendering', () => {
  const mutations = [
    list => list.push(list[0]),
    list => { list[1].featuredOrder = list[0].featuredOrder; },
    list => { list[0].cover = 'https://example.com/image.png'; },
    list => { list[0].coverMobile = 'https://example.com/image.webp'; },
    list => { list[0].coverVideo = { src: 'javascript:alert(1)', duration: 45 }; },
    list => { list[0].coverVideo = { src: '/assets/videos/example.mp4', duration: 0 }; },
    list => { list[0].name = ''; },
    list => { list[0].details.gallery[0].src = '/assets/images/../private.png'; },
    list => { list[0].details.achievements = []; },
  ];
  for (const mutate of mutations) {
    const edited = structuredClone(projects);
    mutate(edited);
    assert.throws(() => validateProjects(edited));
  }
});
