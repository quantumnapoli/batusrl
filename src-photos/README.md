# Foto da caricare qui

Metti in questa cartella i JPG (o PNG) originali, **con questi nomi esatti**.
A ogni caricamento su `main` parte da solo il workflow "Ottimizza le foto": genera
le versioni WebP e AVIF a 800 e 1600 px in `assets/img/` e le pubblica.

Non serve ridimensionarle prima: carica il file più grande che hai.

## Nomi attesi

| File                   | Dove appare                                   |
|------------------------|-----------------------------------------------|
| `hero-1.jpg`           | Home, prima foto a tutta pagina               |
| `hero-2.jpg`           | Home, seconda foto                            |
| `hero-3.jpg`           | Home, terza foto                              |
| `hero-4.jpg`           | Home, quarta foto                             |
| `archivio-01.jpg`      | Archivio di Stato, foto di copertina          |
| `archivio-02.jpg`      | Archivio di Stato, galleria (orizzontale)     |
| `archivio-03.jpg`      | Archivio di Stato, galleria (verticale)       |
| `archivio-04.jpg`      | Archivio di Stato, galleria (verticale)       |
| `archivio-05.jpg`      | Archivio di Stato, galleria (orizzontale)     |
| `molosiglio-01.jpg`    | Molosiglio, copertina                         |
| `molosiglio-02.jpg`    | Molosiglio, galleria (orizzontale)            |
| `molosiglio-03.jpg`    | Molosiglio, galleria (verticale)              |
| `molosiglio-04.jpg`    | Molosiglio, galleria (verticale)              |
| `molosiglio-05.jpg`    | Molosiglio, galleria (piccola)                |
| `molosiglio-06.jpg`    | Molosiglio, galleria (orizzontale)            |
| `terrazza-01.jpg`      | Terrazza sul golfo, copertina                 |
| `terrazza-02.jpg`      | Terrazza sul golfo, galleria                  |
| `terrazza-03.jpg`      | Terrazza sul golfo, galleria (verticale)      |
| `terrazza-04.jpg`      | Terrazza sul golfo, galleria                  |
| `secco-01.jpg`         | Giardino secco, copertina                     |
| `secco-02.jpg`         | Giardino secco, galleria                      |
| `secco-03.jpg`         | Giardino secco, galleria (verticale)          |
| `secco-04.jpg`         | Giardino secco, galleria (verticale)          |
| `secco-05.jpg`         | Giardino secco, galleria (orizzontale)        |
| `studio-01.jpg`        | Pagina Studio, ritratto o squadra al lavoro   |

Le foto orizzontali rendono meglio in 3:2 o 4:3, le verticali in 4:5.
Se un nome manca, resta il segnaposto colorato: non si rompe nulla.

Puoi caricarle anche dal browser, senza usare git:
https://github.com/quantumnapoli/batusrl/upload/main/src-photos

## Testi alternativi

Le descrizioni per i lettori di schermo sono in `content/site.mjs` (campo `alt`).
Vanno riscritte per corrispondere alle foto vere.
