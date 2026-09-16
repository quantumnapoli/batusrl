// Genera le pagine HTML statiche a partire da content/site.mjs.
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { site, statement, projects, hero, press, studio } from '../content/site.mjs';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const picture = (name, alt, { eager = false, sizes = '(min-width: 768px) 60vw, 100vw' } = {}) => `
<picture>
  <source type="image/avif" srcset="/assets/img/${name}-800.avif 800w, /assets/img/${name}-1600.avif 1600w" sizes="${sizes}">
  <source type="image/webp" srcset="/assets/img/${name}-800.webp 800w, /assets/img/${name}-1600.webp 1600w" sizes="${sizes}">
  <img src="/assets/img/${name}-1600.webp" alt="${esc(alt)}" ${eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async">
</picture>`;

const NAV = [
  ['Lavori', '/lavori/'],
  ['Stampa', '/stampa/'],
  ['Studio', '/studio/'],
  ['Contatti', '/studio/#contatti'],
];

// Marchio: finché non arriva il logo definitivo si usa il nome in caratteri serif.
// Per sostituirlo basta mettere il file in assets/logo.svg e scambiare le due righe.
const brand = `<!-- LOGO: quando è pronto, sostituire lo <span> con:
       <img class="header__logo" src="/assets/logo.svg" alt="${esc(site.legal)}" width="96" height="28"> -->
    <span class="header__name">${esc(site.name)}</span>`;

const head = ({ title, description, path, overHero = false }) => `<!doctype html>
<html lang="it" class="js-motion">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${site.url}${path}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:type" content="website">
  <meta name="theme-color" content="#f5f2ec">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;500&display=swap">
  <link rel="stylesheet" href="/assets/css/main.css">
  <script>if (matchMedia('(prefers-reduced-motion: reduce)').matches) document.documentElement.classList.remove('js-motion');</script>
</head>
<body${overHero ? ' data-hero="photo"' : ''}>
<a class="skip-link" href="#main">Vai al contenuto</a>
<header class="header${overHero ? ' is-over' : ''}">
  <a class="header__brand" href="/" aria-label="${esc(site.legal)}, home">
    ${brand}
    <span class="header__role">${esc(site.role)}</span>
  </a>
  <nav class="nav" aria-label="Principale">
    ${NAV.map(([l, h]) => `<a href="${h}"${h === path ? ' aria-current="page"' : ''}>${l}</a>`).join('\n    ')}
  </nav>
  <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu">
    <span class="menu-btn__label">Menu</span><span class="menu-btn__lines" aria-hidden="true"></span>
  </button>
</header>
<div class="menu" id="menu" aria-hidden="true">
  <ul class="menu__list">
    ${NAV.map(([l, h]) => `<li><a href="${h}">${l}</a></li>`).join('\n    ')}
  </ul>
  <div class="menu__meta t-small">
    <a href="mailto:${site.email}">${site.email}</a>
    <a href="tel:+39${site.phone.replace(/\s/g, '')}">${site.phone}</a>
    <span>${esc(site.cities)}</span>
  </div>
</div>
<main class="main" id="main">
`;

const footer = () => `
</main>
<footer class="footer">
  <div class="footer__grid">
    <div class="footer__col">
      <span class="eyebrow">Contatti</span>
      <a href="mailto:${site.email}">${site.email}</a>
      <a href="tel:+39${site.phone.replace(/\s/g, '')}">${site.phone}</a>
    </div>
    <div class="footer__col">
      <span class="eyebrow">Dove</span>
      <p>${esc(site.address)}</p>
    </div>
    <div class="footer__col">
      <span class="eyebrow">Social</span>
      <a href="${site.instagram}" target="_blank" rel="noopener">Instagram</a>
    </div>
    <div class="footer__col">
      <span class="eyebrow">Pagine</span>
      ${NAV.slice(0, 3).map(([l, h]) => `<a href="${h}">${l}</a>`).join('')}
    </div>
  </div>
  <div class="footer__bottom">
    <span>© ${new Date().getFullYear()} ${esc(site.legal)}</span>
    <span>${esc(site.vat)}</span>
    <span>Questo sito non usa cookie di profilazione.</span>
  </div>
</footer>
<script src="/assets/vendor/gsap.min.js" defer></script>
<script src="/assets/vendor/ScrollTrigger.min.js" defer></script>
<script src="/assets/vendor/lenis.min.js" defer></script>
<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;

const page = (opts, body) => head(opts) + body + footer();

const workCard = (p, cls, ratio = '3-2') => `
<li class="work ${cls}" data-reveal>
  <a class="work__link" href="/lavori/${p.slug}/">
    <div class="frame frame--ratio-${ratio}">${picture(p.cover, p.alt)}</div>
    <div class="work__meta">
      <span class="work__title">${esc(p.title)}</span>
      <span class="work__place">${esc(p.place)}, ${p.year}</span>
    </div>
  </a>
