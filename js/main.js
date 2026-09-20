document.getElementById('year').textContent = new Date().getFullYear();

/* Mobile top bar scroll state + dropdown menu */
const mobileNav = document.getElementById('mobileNav');
const navBurger = document.getElementById('navBurger');
const navMobile = document.getElementById('navMobile');

window.addEventListener('scroll', () => {
  mobileNav.classList.toggle('is-scrolled', window.scrollY > 20);
}, { passive: true });

function setNavOpen(open) {
  navMobile.classList.toggle('is-open', open);
  navBurger.classList.toggle('is-active', open);
  navBurger.setAttribute('aria-expanded', String(open));
}
navBurger.addEventListener('click', () => {
  setNavOpen(!navMobile.classList.contains('is-open'));
});
navMobile.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => setNavOpen(false));
});
document.addEventListener('click', (e) => {
  if (navMobile.classList.contains('is-open') && !navMobile.contains(e.target) && !navBurger.contains(e.target)) {
    setNavOpen(false);
  }
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setNavOpen(false);
});

/* Section links use plain native anchor jumps (no JS scrollTo): the
   browser's own smooth-scroll (html{scroll-behavior:smooth}) + each
   section's scroll-margin-top handles the motion, and since every
   section is min-height:100svh with its content centered via CSS
   flexbox, short sections (Stack, Contact) land visually centered
   for free the moment their top reaches the viewport top. Nothing
   here depends on window.scrollTo or measuring section heights. */

/* Sidebar nav: highlight the link for the section currently in view */
const sidebarNavLinks = document.querySelectorAll('.sidebar__nav a[data-nav]');
if (sidebarNavLinks.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      sidebarNavLinks.forEach((a) => a.classList.toggle('is-active', a.dataset.nav === id));
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  ['home', 'about', 'projects', 'skills', 'contact'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
  });
}

/* Cursor glow */
window.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--x', e.clientX + 'px');
  document.documentElement.style.setProperty('--y', e.clientY + 'px');
}, { passive: true });

/* Reveal on scroll */
const revealTargets = document.querySelectorAll('.reveal, .card');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealTargets.forEach((el) => revealObserver.observe(el));

/* Re-observe project cards (rendered dynamically after this script may have queried) */
document.querySelectorAll('.card').forEach((el) => revealObserver.observe(el));

/* Animated stat counters */
const statEls = document.querySelectorAll('.stat__num');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10) || 0;
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    statObserver.unobserve(el);
  });
}, { threshold: 0.5 });
statEls.forEach((el) => statObserver.observe(el));

/* Project filters */
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.projects__grid .card').forEach((card) => {
      const show = filter === 'all' || card.dataset.cat === filter;
      card.style.display = show ? '' : 'none';
    });
  });
});

/* Image modal (project preview) */
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');
let lastFocused = null;

function openModal(index) {
  const p = PROJECTS[index];
  if (!p) return;
  modalImg.src = `assets/projects/${p.img}`;
  modalImg.alt = `Captura del frontend de ${p.title}`;
  modalCaption.textContent = p.title;
  lastFocused = document.activeElement;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}
function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

document.getElementById('projectsGrid').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-modal-index]');
  if (!btn) return;
  openModal(parseInt(btn.dataset.modalIndex, 10));
});
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
});

/* Contact form -> Supabase */
const SUPABASE_URL = 'https://trycmjoouqpdjfdrhhwi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyeWNtam9vdXFwZGpmZHJoaHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5MzE3MjIsImV4cCI6MjEwNTUwNzcyMn0.qaKBtj3SdSnBQ5XCEcaBwaRCaZsjH3sBVOMkKFIRGpw';

const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const submitBtn = form.querySelector('button[type="submit"]');

const confirmModal = document.getElementById('confirmModal');
const confirmModalBackdrop = document.getElementById('confirmModalBackdrop');
const confirmModalClose = document.getElementById('confirmModalClose');
const confirmModalOk = document.getElementById('confirmModalOk');

function openConfirmModal() {
  confirmModal.classList.add('is-open');
  confirmModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  confirmModalOk.focus();
}
function closeConfirmModal() {
  confirmModal.classList.remove('is-open');
  confirmModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
confirmModalBackdrop.addEventListener('click', closeConfirmModal);
confirmModalClose.addEventListener('click', closeConfirmModal);
confirmModalOk.addEventListener('click', closeConfirmModal);
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && confirmModal.classList.contains('is-open')) closeConfirmModal();
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = form.name.value.trim();
  const email = form.email.value.trim();
  const mensaje = form.message.value.trim();

  submitBtn.disabled = true;
  formNote.textContent = 'Enviando...';

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/contactos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({ nombre, email, mensaje })
    });

    if (!res.ok) throw new Error(`Supabase respondió ${res.status}`);

    formNote.textContent = '';
    form.reset();
    openConfirmModal();
  } catch (err) {
    formNote.textContent = 'No se pudo enviar. Intenta de nuevo o escribime directo a rvillarroelh@gmail.com';
  } finally {
    submitBtn.disabled = false;
  }
});
