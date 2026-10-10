import { renderEducation } from '../lib/render.js';
import { education } from '../data/education.js?v=20261010-readable';
import { element } from './skill-list.js?v=20261010-readable';
import { createSkillGallery } from './skill-gallery.js?v=20261010-readable';
import { mountUrlDialog } from './url-dialog.js?v=20261010-readable';

export function mountEducation() {
  const host = document.querySelector('.education-grid');
  if (!host) return;
  if (!host.dataset.prerendered) host.innerHTML = renderEducation(education);
  mountUrlDialog({
    parameter: 'education',
    find: id => education.find(item => item.id === id),
    render: (item, body) => {
      const title = element('h2', '', item.name);
      title.id = 'education-dialog-title';
      body.replaceChildren(element('div', 'eyebrow', 'ОБРАЗОВАНИЕ'), title,
        element('p', 'project-dialog-meta', `${item.institution} · ${item.date}`),
        element('p', 'education-program', item.program));
      if (item.programName) body.querySelector('.education-program').append(element('span', 'education-program-detail', item.programName));
      if (item.gallery.length) {
        const gallery = createSkillGallery(item.gallery, 'Документы об образовании');
        gallery.classList.add('education-document');
        const expand = gallery.querySelector('.gallery-expand');
        expand.setAttribute('aria-label', 'Развернуть документ на весь экран');
        expand.title = 'Развернуть документ на весь экран';
        body.append(gallery);
      }
      if (item.description) body.append(element('p', 'dialog-description', item.description));
    },
  });
}
