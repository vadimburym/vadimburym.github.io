// Native document navigation with a single, bounded block-reveal timeline.
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  const routes = new Set(['/', '/projects/', '/skills/', '/meta-skills/']);
  const selectors = [
    '.hero-copy > *', '.hero-visual', '.page > section:not(.hero)',
    '.catalog-masthead', '[data-skill-scale]', '.skill-search',
    '#skill-results > *', '[data-project-list] > *', '.route-placeholder',
    '.catalog-footer', '[data-load-status]',
  ].join(',');
  let revealed = false;
  let leaving = false;
  let entries = [];
  let curtain;
  let exitAnimation;
  let fallback;
  let exitFallback;
  if (!reduced.matches) root.classList.add('page-enter-pending');

  function finishEntries() {
    entries.forEach(animation => animation.cancel());
    entries = [];
  }

  function restore() {
    finishEntries();
    exitAnimation?.cancel();
    curtain?.remove();
    clearTimeout(exitFallback);
    leaving = false;
    root.classList.remove('page-enter-pending');
  }

  function reveal() {
    if (revealed) return;
    const page = document.querySelector('.page');
    if (!page) return;
    revealed = true;
    clearTimeout(fallback);
    if (location.hash) {
      try {
        document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ behavior: 'instant' });
      } catch { /* Invalid fragments do not block the page. */ }
    }
    root.classList.remove('page-enter-pending');
    if (reduced.matches || !page.animate) return;

    const candidates = [...page.querySelectorAll(selectors)].filter(node => node.getClientRects().length);
    // Avoid animating both a container and one of its descendants.
    const blocks = candidates.filter(node => !candidates.some(parent => parent !== node && parent.contains(node)));
    const mobile = matchMedia('(max-width: 640px)').matches;
    blocks.forEach((block, index) => {
      // Preserve layout transforms while adding the entrance offset.
      const layoutTransform = getComputedStyle(block).transform;
      const baseTransform = layoutTransform === 'none' ? '' : `${layoutTransform} `;
      const animation = block.animate([
        { opacity: 0, transform: `${baseTransform}translateY(${mobile ? 24 : 42}px)` },
        { opacity: 1, transform: `${baseTransform}translateY(0)` },
      ], {
        duration: mobile ? 520 : 640,
        delay: Math.min(index * 65, 360),
        easing: 'cubic-bezier(.22,1,.36,1)',
        fill: 'backwards',
      });
      entries.push(animation);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    // A missing module must never leave the static document hidden.
    if (!revealed) fallback = setTimeout(reveal, 900);
  }, { once: true });
  document.addEventListener('portfolio:ready', () => {
    Promise.race([
      document.fonts?.ready || Promise.resolve(),
      new Promise(resolve => setTimeout(resolve, 220)),
    ]).then(reveal);
  }, { once: true });
  window.addEventListener('pageshow', event => {
    if (event.persisted) restore();
  });
  reduced.addEventListener('change', () => {
    if (!reduced.matches) return;
    finishEntries();
    exitAnimation?.finish();
    reveal();
  });
  // Keyboard navigation should never focus a still-hidden animated block.
  document.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
      reveal();
      finishEntries();
    }
  });
  document.addEventListener('click', async event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || reduced.matches) return;
    const link = event.target.closest('a[href]');
    if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || !routes.has(url.pathname) || url.pathname === location.pathname) return;
    if (!document.documentElement.animate) return;
    event.preventDefault();
    if (leaving) return;
    leaving = true;
    curtain = document.createElement('div');
    curtain.className = 'page-transition-curtain';
    curtain.setAttribute('aria-hidden', 'true');
    document.body.append(curtain);
    exitAnimation = curtain.animate([
      { transform: 'scaleY(0)' }, { transform: 'scaleY(1)' },
    ], { duration: 260, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'both' });
    try { await exitAnimation.finished; } catch { /* Navigation still proceeds. */ }
    location.assign(url.href);
    // Restore the current page if the navigation stalls or is cancelled.
    exitFallback = setTimeout(restore, 1800);
  });
})();
