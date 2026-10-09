import { featuredSkills } from '../lib/skills.js?v=20261009-mobile-review';
import { createSkillList } from '../components/skill-list.js?v=20261009-mobile-review';

export function mountFeaturedSkills({ skills, levels, featuredSelector, label }) {
  const target = document.querySelector(featuredSelector);
  if (!target) return;
  target.replaceChildren(
    createSkillList(featuredSkills(skills), levels, null, label, { showColumns: false }),
  );
}
