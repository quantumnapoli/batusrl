// Contenuti del sito. Modificare qui e rilanciare `npm run build`.
// NOTA: le voci segnate con "verificare" derivano da fonti pubbliche (Villegiardini,
// Il Mattino, Il Denaro, pagina Bio del sito attuale) e vanno confrontate con il sito
// originale, che non era raggiungibile durante la costruzione.

export const site = {
  name: 'Margaret Scaramella',
  role: 'Garden Designer',
  cities: 'Napoli – Lecce',
  email: 'info@margaretscaramella.it', // verificare
  instagram: 'https://www.instagram.com/margaretscaramella/', // verificare
  phone: '', // opzionale
  url: 'https://www.margaretscaramella.it',
  description: 'Margaret Scaramella, giardiniera e garden designer tra Napoli e Lecce. Giardini, terrazze e paesaggi mediterranei progettati sulla conoscenza delle dinamiche ecologiche.',
};

// Statement (home). Ogni riga è un elemento: il reveal è riga per riga.
export const statement = [
  'Amo lavorare con le piante',
  'e con la terra, per creare',
  'ambienti <em>immaginari</em>,',
  'sempre coerenti con il contesto.',
];

export const projects = [
  {
    slug: 'giardino-sul-mare-patu',
    title: 'Affacciato sul mare',
    place: 'Patù, Salento',
    year: '2023',
    kind: 'Giardino privato',
    with: 'con Maurizio Usai',
    photo: 'Sergio De Riccardis',
    cover: 'patu-01',
    alt: 'Terrazze a muretti a secco che scendono verso il mare, Patù',
    text: [
      'Un giardino di circa cinquemila metri quadrati attorno a una villa e alla sua dépendance, a nord dell’insenatura di Marina di San Gregorio. La topografia del luogo ha suggerito una sequenza di terrazze, realizzate con terra di riporto e sostenute da muretti a secco in pietra locale: superfici piane, separate ma collegate, che scendono lentamente verso la casa.',
      'Le terrazze ospitano pergole disegnate su misura, zone di sosta e aree con vegetazioni diverse, così che la vista cambi continuamente. Richiamano il paesaggio agricolo scomparso, fatto di terrazzamenti dove il microclima particolarmente caldo permetteva la coltivazione delle primizie.',
    ],
    gallery: [
      { img: 'patu-02', ratio: '3-2', layout: 'full', alt: 'Vista d’insieme delle terrazze verso il mare' },
      { img: 'patu-03', ratio: '4-5', layout: 'left', alt: 'Pergola in legno su una terrazza' },
      { img: 'patu-04', ratio: '4-5', layout: 'right', alt: 'Muretto a secco e vegetazione mediterranea' },
      { img: 'patu-05', ratio: '4-3', layout: 'small', alt: 'Dettaglio di fioritura tra le pietre' },
      { img: 'patu-06', ratio: '3-2', layout: 'full', alt: 'Il giardino al tramonto' },
    ],
  },
  {
    slug: 'archivio-di-stato-napoli',
    title: 'I giardini dell’Archivio di Stato',
    place: 'Napoli',
    year: '2024',
    kind: 'Giardino storico',
    with: 'con Giovanni Masucci',
    photo: '',
    cover: 'archivio-01',
    alt: 'Chiostro e giardino storico del monastero dei Santi Severino e Sossio, Napoli',
    text: [
      'Il recupero dei giardini storici del complesso dei Santi Severino e Sossio, sede dell’Archivio di Stato di Napoli, nel centro antico della città. L’intervento segue la tradizione dell’ordine benedettino: torna l’orto dei semplici dove i monaci coltivavano le piante medicinali, torna l’agrumeto già presente in una mappa del 1850, tornano i giardini naturali.', // verificare
      'Un lavoro di cura lenta, condotto insieme a Giovanni Masucci, che restituisce alla città un giardino segreto rimasto per decenni fuori dallo sguardo.',
    ],
    gallery: [
      { img: 'archivio-02', ratio: '3-2', layout: 'full', alt: 'L’agrumeto ritrovato' },
      { img: 'archivio-03', ratio: '4-5', layout: 'left', alt: 'L’orto dei semplici' },
      { img: 'archivio-04', ratio: '4-5', layout: 'right', alt: 'Aiuole e percorsi tra i chiostri' },
      { img: 'archivio-05', ratio: '3-2', layout: 'small', alt: 'Dettaglio di erbe officinali' },
    ],
  },
  {
    slug: 'terrazza-napoli',
    title: 'Una terrazza sul golfo',
    place: 'Napoli',
    year: '2021',
    kind: 'Terrazza privata',
    with: '',
    photo: '',
    cover: 'terrazza-01',
    alt: 'Terrazza con vasi e piante mediterranee affacciata sul golfo di Napoli',
    text: [
      'Una terrazza esposta al sole e al vento, trattata come un piccolo paesaggio: vasi grandi, piante che resistono alla salsedine, fioriture scalari lungo l’anno. Solo concimi e rimedi di origine vegetale, irrigazione ridotta al minimo.', // testo indicativo, da sostituire con quello del sito
    ],
    gallery: [
      { img: 'terrazza-02', ratio: '4-3', layout: 'full', alt: 'La terrazza vista dall’interno' },
      { img: 'terrazza-03', ratio: '4-5', layout: 'small', alt: 'Dettaglio di vasi in terracotta' },
      { img: 'terrazza-04', ratio: '4-3', layout: 'full', alt: 'Fioriture estive' },
    ],
  },
  {
    slug: 'masseria-salento',
    title: 'Il giardino di una masseria',
    place: 'Salento',
    year: '2020',
    kind: 'Giardino privato',
    with: '',
    photo: '',
    cover: 'masseria-01',
    alt: 'Giardino di una masseria salentina con ulivi e pietra bianca',
    text: [
      'Tra ulivi e muri di pietra bianca, un giardino che accompagna la masseria senza sovrastarla: piante spontanee del luogo, ombre lunghe, poca acqua. Il progetto lavora sulle associazioni vegetali che la macchia mediterranea già suggerisce.', // testo indicativo, da sostituire con quello del sito
    ],
    gallery: [
      { img: 'masseria-02', ratio: '4-3', layout: 'full', alt: 'Ulivi e prato secco' },
      { img: 'masseria-03', ratio: '4-5', layout: 'left', alt: 'Muro di pietra e fioritura' },
      { img: 'masseria-04', ratio: '4-5', layout: 'right', alt: 'Sentiero tra la macchia' },
      { img: 'masseria-05', ratio: '3-2', layout: 'full', alt: 'La masseria al mattino' },
    ],
  },
];

