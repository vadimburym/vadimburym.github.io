import { renderLevel, renderSkillList } from '../lib/render.js';
export function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

export function fromHtml(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
}
export function createLevel(level, levels, scaleId) {
  return fromHtml(renderLevel(level, levels, scaleId));
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

export function createSkillList(skills, levels, scaleId, label, options = {}) {
  return fromHtml(renderSkillList(skills, levels, scaleId, label, { pathname: location.pathname, ...options }));
}
