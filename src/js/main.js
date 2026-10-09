import { projects } from './data/projects.js?v=20261009-mobile-review';
import { validateProjects } from './lib/projects.js?v=20261009-mobile-review';
import { mountProjects } from './components/project-list.js?v=20261009-mobile-review';
import { mountProjectDialog } from './components/project-dialog.js?v=20261009-gallery-quiet';
import { metaSkills, metaCategories, metaLevels } from './data/meta-skills.js?v=20261009-mobile-review';
import { coreSkills, coreCategories, coreLevels } from './data/core-skills.js?v=20261009-home-ai-last';
import { validateSkills } from './lib/skills.js?v=20261009-mobile-review';
import { mountHeader } from './components/site-header.js?v=20261009-mobile-review';
import { mountSkillDialog } from './components/skill-dialog.js?v=20261009-gallery-quiet';
import { mountFeaturedSkills } from './pages/home.js?v=20261009-mobile-review';
import { mountSkillCatalog } from './pages/skill-catalog.js?v=20261009-mobile-review';
import { mountContacts } from './components/contacts.js?v=20261009-mobile-review';
import { mountEducation } from './components/education.js?v=20261009-gallery-quiet';

const catalogs = [
  { page: 'core-skills', label: 'Core Skills', skills: coreSkills, categories: coreCategories, levels: coreLevels, featuredSelector: '[data-featured-core]', scaleId: 'core-skills-scale', scaleTitle: 'Уровни навыка' },
  { page: 'meta-skills', label: 'Meta Skills', skills: metaSkills, categories: metaCategories, levels: metaLevels, featuredSelector: '[data-featured-meta]', scaleId: 'meta-skills-scale', scaleTitle: 'Уровни владения', showCategories: false },
];

mountHeader();
if (document.body.dataset.page !== 'cv') mountContacts();
if (document.body.dataset.page === 'home') mountEducation();
try {
  const page = document.body.dataset.page;
  const activeCatalogs = catalogs.filter(catalog => ['home', 'projects'].includes(page) || catalog.page === page);
  if (['home', 'projects'].includes(page)) {
    validateProjects(projects);
    mountProjects(projects, page === 'home');
    mountProjectDialog(projects);
  }
  for (const catalog of activeCatalogs) {
    validateSkills(catalog.skills, catalog.categories, catalog.levels.length);
    if (page === 'home') mountFeaturedSkills(catalog);
    else if (catalog.page === page) mountSkillCatalog(catalog);
  }
  if (activeCatalogs.length) mountSkillDialog(activeCatalogs);
} catch (error) {
  console.error('Portfolio content:', error);
  document.querySelectorAll('[data-featured-core], [data-featured-meta], #skill-results, [data-project-list], [data-featured-projects]').forEach(target => {
    target.textContent = 'Не удалось загрузить содержимое. Попробуйте обновить страницу.';
    target.setAttribute('role', 'alert');
  });
  throw error;
}

// Only unfinished content outside the skill catalogs uses temporary notices.
const notice = document.querySelector('.notice');
let noticeTimeout;
document.querySelectorAll('[data-pending]').forEach(control => {
  const itemName = control.closest('.skill')?.querySelector('.skill-name')?.textContent
    || control.closest('.project')?.querySelector('h3')?.textContent
    || control.closest('.edu-card')?.querySelector('h3')?.textContent;
  if (itemName) control.setAttribute('aria-label', `Подробнее: ${itemName.trim()}`);
});
document.addEventListener('click', event => {
  const control = event.target.closest('[data-pending]');
  if (!control || !notice) return;
  window.clearTimeout(noticeTimeout);
  notice.textContent = control.dataset.pending;
  notice.hidden = false;
  noticeTimeout = window.setTimeout(() => { notice.hidden = true; }, 4500);
});

