// This small classic script can report failures of the entire ES module graph.
(() => {
  const entry = document.currentScript.dataset.entry;
  const status = document.querySelector('[data-load-status]');
  if (!status) {
    import(entry).then(() => {
      document.documentElement.dataset.appState = 'ready';
    }).catch(error => {
      console.error('Portfolio startup failed:', error);
      document.documentElement.dataset.appState = 'error';
    }).finally(() => document.dispatchEvent(new Event('portfolio:ready')));
    return;
  }
  const message = status.querySelector('[data-load-message]');
  const reload = status.querySelector('button');
  reload.addEventListener('click', () => location.reload());
  const slow = setTimeout(() => {
    message.textContent = 'Loading is taking longer than usual. You can reload the page.';
    reload.hidden = false;
  }, 10000);
  import(entry).then(() => {
    clearTimeout(slow);
    status.remove();
    document.documentElement.dataset.appState = 'ready';
    document.dispatchEvent(new Event('portfolio:ready'));
  }).catch(error => {
    clearTimeout(slow);
    console.error('Portfolio startup failed:', error);
    document.documentElement.dataset.appState = 'error';
    status.setAttribute('role', 'alert');
    message.textContent = 'Could not load the content. Check your connection and reload the page.';
    reload.hidden = false;
    document.dispatchEvent(new Event('portfolio:ready'));
  });
})();
