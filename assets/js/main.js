/* Margaret Scaramella — interazioni
   Lenis (smooth scroll) + GSAP ScrollTrigger. Solo transform/opacity.
   Rispetta prefers-reduced-motion: in quel caso nessun Lenis e nessuna animazione. */

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;
const html = document.documentElement;
const main = document.querySelector('.main');

/* ---------- Menu mobile ---------- */
(() => {
  const btn = document.querySelector('.menu-btn');
  const menu = document.getElementById('menu');
  if (!btn || !menu) return;
  const label = btn.querySelector('.menu-btn__label');
  const setOpen = (open) => {
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    if (label) label.textContent = open ? 'Chiudi' : 'Menu';
    if (window.lenis) open ? window.lenis.stop() : window.lenis.start();
    if (open) menu.querySelector('a')?.focus();
  };
  btn.addEventListener('click', () => setOpen(!document.body.classList.contains('menu-open')));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && document.body.classList.contains('menu-open')) { setOpen(false); btn.focus(); } });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
})();

/* ---------- Header: si nasconde scendendo, riappare salendo ---------- */
(() => {
  const header = document.querySelector('.header');
  if (!header) return;
  let last = window.scrollY, ticking = false;
  const update = () => {
    const y = window.scrollY;
    if (document.body.classList.contains('menu-open')) { header.classList.remove('is-hidden'); }
    else if (y > last + 4 && y > 120) header.classList.add('is-hidden');
    else if (y < last - 4 || y <= 120) header.classList.remove('is-hidden');
    last = y; ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
})();

/* ---------- Transizioni di pagina ---------- */
(() => {
  const show = () => { main?.classList.remove('is-leaving'); main?.classList.add('is-ready'); };
  requestAnimationFrame(() => requestAnimationFrame(show));
  window.addEventListener('pageshow', (e) => { if (e.persisted) show(); });
  if (reduced) return;
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a || a.target === '_blank' || a.hasAttribute('download') || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname && url.hash) return; // ancora interna
    e.preventDefault();
    main?.classList.add('is-leaving');
    setTimeout(() => { location.href = url.href; }, 480);
  });
})();

/* ---------- Motion ---------- */
if (reduced || typeof gsap === 'undefined') {
  html.classList.remove('js-motion');
} else {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: 'expo.out', duration: 1.1 });

  /* Lenis, lerp basso */
  const lenis = new Lenis({ lerp: 0.08, smoothWheel: true, anchors: true });
  window.lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  /* Reveal generico */
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
      delay: Number(el.dataset.delay || 0),
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  /* Statement: riga per riga */
  document.querySelectorAll('.statement').forEach((st) => {
    const lines = st.querySelectorAll('.line > span');
    gsap.to(lines, {
      y: 0, duration: 1.3, stagger: 0.12, ease: 'expo.out',
      scrollTrigger: { trigger: st, start: 'top 80%', once: true },
    });
  });

  /* Hero a schede impilate */
  const cards = gsap.utils.toArray('.hero__card');
  if (cards.length) {
    const mm = gsap.matchMedia();
    mm.add({ desktop: '(min-width: 768px)', mobile: '(max-width: 767px)' }, (ctx) => {
      const { desktop } = ctx.conditions;
      cards.forEach((card, i) => {
        const frame = card.querySelector('.hero__frame');
        const img = card.querySelector('img');
        const shade = card.querySelector('.hero__shade');
        const next = cards[i + 1];
        if (next) {
          // Quando la scheda successiva sale, questa scala a 0.95 e si scurisce appena.
          gsap.timeline({
            scrollTrigger: { trigger: next, start: 'top bottom', end: 'top top', scrub: true },
          })
            .to(frame, { scale: desktop ? 0.95 : 0.97, ease: 'none' }, 0)
            .to(shade, { opacity: desktop ? 0.28 : 0.2, ease: 'none' }, 0);
        }
        if (desktop && img) {
          // Parallax lieve dentro l'immagine, solo desktop.
          gsap.set(img, { scale: 1.08 });
          gsap.fromTo(img, { yPercent: -3 }, {
            yPercent: 3, ease: 'none',
            scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true },
          });
        }
      });
    });
  }

  /* Immagini della galleria: scale 1.05 -> 1 lento */
  document.querySelectorAll('.gallery__item img, .project-hero img').forEach((img) => {
    gsap.fromTo(img, { scale: 1.05 }, {
      scale: 1, duration: 1.4, ease: 'expo.out',
      scrollTrigger: { trigger: img, start: 'top 90%', once: true },
    });
  });

  window.addEventListener('load', () => ScrollTrigger.refresh());
}
