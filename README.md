# Margaret Scaramella — Garden Designer

Redesign minimal ed editoriale del sito di Margaret Scaramella (garden designer, Napoli – Lecce).
Sito statico: nessun framework, nessun build obbligatorio per l'hosting. Le pagine HTML sono generate
da `content/site.mjs` e committate nel repository.

## Struttura

```
index.html                 Home: hero a schede impilate, statement, lavori in evidenza
lavori/                    Indice dei lavori (griglia editoriale asimmetrica)
lavori/<slug>/             Pagine dei singoli progetti (template unico)
stampa/                    Rassegna stampa
bio/                       Bio e contatti (#contatti) e credits (#credits)
assets/css/main.css        Stile (token in :root)
assets/js/main.js          Lenis + GSAP ScrollTrigger, header, menu, reveal, transizioni
assets/vendor/             gsap, ScrollTrigger, lenis (copiati da node_modules)
assets/img/                Immagini in WebP + AVIF, 800 e 1600 px
content/site.mjs           Tutti i contenuti: testi, progetti, stampa, contatti
scripts/build.mjs          Genera le pagine HTML
scripts/images.mjs         Converte le foto in WebP/AVIF (o genera segnaposto)
scripts/check.mjs          Controlli in Chromium: console, layout, motion, menu
```

## Comandi

```
npm install
npm run images     # converte src-photos/*.jpg in assets/img (WebP + AVIF)
npm run build      # rigenera le pagine HTML da content/site.mjs
npm run dev        # server locale su http://localhost:4173
npm run check      # apre ogni pagina in Chromium (desktop, mobile, reduced-motion)
```

I percorsi sono assoluti (`/assets/...`): servire il sito dalla radice del dominio.

## Foto: da sostituire

Il sito originale non era raggiungibile dall'ambiente di sviluppo, quindi le immagini in `assets/img`
sono **segnaposto tonali** generati da `scripts/images.mjs`. Per usare le foto reali:

1. copiare i JPG/PNG in `src-photos/` con i nomi usati in `content/site.mjs`
   (`hero-1..4`, `patu-01..06`, `archivio-01..05`, `terrazza-01..04`, `masseria-01..05`, `bio-01`);
2. eseguire `npm run images`: ogni foto viene convertita in 800 e 1600 px, WebP e AVIF.

## Contenuti da verificare

I testi derivano dalla pagina Bio del sito attuale e da fonti pubbliche (Villegiardini, Il Mattino,
Il Denaro, Gardenia). In `content/site.mjs` sono segnati con `// verificare`:

- email e profilo Instagram;
- i progetti «Una terrazza sul golfo» e «Il giardino di una masseria» hanno testi indicativi;
- la data dell'articolo di Gardenia.

## Motion

- Lenis con `lerp: 0.08`; GSAP ScrollTrigger aggiornato dallo scroll di Lenis.
- Solo `transform` e `opacity`; ampiezze 10–30 px, scale 1.05→1, durate 0.9–1.4 s, `expo.out`/`power3.out`.
- Hero: schede sticky; quando la successiva sale, la precedente scala a 0.95 e si scurisce (0.28);
  parallax ±3 % dentro l'immagine solo su desktop. Su mobile stacking semplificato, senza parallax.
- `prefers-reduced-motion: reduce`: niente Lenis, niente animazioni, contenuti subito visibili.
