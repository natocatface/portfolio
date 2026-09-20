(() => {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const TEXT = 'Full Stack Developer | Data Engineer | Data Architect';
  const TYPE_SPEED = 55;
  const DELETE_SPEED = 30;
  const PAUSE_FULL = 1800;
  const PAUSE_EMPTY = 500;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    el.textContent = TEXT;
    return;
  }

  let i = 0;
  let deleting = false;

  function tick() {
    if (!deleting) {
      i++;
      el.textContent = TEXT.slice(0, i);
      if (i >= TEXT.length) {
        deleting = true;
        setTimeout(tick, PAUSE_FULL);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      i--;
      el.textContent = TEXT.slice(0, i);
      if (i <= 0) {
        deleting = false;
        setTimeout(tick, PAUSE_EMPTY);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  tick();
})();
