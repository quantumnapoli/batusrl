// Contenuti del sito Batù S.r.l. Modificare qui e rilanciare `npm run build`.
//
// FONTI: i dati anagrafici e i testi derivano dal sito batusrl.com, dalla scheda
// Assoverde e dalla stampa (Il Mattino, Il Denaro). Le voci segnate con
// "verificare" vanno confermate con il cliente: il sito attuale non era
// raggiungibile dall'ambiente di sviluppo.

export const site = {
  name: 'Batù',
  legal: 'Batù S.r.l.',
  role: 'Giardini, Napoli',
  claim: 'Porta la natura a casa tua',
  cities: 'Napoli',
  address: 'Rampe Petraio 21, 80127 Napoli',
  vat: 'P. IVA 08948201218',
  email: 'giovanni@batusrl.com',
  phone: '349 4922543',
  instagram: 'https://www.instagram.com/batu.gardens/',
  instagramHandle: '@batu.gardens',
  url: 'https://www.batusrl.com',
  description: 'Batù S.r.l., giardinieri a Napoli dal 2018. Progettazione, realizzazione e cura di giardini, parchi, terrazze e giardini storici.',
};

// Statement (home). Ogni riga è un elemento: il reveal è riga per riga.
export const statement = [
  'Progettiamo, realizziamo',
  'e curiamo giardini <em>vivi</em>:',
  'parchi, terrazze, orti',
  'e giardini storici.',
];

