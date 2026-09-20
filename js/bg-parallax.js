(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const glows = Array.from(document.querySelectorAll('.bg-glow')).map((el) => ({
    el,
    speed: parseFloat(el.dataset.speed || '0.1'),
    maxDrift: parseFloat(el.dataset.maxDrift || 'Infinity')
  }));
  if (!glows.length || reduceMotion) return;

  function update() {
    const y = window.scrollY;
    glows.forEach((g) => {
      const raw = -y * g.speed;
      const offset = Math.max(-g.maxDrift, Math.min(g.maxDrift, raw));
      g.el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
