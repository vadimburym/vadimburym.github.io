import { createScale } from '../components/skill-list.js?v=20261010-readable';
import { animate, disclosure } from '../lib/motion.js?v=20261010-readable';
import { mountScalePreview } from '../components/scale-preview.js?v=20261010-readable';
import { renderSkillGroups } from '../lib/render.js';

export function mountSkillCatalog(catalog) {
  const { levels, label, scaleTitle } = catalog;
  catalog = { ...catalog, pathname: location.pathname };
  const input = document.querySelector('#skill-search');
  const results = document.querySelector('#skill-results');
  const clear = document.querySelector('#clear-search');
  const empty = document.querySelector('#no-skills');
  const scaleHost = document.querySelector('[data-skill-scale]');
  let scale = scaleHost.querySelector('.scale-guide');
  if (!scale) {
    scale = createScale(levels, 'catalog-levels', { label, scaleTitle, animated: true });
    scaleHost.replaceChildren(scale);
  }
  mountScalePreview(scale);
  const collapsed = new Set();
  let initial = true;
  function render(updateUrl = false) {
    if (updateUrl) {
      const url = new URL(location.href);
      const query = input.value.trim();
      if (query) url.searchParams.set('q', query);
      else url.searchParams.delete('q');
      history.replaceState(history.state, '', url);
    }
    if (!(initial && results.dataset.prerendered && !input.value)) results.innerHTML = renderSkillGroups(catalog, input.value, collapsed);
    initial = false;
    results.querySelectorAll('.category-toggle').forEach(title => {
      const list = document.getElementById(title.getAttribute('aria-controls'));
      const reveal = disclosure(list, title);
      title.addEventListener('click', () => {
        const open = title.getAttribute('aria-expanded') !== 'true';
        reveal(open);
        const id = title.id.slice('category-'.length);
        if (!input.value.trim()) { if (open) collapsed.delete(id); else collapsed.add(id); }
      });
    });
    if (updateUrl) animate(results, [{ opacity: .65 }, { opacity: 1 }], { duration: 140 });
    clear.hidden = input.value.length === 0;
    empty.hidden = Boolean(results.querySelector('.skill'));
  }
  function readUrl() { input.value = new URL(location.href).searchParams.get('q') || ''; render(); }
  function reset() { input.value = ''; render(true); input.focus(); }
  input.addEventListener('input', () => render(true));
  input.addEventListener('keydown', event => { if (event.key === 'Escape' && input.value) reset(); });
  document.querySelector('.skill-search').addEventListener('submit', event => event.preventDefault());
  clear.addEventListener('click', reset);
  document.querySelector('#reset-search').addEventListener('click', reset);
  window.addEventListener('popstate', () => { if ((new URL(location.href).searchParams.get('q') || '') !== input.value) readUrl(); });
  readUrl();
}