export const projects = [
  {
    slug: 'archivio-di-stato-napoli',
    title: 'I giardini dell’Archivio di Stato',
    place: 'Napoli',
    year: '2024',
    kind: 'Giardino storico',
    with: 'con Margaret Scaramella',
    photo: '',
    cover: 'archivio-01',
    alt: 'Chiostro e giardino storico del monastero dei Santi Severino e Sossio, Napoli',
    text: [
      'Il recupero dei giardini storici del complesso dei Santi Severino e Sossio, sede dell’Archivio di Stato di Napoli, nel centro antico della città. L’intervento segue la tradizione dell’ordine benedettino: torna l’orto dei semplici dove i monaci coltivavano le piante medicinali, torna l’agrumeto già presente in una mappa dell’Ottocento, tornano i giardini naturali.',
      'Un lavoro di cura lenta che restituisce alla città un giardino segreto rimasto per decenni fuori dallo sguardo.',
    ],
    gallery: [
      { img: 'archivio-02', ratio: '3-2', layout: 'full', alt: 'L’agrumeto ritrovato' },
      { img: 'archivio-03', ratio: '4-5', layout: 'left', alt: 'L’orto dei semplici' },
      { img: 'archivio-04', ratio: '4-5', layout: 'right', alt: 'Aiuole e percorsi tra i chiostri' },
      { img: 'archivio-05', ratio: '3-2', layout: 'small', alt: 'Dettaglio di erbe officinali' },
    ],
  },
  {
    slug: 'giardini-del-molosiglio',
    title: 'I Giardini del Molosiglio',
    place: 'Napoli',
    year: '2023',
    kind: 'Verde pubblico',
    with: 'per l’adozione GreenCare',
    photo: '',
    cover: 'molosiglio-01',
    alt: 'Alberi e prati dei Giardini del Molosiglio, sul mare a Napoli',
    text: [
      'La cura triennale dei Giardini del Molosiglio, tra il porto e il Maschio Angioino: la più estesa adozione di verde pubblico della città. Potature, reimpianti, irrigazione e manutenzione programmata su un parco che vive di sale, vento e passaggio continuo.',
      'Il cantiere è anche il banco di prova della conversione della nostra attrezzatura: dai motori a scoppio agli utensili a batteria, per lavorare con meno rumore e meno emissioni in mezzo alle persone.',
    ],
    gallery: [
      { img: 'molosiglio-02', ratio: '3-2', layout: 'full', alt: 'Vista d’insieme del parco verso il mare' },
      { img: 'molosiglio-03', ratio: '4-5', layout: 'left', alt: 'Chioma di un albero dopo la potatura' },
      { img: 'molosiglio-04', ratio: '4-5', layout: 'right', alt: 'Aiuola rimessa a dimora' },
      { img: 'molosiglio-05', ratio: '4-3', layout: 'small', alt: 'Dettaglio di fioritura' },
      { img: 'molosiglio-06', ratio: '3-2', layout: 'full', alt: 'I giardini al tramonto' },
    ],
  },
  {
    slug: 'terrazza-sul-golfo',
    title: 'Una terrazza sul golfo',
    place: 'Napoli',
    year: '2021',
    kind: 'Terrazza privata',
    with: '',
    photo: '',
    cover: 'terrazza-01',
    alt: 'Terrazza con vasi e piante mediterranee affacciata sul golfo di Napoli',
    text: [
      'Una terrazza esposta al sole e al vento, trattata come un piccolo paesaggio: vasi grandi, piante che resistono alla salsedine, fioriture scalari lungo tutto l’anno. Substrati leggeri, irrigazione dosata, manutenzione programmata.', // verificare
    ],
    gallery: [
      { img: 'terrazza-02', ratio: '4-3', layout: 'full', alt: 'La terrazza vista dall’interno' },
      { img: 'terrazza-03', ratio: '4-5', layout: 'small', alt: 'Dettaglio di vasi in terracotta' },
      { img: 'terrazza-04', ratio: '4-3', layout: 'full', alt: 'Fioriture estive' },
    ],
  },
  {
    slug: 'giardino-secco',
    title: 'Il giardino secco',
    place: 'Napoli',
    year: '2022',
    kind: 'Giardino privato',
    with: 'con Pasquale De Luca',
    photo: '',
    cover: 'secco-01',
    alt: 'Giardino secco con ghiaia, graminacee e piante grasse',
    text: [
      'Un giardino pensato per vivere senza irrigazione: ghiaia, graminacee, piante grasse e specie della macchia mediterranea, scelte per il suolo e per l’esposizione. Poca acqua, poca manutenzione, molta luce.', // verificare
    ],
    gallery: [
      { img: 'secco-02', ratio: '4-3', layout: 'full', alt: 'Graminacee mosse dal vento' },
      { img: 'secco-03', ratio: '4-5', layout: 'left', alt: 'Ghiaia e piante grasse' },
      { img: 'secco-04', ratio: '4-5', layout: 'right', alt: 'Sentiero tra le specie mediterranee' },
      { img: 'secco-05', ratio: '3-2', layout: 'full', alt: 'Il giardino al mattino' },
    ],
  },
  {
    slug: 'relais-regina-giovanna',
    title: 'Il giardino del Relais Regina Giovanna',
    place: 'Sorrento (Na)',
    year: '2025',
    kind: 'Giardino di struttura ricettiva',
    with: '',
    photo: '',
    cover: 'relais-01',
    alt: 'Giardino del Relais Regina Giovanna affacciato sulla costiera sorrentina',
    text: [
      'Un giardino sospeso tra gli ulivi e la scogliera, pensato per accompagnare gli ospiti dall’ingresso fino al mare. Terrazzamenti, essenze mediterranee e punti d’ombra per vivere il verde in ogni stagione.', // verificare
    ],
    gallery: [
      { img: 'relais-02', ratio: '3-2', layout: 'full', alt: 'Percorso tra gli ulivi verso la scogliera' },
      { img: 'relais-03', ratio: '4-5', layout: 'left', alt: 'Terrazzamento fiorito' },
      { img: 'relais-04', ratio: '4-5', layout: 'right', alt: 'Vista sulla costiera sorrentina' },
      { img: 'relais-05', ratio: '3-2', layout: 'small', alt: 'Dettaglio delle essenze mediterranee' },
    ],
  },
  {
    slug: 'giardino-sul-mare',
    title: 'Un giardino sul mare',
    place: 'Patù (Le)',
    year: '2021',
    kind: 'Giardino privato',
    with: '',
    photo: '',
    cover: 'mare-01',
    alt: 'Giardino privato affacciato sul mare del Salento',
    text: [
      'Un giardino costiero pensato per resistere a vento e salsedine, con specie che accompagnano lo sguardo fino all’orizzonte del mare. Volumi morbidi, fioriture scalari, poca manutenzione.', // verificare
    ],
    gallery: [
      { img: 'mare-02', ratio: '4-5', layout: 'full', alt: 'Vialetto tra le aiuole verso il mare' },
      { img: 'mare-03', ratio: '4-5', layout: 'left', alt: 'Fioritura mediterranea' },
      { img: 'mare-04', ratio: '4-3', layout: 'right', alt: 'Il giardino visto dall’alto' },
      { img: 'mare-05', ratio: '3-2', layout: 'small', alt: 'Dettaglio del giardino al tramonto' },
    ],
  },
  {
    slug: 'terrazzo-tra-i-muri',
    title: 'Terrazzo tra i muri',
    place: 'Lecce',
    year: '2022',
    kind: 'Terrazza privata',
    with: '',
    photo: '',
    cover: 'muri-01',
    alt: 'Terrazzo racchiuso tra i muri in pietra leccese',
    text: [
      'Un terrazzo tra sole e ombra, chiuso tra muri antichi: vasi e fioriere disposti per accompagnare la luce nelle diverse ore del giorno, in un angolo raccolto nel centro di Lecce.', // verificare
    ],
    gallery: [
      { img: 'muri-02', ratio: '3-2', layout: 'full', alt: 'Il terrazzo tra i muri in pietra' },
      { img: 'muri-03', ratio: '4-5', layout: 'left', alt: 'Vasi e fioriere disposti lungo il muro' },
      { img: 'muri-04', ratio: '4-5', layout: 'right', alt: 'Dettaglio di una fioritura in vaso' },
      { img: 'muri-05', ratio: '3-2', layout: 'small', alt: 'Il terrazzo nel tardo pomeriggio' },
    ],
  },
  {
    slug: 'due-piccoli-giardini',
    title: 'Due piccoli giardini',
    place: 'Massa Lubrense (Na)',
    year: '2021',
    kind: 'Giardino privato',
    with: '',
    photo: '',
    cover: 'piccoli-01',
    alt: 'Due piccoli giardini privati sulla penisola sorrentina',
    text: [
      'Due spazi piccoli e diversi tra loro, trattati come stanze verdi: piante da vaso e da terra, percorsi minimi, un uso attento della luce disponibile in ogni angolo.', // verificare
    ],
    gallery: [
      { img: 'piccoli-02', ratio: '4-3', layout: 'full', alt: 'Il primo dei due giardini' },
      { img: 'piccoli-03', ratio: '4-5', layout: 'left', alt: 'Percorso tra le piante in vaso' },
      { img: 'piccoli-04', ratio: '4-5', layout: 'right', alt: 'Il secondo giardino' },
      { img: 'piccoli-05', ratio: '3-2', layout: 'small', alt: 'Dettaglio di una fioritura' },
    ],
  },
];