export const hero = ['hero-1', 'hero-2', 'hero-3', 'hero-4'].map((img, i) => ({
  img, alt: ['Terrazze verso il mare, Patù', 'Giardino storico, Napoli', 'Fioriture mediterranee', 'Ulivi e pietra, Salento'][i],
}));

export const press = [
  { source: 'Villegiardini', title: 'Margaret Scaramella e Maurizio Usai: affacciato sul mare del Salento', date: 'Maggio 2023', url: 'https://www.villegiardini.it/margaret-scaramella-maurizio-usai-progetto-mare-salento/' },
  { source: 'Il Mattino', title: 'Archivio di Stato di Napoli più green: rinascono i giardini storici', date: 'Ottobre 2024', url: 'https://www.ilmattino.it/napoli/cultura/archivio_di_stato_di_napoli_piu_green_rinascono_i_giardini_storici-8429774.html' },
  { source: 'Il Denaro', title: 'Recuperati i giardini storici dell’Archivio di Stato di Napoli', date: 'Ottobre 2024', url: 'https://www.ildenaro.it/recuperati-i-giardini-storici-dellarchivio-di-stato-di-napoli/' },
  { source: 'Gardenia', title: 'In viaggio con Gardenia: i giardini di Napoli e Ischia', date: '2024', url: 'https://gardenia.cairoeditore.it/viaggi/viaggio-giardini-storici-napoli-ischia/' }, // verificare data
];

export const bio = [
  'Giardiniera e landscape designer, amo lavorare con le piante e con la terra per creare ambienti immaginari e fantastici, sempre coerenti con il contesto, sulla base di una solida conoscenza delle dinamiche ecologiche che regolano la vita nei diversi ambienti.',
  'Il mio sguardo sul paesaggio si è formato negli studi universitari: una laurea in Scienze Naturali con una tesi in fitosociologia, la scienza che studia come le piante si associano spontaneamente per creare la vegetazione. Dopo diciassette anni nella produzione televisiva documentaristica, nel 2012 ho ottenuto il diploma di Giardiniere professionista, costruttore e manutentore di parchi e giardini, alla Scuola Agraria del Parco di Monza.',
  'La formazione è proseguita con i corsi dell’associazione Maestri di Giardino, con il confronto con architetti paesaggisti e vivaisti specializzati e, soprattutto, con la collaborazione e l’amicizia dell’architetto paesaggista Maurizio Usai.',
  'Vivo tra Napoli e il Salento, dove curo giardini privati e terrazze usando solo concimi e rimedi di origine vegetale, riducendo il consumo di acqua e di carburante.',
];
