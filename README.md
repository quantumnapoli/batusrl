# Batù S.r.l. — sito

Sito statico di Batù S.r.l., giardinieri a Napoli: progettazione, realizzazione e cura
del verde. Nessun framework e nessun build obbligatorio per l'hosting: le pagine HTML
sono generate da `content/site.mjs` e committate nel repository.

## Struttura

```
index.html                 Home: hero a schede impilate, statement, lavori in evidenza
lavori/                    Indice dei lavori (griglia editoriale asimmetrica)
lavori/<slug>/             Pagine dei singoli progetti (template unico)
stampa/                    Rassegna stampa
studio/                    Chi siamo, cosa facciamo, contatti (#contatti)
assets/css/main.css        Stile (token in :root)
assets/js/main.js          Lenis + GSAP ScrollTrigger, header, menu, reveal, transizioni
assets/vendor/             gsap, ScrollTrigger, lenis (copiati da node_modules)
assets/img/                Immagini in WebP + AVIF, 800 e 1600 px
content/site.mjs           Tutti i contenuti: anagrafica, testi, progetti, stampa
scripts/build.mjs          Genera le pagine HTML
scripts/images.mjs         Converte le foto in WebP/AVIF (o genera segnaposto)
scripts/check.mjs          Controlli in Chromium: console, layout, motion, menu
netlify.toml               Deploy statico (publish ".", nessun build)
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

## Logo

Il logo non è incluso: in attesa di quello ufficiale l'header mostra il nome in
caratteri serif. Per sostituirlo, mettere il file in `assets/logo.svg` e in
`scripts/build.mjs` (costante `brand`) scambiare lo `<span>` con la riga `<img>`
già pronta nel commento. Anche la favicon in `assets/favicon.svg` è una lettera
tipografica provvisoria.

## Foto: da sostituire

Le immagini in `assets/img` sono **segnaposto tonali** generati da `scripts/images.mjs`,
perché il sito attuale non era raggiungibile dall'ambiente di sviluppo. Per usare le
foto reali:

1. copiare i JPG/PNG in `src-photos/` con i nomi usati in `content/site.mjs`
   (`hero-1..4`, `archivio-01..05`, `molosiglio-01..06`, `terrazza-01..04`,
   `secco-01..05`, `studio-01`);
2. eseguire `npm run images`: ogni foto viene convertita in 800 e 1600 px, WebP e AVIF.

## Contenuti da verificare

Anagrafica e testi derivano da batusrl.com, dalla scheda Assoverde e dalla stampa
(Il Mattino, Il Denaro). In `content/site.mjs` sono segnati con `// verificare`:

- i testi dei progetti «Una terrazza sul golfo» e «Il giardino secco»;
- la data dell'articolo sui Green Blue Days.

Da confermare anche anni e partner dei progetti, e se «Batù» vada scritto con l'accento
anche nel marchio.

## Impaginazione

- `--gutter` è il margine delle foto dal bordo dello schermo (16 px su mobile, 20 px da 768 px).
- `--pad` è il doppio: logo, menu e testi rientrano fin lì, così il marchio sta *dentro*
  la foto alla stessa distanza dai suoi bordi.
- Le foto a tutta pagina restano a `--gutter` e hanno tutte la stessa larghezza.

## Motion

- Lenis con `lerp: 0.08`; GSAP ScrollTrigger aggiornato dallo scroll di Lenis.
- Solo `transform` e `opacity`; ampiezze 10–30 px, scale 1.05→1, durate 0.9–1.4 s, `expo.out`/`power3.out`.
- Hero: schede sticky; quando la successiva sale, la precedente scala a 0.95 e si scurisce (0.28);
  parallax ±3 % dentro l'immagine solo su desktop. Su mobile stacking semplificato, senza parallax.
- Header: si nasconde scendendo e riappare salendo; sopra una foto a tutta pagina il testo
  resta bianco, poi torna scuro.
- `prefers-reduced-motion: reduce`: niente Lenis, niente animazioni, contenuti subito visibili.

## Deploy

Il sito è collegato al progetto Netlify `batusrl`. Il workflow
`.github/workflows/netlify.yml` pubblica a ogni push su `main`, se sono presenti i
segreti `NETLIFY_AUTH_TOKEN` e `NETLIFY_SITE_ID`.
