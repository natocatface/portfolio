(() => {
  const sidebar = document.getElementById('sidebar');
  const scene = document.getElementById('heroScene');
  if (!sidebar || !scene) return;

  const layers = Array.from(scene.querySelectorAll('.parallax-layer'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !layers.length) return;

  let curX = 0, curY = 0;

  function applyMouse(clientX, clientY) {
    const rect = sidebar.getBoundingClientRect();
    curX = ((clientX - rect.left) / rect.width - 0.5) * 2;
    curY = ((clientY - rect.top) / rect.height - 0.5) * 2;
    render();
  }

  function render() {
    layers.forEach((layer) => {
      const depth = parseFloat(layer.dataset.depth || '0.1');
      const moveX = curX * depth * 30;
      const moveY = curY * depth * 20;
      layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  }

  window.addEventListener('mousemove', (e) => applyMouse(e.clientX, e.clientY), { passive: true });
  window.addEventListener('touchmove', (e) => {
    if (e.touches[0]) applyMouse(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  render();
})();
