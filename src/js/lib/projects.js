import { validGalleryItem } from './media.js?v=20261009-mobile-review';
export function selectProjects(projects, featured = false) {
  return projects.filter(project => !featured || project.featured)
    .sort((a, b) => featured ? a.featuredOrder - b.featuredOrder : a.order - b.order);
}

export function validateProjects(projects) {
  const ids = new Set();
  const featuredOrders = new Set();
  const imagePath = /^\/assets\/images\/[a-zA-Z0-9_/-]+\.(png|jpe?g|webp|gif|svg|avif)$/i;
  for (const project of projects) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.id) || ids.has(project.id)) throw new Error('Invalid project ID');
    ids.add(project.id);
    if (project.showTitleMeta != null && typeof project.showTitleMeta !== 'boolean') throw new Error('Invalid project heading metadata');
    if (['name', 'genre', 'platform', 'date', 'role', 'summary'].some(key => typeof project[key] !== 'string' || !project[key].trim())) throw new Error(`Missing project content: ${project.id}`);
    if (!Number.isFinite(project.order) || typeof project.featured !== 'boolean') throw new Error('Invalid project ordering');
    if (project.featured) {
      if (!Number.isFinite(project.featuredOrder) || featuredOrders.has(project.featuredOrder)) throw new Error('Invalid featured project order');
      featuredOrders.add(project.featuredOrder);
    }
    if (!Array.isArray(project.technologies) || project.technologies.some(value => typeof value !== 'string')) throw new Error('Invalid technologies');
    if (project.action != null) {
      const { label, url } = project.action;
      if (typeof label !== 'string' || !label.trim()) throw new Error('Invalid project action label');
      if (url !== null) {
        let target;
        try { target = new URL(url); } catch { throw new Error('Invalid project action URL'); }
        if (typeof url !== 'string' || !['https:', 'http:'].includes(target.protocol) || target.username || target.password) throw new Error('Invalid project action URL');
      }
    }
    if (!['sage', 'peach', 'lavender'].includes(project.tone) || (project.cover !== null && !imagePath.test(project.cover))) throw new Error('Invalid project cover');
    if (project.coverMobile != null && (typeof project.coverMobile !== 'string' || !imagePath.test(project.coverMobile) || !project.cover)) throw new Error('Invalid mobile project cover');
    if (project.coverVideo != null && (!project.cover || !/^\/assets\/videos\/[a-zA-Z0-9_/-]+\.(mp4|webm)$/i.test(project.coverVideo.src) || !Number.isFinite(project.coverVideo.duration) || project.coverVideo.duration <= 0)) throw new Error('Invalid project cover video');
    if (project.coverVideo?.mobileSrc != null && (typeof project.coverVideo.mobileSrc !== 'string' || !/^\/assets\/videos\/[a-zA-Z0-9_/-]+\.(mp4|webm)$/i.test(project.coverVideo.mobileSrc))) throw new Error('Invalid mobile cover video');
    const details = project.details;
    if (!details || ['description', 'responsibility'].some(key => typeof details[key] !== 'string')) throw new Error('Invalid project details');
    if (typeof details.achievements !== 'string' && !(Array.isArray(details.achievements) && details.achievements.length && details.achievements.every(text => typeof text === 'string' && text.trim()))) throw new Error('Invalid project achievements');
    if (!Array.isArray(details.gallery) || details.gallery.some(item => !validGalleryItem(item))) throw new Error('Invalid project gallery');
    if (details.benchmark != null) {
      const benchmark = details.benchmark;
      if (typeof benchmark.caption !== 'string' || !benchmark.caption.trim() || typeof benchmark.note !== 'string'
        || !Array.isArray(benchmark.headers) || benchmark.headers.length < 2 || benchmark.headers.some(text => typeof text !== 'string' || !text.trim())
        || !Array.isArray(benchmark.rows) || !benchmark.rows.length
        || benchmark.rows.some(row => !Array.isArray(row) || row.length !== benchmark.headers.length || row.some(text => typeof text !== 'string' || !text.trim()))) throw new Error('Invalid project benchmark');
    }
  }
  return true;
}
