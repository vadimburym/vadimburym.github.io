import { createLevel, element } from './skill-list.js?v=20261009-mobile-review';
import { createSkillGallery } from './skill-gallery.js?v=20261009-gallery-quiet';
import { mountUrlDialog } from './url-dialog.js?v=20261009-gallery-quiet';

export function mountSkillDialog(catalogs) {
  mountUrlDialog({
    parameter: 'skill',
    find: id => {
      const catalog = catalogs.find(item => item.skills.some(skill => skill.id === id && skill.details));
      return catalog ? { catalog, skill: catalog.skills.find(item => item.id === id) } : null;
    },
    render: ({ catalog, skill }, body) => {
      const title = element('h2', '', skill.name);
      title.id = 'skill-dialog-title';
      const rating = element('div', 'dialog-rating');
      rating.append(createLevel(skill.level, catalog.levels), element('span', '', skill.level === null ? 'Уровень не указан' : catalog.levels[skill.level - 1]));
      const layout = element('div', 'dialog-layout');
      if (skill.details.gallery?.length) layout.append(createSkillGallery(skill.details.gallery));
      else layout.classList.add('without-gallery');
      layout.append(element('p', 'dialog-description', skill.details.description));
      body.replaceChildren(element('div', 'eyebrow', catalog.label.toUpperCase()), title, rating, layout);
    },
  });
}
