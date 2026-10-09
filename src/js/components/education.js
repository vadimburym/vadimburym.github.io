import { education } from '../data/education.js?v=20261009-mobile-review';
import { element } from './skill-list.js?v=20261009-mobile-review';
import { createSkillGallery } from './skill-gallery.js?v=20261009-gallery-quiet';
import { mountUrlDialog } from './url-dialog.js?v=20261009-gallery-quiet';

export function mountEducation() {
  const host = document.querySelector('.education-grid');
  if (!host) return;
  const template = host.querySelector('.edu-card');
  host.replaceChildren(...education.map(item => {
    const card = template.cloneNode(true);
    card.querySelector('h3').textContent = item.name;
    card.querySelector('.dates').textContent = item.date;
    card.querySelector('p').replaceChildren(document.createTextNode(item.institution), document.createElement('br'), document.createTextNode(item.programName || item.program));
    if (item.logo) {
      const logo = element('img');
      logo.src = item.logo;
      logo.alt = item.institution;
      logo.width = logo.height = 56;
      logo.loading = 'lazy';
      const holder = card.querySelector('.edu-logo');
      holder.classList.add('has-logo');
      holder.removeAttribute('role');
      holder.removeAttribute('aria-label');
      holder.replaceChildren(logo);
    }
    const link = element('a', 'link', 'Документ ↗');
    link.href = `/?education=${item.id}`;
    link.dataset.openEducation = item.id;
    link.setAttribute('aria-label', `Документ: ${item.name}`);
    card.querySelector('button').replaceWith(link);
    return card;
  }));
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
