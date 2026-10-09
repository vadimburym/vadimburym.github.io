// Shared timings, interruption handling and reduced-motion support.
export const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
export const easeOut = 'cubic-bezier(.22, 1, .36, 1)';
const running = new Map();

export function stopMotion(node) {
  running.get(node)?.cancel();
  running.delete(node);
}

export async function animate(node, frames, options = {}) {
  stopMotion(node);
  if (motionPreference.matches || !node.animate) return true;
  const animation = node.animate(frames, { duration: 260, easing: easeOut, fill: 'both', ...options });
  running.set(node, animation);
  let completed = false;
  try { await animation.finished; completed = true; } catch { /* Superseded by a new interaction. */ }
  if (running.get(node) === animation) {
    running.delete(node);
    animation.cancel();
  }
  return completed;
}

motionPreference.addEventListener('change', () => {
  if (motionPreference.matches) running.forEach(animation => animation.finish());
});

export function disclosure(panel, button) {
  let revision = 0;
  return async open => {
    const request = ++revision;
    const fromHeight = panel.hidden ? 0 : panel.getBoundingClientRect().height;
    const fromOpacity = panel.hidden ? 0 : getComputedStyle(panel).opacity;
    stopMotion(panel);
    panel.hidden = false;
    panel.inert = !open;
    button.setAttribute('aria-expanded', String(open));
    panel.style.overflow = 'clip';
    await animate(panel, [
      { height: `${fromHeight}px`, opacity: fromOpacity },
      { height: `${open ? panel.scrollHeight : 0}px`, opacity: open ? 1 : 0 },
    ], { duration: open ? 300 : 230 });
    if (request !== revision) return;
    panel.hidden = !open;
    panel.style.removeProperty('overflow');
  };
}
