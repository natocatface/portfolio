(() => {
  const canvas = document.getElementById('sphereCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const wrap = canvas.parentElement;

  const TAGS = [
    // Lenguajes
    'JavaScript', 'TypeScript', 'PHP', 'Python', 'Scala', 'Java', 'SQL', 'PySpark',
    // Frameworks / Frontend
    'Laravel', 'Node.js', 'React', 'Angular', 'Spring Boot', 'FastAPI',
    'HTML5', 'CSS3', 'TailwindCSS', 'SASS', 'Vite', 'REST API', 'Composer',
    // ETL & Orquestación
    'Apache Airflow', 'Azure Data Factory', 'SSIS', 'Pentaho', 'Databricks', 'AWS Glue',
    // Bases de Datos
    'MySQL', 'SQL Server', 'Oracle PL/SQL', 'Teradata', 'MongoDB', 'PostgreSQL',
    // Cloud
    'Amazon Web Services', 'Azure', 'Google Cloud',
    // CI/CD & DevOps
    'GitHub Actions', 'Cloud Build', 'Docker', 'Terraform', 'Azure DevOps', 'AWS CodePipeline', 'PowerShell',
    // Control de versiones
    'Git', 'GitHub', 'GitLab',
    // Visualización
    'Power BI', 'Tableau', 'Looker Studio',
    // IA / ML
    'Vertex AI', 'SageMaker', 'Azure Machine Learning'
  ];

  let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  let radius = 200;
  let points = [];
  let rotX = 0.25, rotY = 0;
  let velX = 0, velY = 0.0038;
  let dragging = false;
  let lastX = 0, lastY = 0;
  let hoverIndex = -1;

  function buildPoints() {
    points = TAGS.map((label, i) => {
      const n = TAGS.length;
      const y = 1 - (i / (n - 1)) * 2;
      const rAtY = Math.sqrt(1 - y * y);
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * rAtY;
      const z = Math.sin(theta) * rAtY;
      return { label, x, y, z, hue: i % 3 };
    });
  }

  function resize() {
    w = wrap.clientWidth;
    h = wrap.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    radius = Math.min(w, h) * 0.38;
  }

  function project(p) {
    let { x, y, z } = p;
    // rotate around Y
    let cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    let x1 = x * cosY - z * sinY;
    let z1 = x * sinY + z * cosY;
    // rotate around X
    let cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    let y1 = y * cosX - z1 * sinX;
    let z2 = y * sinX + z1 * cosX;

    const perspective = 620;
    const scale = perspective / (perspective - z2 * radius);
    const sx = w / 2 + x1 * radius * scale;
    const sy = h / 2 + y1 * radius * scale;
    return { sx, sy, scale, z: z2 };
  }

  const palette = ['124,249,255', '167,139,250', '255,111,216'];

  function boxesOverlap(a, b, pad) {
    return a.left - pad < b.right && a.right + pad > b.left &&
           a.top - pad < b.bottom && a.bottom + pad > b.top;
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    const projected = points.map((p, i) => ({ ...project(p), label: p.label, hue: p.hue, i }));

    let nearestI = -1, nearestZ = -Infinity;
    projected.forEach((p) => { if (p.z > nearestZ) { nearestZ = p.z; nearestI = p.i; } });

    // Decide who gets to render this frame: closest/most prominent labels
    // claim space first, so a long label (e.g. "Amazon Web Services") can't
    // silently overlap a shorter neighbor — the loser just skips this frame
    // and reappears once the sphere rotates them apart.
    const byPriority = [...projected].sort((a, b) => b.z - a.z);
    const claimed = [];
    const visible = new Set();
    byPriority.forEach((p) => {
      const fontSize = Math.max(11, 12 + p.scale * 8);
      ctx.font = `400 ${fontSize}px 'Fira Code', monospace`;
      const textW = ctx.measureText(p.label).width;
      const box = {
        left: p.sx - textW / 2, right: p.sx + textW / 2,
        top: p.sy - fontSize / 2, bottom: p.sy + fontSize / 2
      };
      const collides = claimed.some((c) => boxesOverlap(box, c, 6));
      if (!collides || p.i === hoverIndex || p.i === nearestI) {
        claimed.push(box);
        visible.add(p.i);
      }
    });

    // Paint back-to-front so nearer labels still sit visually on top.
    projected.sort((a, b) => a.z - b.z);
    projected.forEach((p) => {
      if (!visible.has(p.i)) return;
      const depthAlpha = (p.z + 1) / 2;
      const alpha = 0.25 + depthAlpha * 0.75;
      const fontSize = Math.max(11, 12 + p.scale * 8);
      const isHover = p.i === hoverIndex || p.i === nearestI;

      ctx.font = `${isHover ? 600 : 400} ${fontSize}px 'Fira Code', monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = `rgba(${palette[p.hue]}, ${isHover ? 1 : alpha})`;
      if (isHover) {
        ctx.shadowColor = `rgba(${palette[p.hue]},0.9)`;
        ctx.shadowBlur = 16;
      } else {
        ctx.shadowBlur = 0;
      }
      ctx.fillText(p.label, p.sx, p.sy);
      ctx.shadowBlur = 0;
    });
  }

  let running = false;
  let rafId = null;

  function loop() {
    if (!dragging) {
      rotY += velY;
      rotX += (0.25 - rotX) * 0.02;
    }
    draw();
    if (running) rafId = requestAnimationFrame(loop);
  }

  function start() {
    if (running) return;
    running = true;
    rafId = requestAnimationFrame(loop);
  }
  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
  }

  function hitTest(mx, my) {
    let best = -1, bestDist = 26;
    points.forEach((p, i) => {
      const proj = project(p);
      const d = Math.hypot(proj.sx - mx, proj.sy - my);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    return best;
  }

  canvas.addEventListener('mousedown', (e) => {
    dragging = true; lastX = e.clientX; lastY = e.clientY;
  });
  window.addEventListener('mouseup', () => { dragging = false; });
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    hoverIndex = hitTest(e.clientX - rect.left, e.clientY - rect.top);
    if (dragging) {
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      rotY += dx * 0.006;
      rotX += dy * 0.006;
      rotX = Math.max(-1.3, Math.min(1.3, rotX));
      lastX = e.clientX; lastY = e.clientY;
      velY = dx * 0.0004;
    }
  });
  canvas.addEventListener('mouseleave', () => { hoverIndex = -1; });

  canvas.addEventListener('touchstart', (e) => {
    dragging = true;
    lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
  }, { passive: true });
  canvas.addEventListener('touchmove', (e) => {
    const t0 = e.touches[0];
    const dx = t0.clientX - lastX, dy = t0.clientY - lastY;
    rotY += dx * 0.006;
    rotX += dy * 0.006;
    rotX = Math.max(-1.3, Math.min(1.3, rotX));
    lastX = t0.clientX; lastY = t0.clientY;
  }, { passive: true });
  window.addEventListener('touchend', () => { dragging = false; });

  window.addEventListener('resize', resize, { passive: true });

  buildPoints();
  resize();
  draw();

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? start() : stop()));
    }, { threshold: 0 });
    io.observe(wrap);
  } else {
    start();
  }
})();