</li>`;

/* ---------- Home ---------- */
const home = page({
  title: `${site.legal} — ${esc(site.role)}`,
  description: site.description,
  path: '/',
  overHero: true,
}, `
<section class="hero" aria-label="Fotografie dei nostri giardini">
  ${hero.map((h, i) => `
  <div class="hero__card">
    <div class="hero__frame">
      ${picture(h.img, h.alt, { eager: i === 0, sizes: '100vw' })}
      <div class="hero__shade"></div>
    </div>
  </div>`).join('')}
</section>

<section class="section wrap wrap--inset">
  <h1 class="statement">
    ${statement.map((l) => `<span class="line"><span>${l}</span></span>`).join('\n    ')}
  </h1>
</section>

<section class="section section--tight wrap">
  <div class="section__head wrap--inset-head" data-reveal>
    <h2 class="eyebrow">Lavori in evidenza</h2>
    <a class="link-arrow" href="/lavori/">Tutti i lavori</a>
  </div>
  <ul class="grid works">
    ${workCard(projects[0], 'work--a')}
    ${workCard(projects[1], 'work--b', '4-5')}
    ${workCard(projects[2], 'work--c', '4-3')}
    ${workCard(projects[3], 'work--d')}
  </ul>
</section>
`);

/* ---------- Lavori ---------- */
const layouts = ['work--a', 'work--b', 'work--c', 'work--d', 'work--e', 'work--f'];
const ratios = ['3-2', '4-5', '4-3', '3-2', '4-5', '4-3'];
const lavori = page({
  title: `Lavori — ${site.legal}`,
  description: `Giardini, parchi, terrazze e giardini storici realizzati e curati da ${site.legal} a Napoli.`,
  path: '/lavori/',
}, `
<section class="section wrap wrap--inset">
  <h1 class="t-title" data-reveal>Lavori</h1>
</section>
<section class="wrap" style="padding-bottom: clamp(64px, 10vw, 140px)">
  <ul class="grid works">
    ${projects.map((p, i) => workCard(p, layouts[i % layouts.length], ratios[i % ratios.length])).join('')}
  </ul>
</section>
`);

/* ---------- Singolo lavoro ---------- */
const project = (p, next) => page({
  title: `${p.title} — ${p.place} — ${site.legal}`,
  description: p.text[0].slice(0, 155).replace(/\s\S*$/, '…'),
  path: `/lavori/${p.slug}/`,
  overHero: true,
}, `
<section class="project-hero wrap">
  <div class="frame">${picture(p.cover, p.alt, { eager: true, sizes: '100vw' })}</div>
</section>
<section class="section section--tight wrap wrap--inset">
  <div class="grid project-head">
    <div class="project-head__title" data-reveal>
      <span class="eyebrow">${esc(p.kind)}</span>
      <h1 class="t-title" style="margin-top: 10px">${esc(p.title)}</h1>
      <dl class="project-facts">
        <dt>Luogo</dt><dd>${esc(p.place)}</dd>
        <dt>Anno</dt><dd>${p.year}</dd>
        ${p.with ? `<dt>Progetto</dt><dd>${esc(p.with)}</dd>` : ''}
        ${p.photo ? `<dt>Foto</dt><dd>${esc(p.photo)}</dd>` : ''}
      </dl>
    </div>
    <div class="project-head__text" data-reveal data-delay="0.1">
      ${p.text.map((t) => `<p class="t-body">${t}</p>`).join('\n      ')}
    </div>
  </div>
</section>
<section class="wrap" style="padding-bottom: clamp(64px, 10vw, 140px)">
  <div class="grid gallery">
    ${p.gallery.map((g) => `
    <figure class="gallery__item gallery__item--${g.layout}" data-reveal>
      <div class="frame frame--ratio-${g.ratio}">${picture(g.img, g.alt, { sizes: g.layout === 'full' ? '100vw' : '(min-width: 768px) 50vw, 100vw' })}</div>
    </figure>`).join('')}
  </div>
