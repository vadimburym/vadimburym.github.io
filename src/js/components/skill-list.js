export function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

export function createLevel(level, levels, scaleId) {
  const bar = element('span', `level level-${levels.length}`);
  bar.setAttribute('role', 'img');
  const label = level === null || level === 0 ? 'Уровень пока не указан' : `Уровень ${level} из ${levels.length} — ${levels[level - 1]}`;
  bar.setAttribute('aria-label', label);
  if (scaleId) bar.setAttribute('aria-describedby', scaleId);
  bar.title = label;
  for (let i = 0; i < levels.length; i++) bar.append(element('i', level !== null && i < level ? 'filled' : ''));
  return bar;
}

export function createScale(levels, id, { label = 'Core Skills', scaleTitle = 'Уровни навыка', animated = false } = {}) {
  const guide = element('aside', 'scale-guide');
  guide.id = id;
  guide.setAttribute('aria-label', `Шкала оценки ${label}`);
  const heading = element('div', 'scale-heading');
  if (animated) {
    guide.classList.add('scale-guide-animated');
    const control = element('div', 'scale-preview');
    control.setAttribute('aria-hidden', 'true');
    const bar = createLevel(1, levels);
    bar.removeAttribute('role');
    bar.removeAttribute('aria-label');
    bar.removeAttribute('title');
    bar.setAttribute('aria-hidden', 'true');
    control.append(bar);
    heading.append(control);
  } else {
    heading.append(element('span', '', scaleTitle), element('span', 'scale-range', `01 — ${String(levels.length).padStart(2, '0')}`));
  }
  const list = element('ol', `scale-items scale-items-${levels.length}`);
  levels.forEach((label, index) => {
    const item = element('li');
    const number = element('span', 'scale-number', String(index + 1).padStart(2, '0'));
    number.setAttribute('aria-hidden', 'true');
    if (animated) {
      const choice = element('button', 'scale-choice');
      choice.type = 'button';
      choice.setAttribute('aria-label', `Уровень ${index + 1}: ${label}`);
      choice.append(number, element('span', '', label));
      item.append(choice);
    } else item.append(number, element('span', '', label));
    list.append(item);
  });
  guide.append(heading, list);
  return guide;
}

export function createColumnHead() {
  const columns = element('div', 'column-head');
  columns.setAttribute('aria-hidden', 'true');
  ['НАВЫК', 'УРОВЕНЬ', 'ЛУЧШИЙ РЕЗУЛЬТАТ', ''].forEach(text => columns.append(element('span', '', text)));
  return columns;
}

export function createSkillList(skills, levels, scaleId, label, { showColumns = true } = {}) {
  const list = element('div', 'skill-list');
  list.setAttribute('role', 'list');
  list.setAttribute('aria-label', label);
  if (showColumns) list.append(createColumnHead());
  skills.forEach(skill => {
    const row = element('div', 'skill');
    row.dataset.skillId = skill.id;
    row.setAttribute('role', 'listitem');
    const name = element('span', `skill-name${skill.icon ? ' has-icon' : ''}`);
    if (skill.icon) {
      const icon = element('img', 'skill-icon');
      icon.src = skill.icon;
      icon.alt = '';
      icon.width = icon.height = 20;
      icon.setAttribute('aria-hidden', 'true');
      name.append(icon);
    }
    name.append(element('span', '', skill.name));
    const action = element(skill.details ? 'a' : 'button', 'skill-arrow');
    const arrow = element('span', '', '↗');
    arrow.setAttribute('aria-hidden', 'true');
    action.append(arrow);
    if (skill.details) {
      const url = new URL(location.href);
      url.searchParams.set('skill', skill.id);
      action.href = url.pathname + url.search + url.hash;
      action.dataset.openSkill = skill.id;
      action.setAttribute('aria-label', `Подробнее: ${skill.name}`);
    } else {
      action.type = 'button';
      action.disabled = true;
      action.title = 'Подробного разбора нет';
      action.setAttribute('aria-label', `${skill.name}: подробного разбора нет`);
    }
    row.append(name, createLevel(skill.level, levels, scaleId), element('span', 'skill-desc', skill.bestResult), action);
    list.append(row);
  });
  return list;
}
