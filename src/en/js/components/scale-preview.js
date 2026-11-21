import { motionPreference } from '../lib/motion.js?v=20261010-readable';

// One timer updates both the segments and their definition; it only runs in view.
export function mountScalePreview(guide) {
  const control = guide.querySelector('.scale-preview');
  const cells = [...control.querySelectorAll('i')];
  const items = [...guide.querySelectorAll('.scale-items li')];
  const choices = [...guide.querySelectorAll('.scale-choice')];
  let step = 0;
  let visible = false;
  let holdUntil = 0;
  let timer;

  function render() {
    cells.forEach((cell, index) => cell.classList.toggle('filled', index <= step));
    items.forEach((item, index) => item.classList.toggle('is-current', index === step));
    choices.forEach((choice, index) => choice.setAttribute('aria-pressed', String(index === step)));
    guide.dataset.previewLevel = String(step + 1);
  }
  function schedule() {
    clearTimeout(timer);
    if (!motionPreference.matches && visible && !document.hidden) {
      const remaining = holdUntil - performance.now();
      timer = setTimeout(() => {
        holdUntil = 0;
        step = (step + 1) % items.length;
        render();
        schedule();
      }, remaining > 0 ? remaining : 2000);
    }
  }
  choices.forEach((choice, index) => choice.addEventListener('click', () => {
    step = index;
    holdUntil = performance.now() + 10000;
    render();
    schedule();
  }));
  const observer = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    schedule();
  });
  observer.observe(guide);
  document.addEventListener('visibilitychange', schedule);
  motionPreference.addEventListener('change', schedule);
  render();
  schedule();
}
