import { featuredSkills } from '../lib/skills.js?v=20261010-readable';
import { createSkillList } from '../components/skill-list.js?v=20261010-readable';

export function mountFeaturedSkills({ skills, levels, featuredSelector, label }) {
  const target = document.querySelector(featuredSelector);
  if (!target || target.dataset.prerendered) return;
  target.replaceChildren(
    createSkillList(featuredSkills(skills), levels, null, label, { showColumns: false }),
  );
}
