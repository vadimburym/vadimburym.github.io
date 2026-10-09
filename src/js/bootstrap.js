// This small classic script can report failures of the entire ES module graph.
(() => {
  const entry = document.currentScript.dataset.entry;
  const status = document.querySelector('[data-load-status]');
  const message = status.querySelector('[data-load-message]');
  const reload = status.querySelector('button');
  reload.addEventListener('click', () => location.reload());
  const slow = setTimeout(() => {
    message.textContent = 'Загрузка занимает больше времени, чем обычно. Можно обновить страницу.';
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
    message.textContent = 'Не удалось загрузить содержимое. Проверьте соединение и обновите страницу.';
    reload.hidden = false;
    document.dispatchEvent(new Event('portfolio:ready'));
  });
})();
