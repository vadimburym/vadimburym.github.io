import { groupSkills } from '../lib/skills.js?v=20261009-mobile-review';
import { createSkillList, createScale, createColumnHead, element } from '../components/skill-list.js?v=20261009-mobile-review';
import { animate, disclosure } from '../lib/motion.js?v=20261009-mobile-review';
import { mountScalePreview } from '../components/scale-preview.js?v=20261009-mobile-review';

export function mountSkillCatalog({ skills, categories, levels, label, scaleTitle, showCategories = true }) {
  const input = document.querySelector('#skill-search');
  const results = document.querySelector('#skill-results');
  const clear = document.querySelector('#clear-search');
  const empty = document.querySelector('#no-skills');
  const scaleHost = document.querySelector('[data-skill-scale]');
  const scale = createScale(levels, 'catalog-levels', { label, scaleTitle, animated: true });
  scaleHost.replaceChildren(scale);
  mountScalePreview(scale);
  const collapsed = new Set();

  function render(updateUrl = false) {
    if (updateUrl) {
      const url = new URL(location.href);
      const query = input.value.trim();
      if (query) url.searchParams.set('q', query);
      else url.searchParams.delete('q');
      history.replaceState(history.state, '', url);
    }
    const groups = groupSkills(skills, categories, input.value);
    const fragment = document.createDocumentFragment();
    const searching = input.value.trim().length > 0;
    if (groups.length) fragment.append(createColumnHead());
    if (showCategories) groups.forEach(category => {
      const section = element('section', 'skill-category');
      section.setAttribute('aria-labelledby', `category-${category.id}`);
      const head = element('h2', 'category-heading');
      const title = element('button', 'category-toggle');
      title.type = 'button';
      title.id = `category-${category.id}`;
      const arrow = element('span', 'category-chevron');
      arrow.setAttribute('aria-hidden', 'true');
      const categoryLabel = element('span', 'category-label');
      if (category.icon) {
        const icon = element('img', 'skill-icon');
        icon.src = category.icon;
        icon.alt = '';
        icon.width = icon.height = 20;
        icon.setAttribute('aria-hidden', 'true');
        categoryLabel.append(icon);
      }
      categoryLabel.append(element('span', '', category.name));
      title.append(categoryLabel, arrow);
      const list = createSkillList(category.skills, levels, 'catalog-levels', category.name, { showColumns: false });
      list.id = `skills-${category.id}`;
      list.hidden = !searching && collapsed.has(category.id);
      title.setAttribute('aria-controls', list.id);
      title.setAttribute('aria-expanded', String(!list.hidden));
      const reveal = disclosure(list, title);
      title.addEventListener('click', () => {
        const open = title.getAttribute('aria-expanded') !== 'true';
        reveal(open);
        if (!searching) {
          if (!open) collapsed.add(category.id);
          else collapsed.delete(category.id);
        }
      });
      head.append(title);
      section.append(head, list);
      fragment.append(section);
    });
    else if (groups.length) {
      const matches = groups.flatMap(category => category.skills).sort((a, b) => a.order - b.order);
      fragment.append(createSkillList(matches, levels, 'catalog-levels', label, { showColumns: false }));
    }
    results.replaceChildren(fragment);
    if (updateUrl) animate(results, [{ opacity: .65 }, { opacity: 1 }], { duration: 140 });
    clear.hidden = input.value.length === 0;
    empty.hidden = groups.length !== 0;
  }
  function readUrl() {
    input.value = new URL(location.href).searchParams.get('q') || '';
    render();
  }
  function reset() {
    input.value = '';
    render(true);
    input.focus({ preventScroll: true });
  }
  input.addEventListener('input', () => render(true));
  input.addEventListener('keydown', event => {
    if (event.key === 'Escape' && input.value) { event.preventDefault(); reset(); }
  });
  document.querySelector('.skill-search').addEventListener('submit', event => event.preventDefault());
  clear.addEventListener('click', reset);
  document.querySelector('#reset-search').addEventListener('click', reset);
  window.addEventListener('popstate', () => {
    if ((new URL(location.href).searchParams.get('q') || '') !== input.value) readUrl();
  });
  readUrl();
}