</section>
<section class="section section--tight wrap">
  <a class="next" href="/lavori/${next.slug}/" data-reveal>
    <span class="eyebrow next__label">Progetto successivo</span>
    <div class="frame">${picture(next.cover, next.alt, { sizes: '100vw' })}</div>
    <span class="next__title">${esc(next.title)} <span class="t-small">— ${esc(next.place)}, ${next.year}</span></span>
  </a>
</section>
`);

/* ---------- Stampa ---------- */
const stampa = page({
  title: `Stampa — ${site.legal}`,
  description: `Articoli e pubblicazioni sui giardini curati da ${site.legal}.`,
  path: '/stampa/',
}, `
<section class="section wrap wrap--inset">
  <h1 class="t-title">Stampa</h1>
</section>
<section class="wrap wrap--inset" style="padding-bottom: clamp(64px, 10vw, 140px)">
  <ul class="press">
    ${press.map((a) => `
    <li class="press__item">
      <a class="press__link" href="${a.url}" target="_blank" rel="noopener">
        <span class="press__source">${esc(a.source)}</span>
        <span class="press__title">${esc(a.title)}</span>
        <span class="press__date">${esc(a.date)}</span>
      </a>
    </li>`).join('')}
  </ul>
</section>
`);

/* ---------- Studio e contatti ---------- */
const studioPage = page({
  title: `Studio e contatti — ${site.legal}`,
  description: `Chi siamo: ${site.legal}, giardinieri a Napoli dal 2018. Progettazione, realizzazione e manutenzione del verde.`,
  path: '/studio/',
}, `
<section class="section wrap wrap--inset">
  <div class="grid bio">
    <div class="bio__img" data-reveal>
      <div class="frame frame--ratio-4-5">${picture('studio-01', 'La squadra di Batù al lavoro in un giardino', { eager: true, sizes: '(min-width: 768px) 33vw, 100vw' })}</div>
    </div>
    <div class="bio__text">
      <h1 class="t-title" data-reveal>${esc(studio.title)}</h1>
      <div style="margin-top: 28px">
        ${studio.text.map((t, i) => `<p class="t-body" data-reveal data-delay="${(i * 0.06).toFixed(2)}">${esc(t)}</p>`).join('\n        ')}
      </div>
    </div>
  </div>
</section>
<section class="section section--tight wrap wrap--inset">
  <h2 class="eyebrow" data-reveal>Cosa facciamo</h2>
  <div class="grid services" style="margin-top: 28px">
    ${studio.services.map((s, i) => `
    <div class="services__col" data-reveal data-delay="${(i * 0.08).toFixed(2)}">
      <h3 class="t-lead">${esc(s.title)}</h3>
      <p class="t-body" style="margin-top: 10px">${esc(s.text)}</p>
    </div>`).join('')}
  </div>
</section>
<hr class="rule" style="margin: 0 var(--gutter)">
<section class="section wrap wrap--inset" id="contatti">
  <h2 class="t-title" data-reveal>Contatti</h2>
  <div class="grid contacts" style="margin-top: 32px">
    <div class="contacts__col" data-reveal>
      <span class="eyebrow">Email</span>
      <a href="mailto:${site.email}">${site.email}</a>
    </div>
    <div class="contacts__col" data-reveal data-delay="0.08">
      <span class="eyebrow">Telefono</span>
      <a href="tel:+39${site.phone.replace(/\s/g, '')}">${site.phone}</a>
    </div>
    <div class="contacts__col" data-reveal data-delay="0.16">
      <span class="eyebrow">Instagram</span>
      <a href="${site.instagram}" target="_blank" rel="noopener">${esc(site.instagramHandle)}</a>
    </div>
    <div class="contacts__col" data-reveal data-delay="0.24">
      <span class="eyebrow">Sede</span>
      <span class="t-lead">${esc(site.address)}</span>
    </div>
  </div>
</section>
`);

await rm('bio', { recursive: true, force: true });

const out = [
  ['index.html', home],
  ['lavori/index.html', lavori],
  ['stampa/index.html', stampa],
  ['studio/index.html', studioPage],
  ...projects.map((p, i) => [`lavori/${p.slug}/index.html`, project(p, projects[(i + 1) % projects.length])]),
];
for (const [file, html] of out) {
  await mkdir(file.split('/').slice(0, -1).join('/') || '.', { recursive: true });
  await writeFile(file, html);
  console.log('scritto', file);
}
