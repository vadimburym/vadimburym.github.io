import { createSkillGallery } from './skill-gallery.js?v=20261010-readable';
import { mountUrlDialog } from './url-dialog.js?v=20261121-lang';
import { createProjectAction } from './project-action.js?v=20261010-readable';
import { renderProjectDetails, projectPath, projectIdFromPath } from '../lib/render.js';
import { site } from '../data/site.js';

export function mountProjectDialog(projects) {
  mountUrlDialog({
    parameter: 'project', pathFor: projectPath, idFromPath: projectIdFromPath, fallbackPath: '/en/projects/',
    find: id => projects.find(project => project.id === id || project.legacyIds?.includes(id)),
    canonicalId: (_id, project) => project.id,
    onChange: project => {
      const title = project ? `${project.name} — Vadim Burym` : document.body.dataset.page === 'home' ? 'Vadim Burym — Unity Developer' : 'Projects — Vadim Burym';
      const path = project ? projectPath(project.id) : location.pathname;
      document.title = title;
      document.querySelector('link[rel="canonical"]')?.setAttribute('href', new URL(path, site.url).href);
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', new URL(path, site.url).href);
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    },
    render: (project, body) => {
      const documentBody = document.querySelector('[data-project-document="' + project.id + '"]');
      if (documentBody) {
        if (documentBody !== body) { body.replaceChildren(...documentBody.childNodes); documentBody.remove(); }
        body.removeAttribute('data-project-document');
        body.querySelector('[data-static-gallery]')?.remove();
        const title = body.querySelector('#project-dialog-title');
        if (title?.tagName === 'H1') {
          const heading = document.createElement('h2');
          heading.id = title.id;
          heading.textContent = title.textContent;
          title.replaceWith(heading);
        }
      } else body.innerHTML = renderProjectDetails(project);
      if (project.action) body.querySelector('.project-external-link')?.replaceWith(createProjectAction(project.action));
      if (project.details.gallery.length) body.querySelector('.project-dialog-layout').prepend(createSkillGallery(project.details.gallery, 'Project gallery'));
      document.documentElement.classList.add('project-enhanced');
    },
  });
}
