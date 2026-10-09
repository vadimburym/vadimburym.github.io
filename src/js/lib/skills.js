import { validGalleryItem } from './media.js?v=20261009-mobile-review';
export function normalizeQuery(value) {
  return String(value).normalize('NFKC').toLocaleLowerCase('ru').replaceAll('\u0451', 'е').trim().replace(/\s+/g, ' ');
}

export function filterSkills(skills, query = '') {
  const words = normalizeQuery(query).split(' ').filter(Boolean);
  return skills.filter(skill => {
    const text = normalizeQuery([skill.name, ...skill.aliases].join(' '));
    return words.every(word => text.includes(word));
  });
}

export function featuredSkills(skills) {
  return skills.filter(skill => skill.featured).sort((a, b) => a.featuredOrder - b.featuredOrder);
}

export function groupSkills(skills, categories, query = '') {
  const matches = filterSkills(skills, query);
  return categories.map(category => ({
    ...category,
    skills: matches.filter(skill => skill.categoryId === category.id).sort((a, b) => a.order - b.order),
  })).filter(category => category.skills.length > 0);
}

export function validateSkills(skills, categories, maxLevel = 5) {
  const categoryIds = new Set(categories.map(category => category.id));
  if (categoryIds.size !== categories.length) throw new Error('Duplicate category ID');
  const ids = new Set();
  const featuredOrders = new Set();
  for (const skill of skills) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(skill.id) || ids.has(skill.id)) throw new Error(`Invalid or duplicate skill ID: ${skill.id}`);
    ids.add(skill.id);
    if (!categoryIds.has(skill.categoryId)) throw new Error(`Unknown category for ${skill.id}`);
    if (!skill.name?.trim() || !Array.isArray(skill.aliases) || typeof skill.bestResult !== 'string') throw new Error(`Missing content for ${skill.id}`);
    if (skill.level !== null && (!Number.isInteger(skill.level) || skill.level < 0 || skill.level > maxLevel)) throw new Error(`Invalid level for ${skill.id}`);
    if (!Number.isFinite(skill.order) || typeof skill.featured !== 'boolean') throw new Error(`Invalid ordering for ${skill.id}`);
    if (skill.featured) {
      if (!Number.isFinite(skill.featuredOrder) || featuredOrders.has(skill.featuredOrder)) throw new Error(`Invalid featured order for ${skill.id}`);
      featuredOrders.add(skill.featuredOrder);
    }
    if (skill.icon && !/^\/assets\/images\/[a-z0-9-]+\.(png|svg|webp)$/.test(skill.icon)) throw new Error(`Invalid icon for ${skill.id}`);
    if (skill.details) {
      if (typeof skill.details.description !== 'string') throw new Error(`Invalid details for ${skill.id}`);
      if (skill.details.gallery !== undefined && (!Array.isArray(skill.details.gallery) || skill.details.gallery.some(item => !validGalleryItem(item)))) throw new Error(`Invalid gallery for ${skill.id}`);
    }
  }
  return true;
}
