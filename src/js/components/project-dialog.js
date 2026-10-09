import { element } from './skill-list.js?v=20261009-mobile-review';
import { createSkillGallery } from './skill-gallery.js?v=20261009-mobile-review';
import { mountUrlDialog } from './url-dialog.js?v=20261009-mobile-review';
import { createProjectAction } from './project-action.js?v=20261009-mobile-review';

export function mountProjectDialog(projects) {
  mountUrlDialog({
    parameter: 'project',
    find: id => projects.find(project => project.id === id || project.legacyIds?.includes(id)),
    canonicalId: (_id, project) => project.id,
    render: (project, body) => {
      const title = element('h2', '', project.name);
      title.id = 'project-dialog-title';
      const heading = element('div', 'project-dialog-heading');
      heading.append(title);
      if (project.action) {
        heading.append(createProjectAction(project.action));
      }
      const meta = element('p', 'project-dialog-meta', project.showTitleMeta === false
        ? project.date
        : `${project.showGenre === false ? project.platform : `${project.genre} / ${project.platform}`} · ${project.date}`);
      const facts = element('dl', 'project-facts');
      const role = element('div');
      role.append(element('dt', '', project.role), element('dd', '', project.details.responsibility));
      const tech = element('div');
      tech.append(element('dt', '', 'Технологии'), element('dd', '', project.technologies.join(' · ')));
      facts.append(role, tech);
      const context = element('div', 'project-context');
      context.append(element('h3', '', 'Описание'), element('p', 'dialog-description', project.details.description));
      const achievements = element('div', 'project-achievements');
      achievements.append(element('h3', '', 'Достижения'));
      if (Array.isArray(project.details.achievements)) {
        const list = element('ul', 'project-achievement-list');
        project.details.achievements.forEach(text => list.append(element('li', '', text)));
        achievements.append(list);
      } else achievements.append(element('p', 'dialog-description', project.details.achievements));
      if (project.details.benchmark) {
        const benchmark = project.details.benchmark;
        const table = element('table', 'project-benchmark');
        table.append(element('caption', '', benchmark.caption));
        const head = element('thead');
        const header = element('tr');
        benchmark.headers.forEach(text => {
          const cell = element('th', '', text);
          cell.scope = 'col';
          header.append(cell);
        });
        head.append(header);
        const rows = element('tbody');
        benchmark.rows.forEach(values => {
          const row = element('tr');
          values.forEach((text, index) => {
            const cell = element(index === 0 ? 'th' : 'td', '', text);
            if (index === 0) cell.scope = 'row';
            row.append(cell);
          });
          rows.append(row);
        });
        table.append(head, rows);
        achievements.append(table, element('p', 'project-benchmark-note', benchmark.note));
      }
      const layout = element('div', 'project-dialog-layout');
      if (project.details.gallery.length) layout.append(createSkillGallery(project.details.gallery, 'Галерея проекта'));
      layout.append(facts, context, achievements);
      body.replaceChildren(element('div', 'eyebrow', 'ПРОЕКТ'), heading, meta, layout);
    },
  });
}