export const hero = ['hero-1', 'hero-2', 'hero-3', 'hero-4'].map((img, i) => ({
  img,
  alt: [
    'Giardino storico curato da Batù, Napoli',
    'I Giardini del Molosiglio sul mare',
    'Fioriture mediterranee su una terrazza napoletana',
    'Graminacee e ghiaia di un giardino secco',
  ][i],
}));

export const press = [
  { source: 'Il Mattino', title: 'Archivio di Stato di Napoli più green: rinascono i giardini storici', date: 'Ottobre 2024', url: 'https://www.ilmattino.it/napoli/cultura/archivio_di_stato_di_napoli_piu_green_rinascono_i_giardini_storici-8429774.html' },
  { source: 'Il Denaro', title: 'Recuperati i giardini storici dell’Archivio di Stato di Napoli', date: 'Ottobre 2024', url: 'https://www.ildenaro.it/recuperati-i-giardini-storici-dellarchivio-di-stato-di-napoli/' },
  { source: 'Il Denaro', title: 'Giardini del Molosiglio affidati per tre anni a GreenCare, la più grande adozione di verde pubblico a Napoli', date: '2023', url: 'https://www.ildenaro.it/giardini-del-molosiglio-affidati-per-tre-anni-a-greencare-e-la-piu-grande-adozione-di-verde-pubblico-a-napoli/' },
  { source: 'Il Mattino', title: 'Green Blue Days: l’acqua al centro della terza edizione', date: '2022', url: 'https://www.ilmattino.it/napoli/cronaca/napoli_green_blue_days_l_acqua_al_centro_della_3a_edizione-7661656.html' }, // verificare
];

// Pagina "Studio"
export const studio = {
  title: 'Lo studio',
  text: [
    'Batù nasce a Napoli nel 2018 dalla passione di Giovanni Masucci: una formazione naturalistica e una lunga esperienza nella gestione di aziende e cantieri in Italia e all’estero.',
    'Siamo una squadra di agronomi, architetti paesaggisti e giardinieri. Seguiamo ogni progetto dal disegno alla cura quotidiana, con l’attenzione necessaria a interpretare i desideri di chi ci chiama e a tradurli in un giardino che stia in piedi negli anni.',
    'Lavoriamo su giardini e parchi residenziali, giardini per strutture ricettive, giardini storici e terrazze. Abbiamo gli strumenti tecnici e i mezzi per garantire rapidità, qualità e precisione su cantieri grandi e piccoli.',
    'Abbiamo avviato la conversione di tutta l’attrezzatura dai motori a scoppio agli utensili a batteria, per ridurre rumore ed emissioni: un modo di lavorare nel rispetto dell’ambiente e delle persone.',
  ],
  services: [
    { title: 'Progettazione', text: 'Rilievo, analisi del suolo e dell’esposizione, disegno del giardino e scelta delle specie.' },
    { title: 'Realizzazione', text: 'Movimento terra, impianti di irrigazione, opere in pietra e legno, messa a dimora.' },
    { title: 'Manutenzione', text: 'Cura programmata di giardini, parchi e terrazze, potature, concimazioni, gestione stagionale.' },
  ],
};
