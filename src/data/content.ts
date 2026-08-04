// ============================================================================
// CONTEÚDO DO SITE — "17 Anos da Princesa"
// Centraliza todos os textos, datas e listas usadas nas seções do site.
// ============================================================================

export interface QuoteItem {
  text: string;
  reply?: string;
  date?: string;
}

export interface TabCategory {
  id: string;
  label: string;
  shortLabel: string;
  icon: string;
  items: QuoteItem[];
}

// ---- ABA 1: Frases dela -----------------------------------------------------
const fraseDelaItems: QuoteItem[] = [
  { text: '"Tu nn tens noção do quanto me fazes bem."', date: '17/05/2025 21:15' },
  { text: '"Aff que odio estar apaixonada 😭😭"', date: '16/05/2025 07:41' },
  { text: '"Eu sou 80% de fofura e 20% de doces"', date: '19/10/2025 15:20' },
  { text: '"Eu quero mtt provar aquele chocolate de dubai"', date: '10/04/2025 21:36' },
  { text: '"Eu literalmente chorei de felicidade pq queria mtt comer tangerinas"', date: '22/07/2025 19:50' },
  { text: '"Eu só consigo sair de casa com fones"', date: '27/04/2025 21:53' },
  { text: '"Amo chá, nunca conheci um rapaz que gostasse de chá"', date: '14/04/2025 19:36' },
  { text: '"Como que os homens conseguem ser tão nojentos a esse ponto"', date: '17/07/2025 00:20' },
  { text: '"Eu odeio edf, mas passei 5 horas dançando sem parar"', date: '04/05/2025 22:02' },
  { text: '"Com licença eu sou a alfa da relação"', date: '19/09/2025 08:11' },
  { text: '"Tipo toda princesa tem que ser assim"', date: '04/10/2025 14:33' },
  { text: '"Bebo agua.. as vezes"' },
];

// ---- ABA 2: Frases dele que ela elogiou ------------------------------------
const frasesEloElogiadasItems: QuoteItem[] = [
  { text: '"Eu te amo princesa"', reply: 'Ela: "Ue do nada? Eu tmb te amo"', date: '17/05/2025 21:33' },
  { text: '"Nenhuma palavra descreve a sua beleza"', reply: 'Ela: "Damm broo"', date: '06/08/2025 18:06' },
  { text: '"Você é simplesmente encantadora"', reply: 'Ela: "Ai nss 🥺"', date: '01/07/2025 07:56' },
  { text: '"Você é o poema mais bonito que já li"', reply: 'Ela: "Okey eu realmente fiquei sem palavras"', date: '19/05/2025 19:19' },
  { text: '"Quero beijar sua mão pra sarar"', reply: 'Ela: "Nn força amiga"', date: '07/06/2025 22:09' },
  { text: '"Vou te mimar muito"', reply: 'Ela: "AAAAAAA PARRAAAA"', date: '07/05/2025 22:11' },
  { text: '"CASA COMIGO"', reply: 'Ela: "É claro que eu caso ne meu amor"', date: '16/04/2025 21:41' },
  { text: '"Você é a minha Sunshine"', reply: 'Ela: "ANAOOO QUE ODIO VOU CHORAR"', date: '05/04/2025 21:47' },
  { text: 'Texto de aniversário dela', reply: 'Ela: "AIIII MINHA PRINCESINHA"', date: '19/07/2025 19:50' },
  { text: '"Você é uma princesa, e eu sou um canalha"', reply: 'Ela: "Oi?? Are y okey??"', date: '03/05/2025 22:48' },
  { text: '"Você é magnífica princesa"', reply: 'Ela: "QUE CARAMBA MEOO"', date: '22/04/2025 16:08' },
  { text: '"Você é AURA"', reply: 'Ela: "Ta sabendo da treta da liz macedo?"', date: '07/05/2025 22:27' },
  { text: '"Você é bue romântica no Instagram princesa"', reply: 'Ela: "Nn era eu nn, foi minha cachorra"', date: '31/03/2025 22:07' },
  { text: '"Você é o maior presente que a vida me deu"', reply: 'Ela: "🥺"', date: '09/06/2025 21:50' },
];

// ---- ABA 3: Gírias e códigos ------------------------------------------------
export interface SlangItem {
  word: string;
  date?: string;
}

export const slangItems: SlangItem[] = [
  { word: 'Princesa' },
  { word: 'Príncipe' },
  { word: 'Mwah' },
  { word: 'Baison' },
  { word: 'Kisses' },
  { word: 'Foguinho', date: '24/07/2025 19:08' },
  { word: 'Bro' },
  { word: 'Monyca?' },
  { word: 'Atao' },
  { word: 'Ta key' },
  { word: 'Meoo' },
  { word: 'Oxi' },
  { word: 'Bue' },
  { word: 'Socorro' },
  { word: 'Gira' },
  { word: 'Gatinho' },
  { word: 'Rizz' },
  { word: 'Slk' },
  { word: 'Fogo' },
  { word: 'Tfk' },
  { word: 'Tscase' },
  { word: 'Shybal' },
];

// ---- ABA 4: Sonhos e planos dela --------------------------------------------
const sonhosItems: QuoteItem[] = [
  { text: '"Quero ir no show do Stray Kids"', date: '23/07/2025 14:56' },
  { text: '"Quero provar o chocolate de dubai"', date: '10/04/2025 21:36' },
  { text: '"Quero morar na suíça"', date: '02/09/2025 22:24' },
  { text: '"Quero visitar a Itália"', date: '02/09/2025 22:26' },
  { text: '"Quero fazer uma casa com muitas portas e janelas pra ser bem iluminada"', date: '02/09/2025 21:12' },
  { text: '"Quero ter 2 filhos"', date: '16/03/2025 23:38' },
  { text: '"Quero um vestido de noiva longo"', date: '16/03/2025 23:40' },
  { text: '"Quero casar aos 25"', date: '25/08/2025 22:42' },
  { text: '"Quero ter uma casa com decoração rosa e de flores"', date: '02/09/2025 20:57' },
  { text: '"Quero pintar o cabelo de rosa algodão doce"', date: '26/09/2025 11:04' },
  { text: '"Quero comprar patas de urso"', date: '19/10/2025 15:25' },
];

// ---- ABA 5: Momentos de admiração -------------------------------------------
const elaSobreEle: QuoteItem[] = [
  { text: '"Você é o melhor homem que ja conheci serio"', date: '07/05/2025 22:11' },
  { text: '"Meu amor ta mtt lindinho serio"', date: '07/04/2025 06:34' },
  { text: '"Garoto vc é mtt fofinho meoo"', date: '03/05/2025 19:57' },
  { text: '"Ainda bem que posso falar que tenho um namorado inteligente"', date: '11/06/2025 17:56' },
  { text: '"Tu es definitivamente a única pessoa que eu mando audio"', date: '03/05/2025 15:42' },
  { text: '"Vc é extremamente educado comigo, mtt carinhoso comigo, me respeita"', date: '03/04/2025 18:56' },
  { text: '"Como eu pude ter tanta sorte serio? Que homem"', date: '05/06/2025 21:36' },
  { text: '"Tu nn tens noção do quanto me fazes bem"', date: '17/05/2025 21:15' },
  { text: '"Seu corpo é mtt irreal"', date: '03/07/2025 17:16' },
  { text: '"Amor pqp ce ta cada vez maior"', date: '15/04/2025 17:53' },
];

const eleSobreEla: QuoteItem[] = [
  { text: '"Você é a razão do meu sorriso e a motivação dos meus dias"', date: '17/03/2025 00:51' },
  { text: '"Você é linda por dentro e por fora"', date: '19/05/2025 11:51' },
  { text: '"Você merece muito mais"', date: '05/04/2025 23:24' },
  { text: '"Eu amo você, hoje, amanhã e sempre"', date: '09/08/2025 23:55' },
  { text: '"Você me curou"', date: '03/05/2025 23:05' },
  { text: '"Você trouxe alegria para minha vida"', date: '03/05/2025 23:07' },
  { text: '"Eu sou o homem certo para você"', date: '07/10/2025 22:21' },
  { text: '"Você é uma princesa"', date: 'constante' },
  { text: '"Eu me apaixonei no seu humor"', date: '31/12/2025 19:17' },
  { text: '"Você é a melhor parte do meu mundo"', date: '31/10/2025 06:36' },
];

export const admirationGroups = [
  { title: 'Ela sobre ele', items: elaSobreEle },
  { title: 'Ele sobre ela', items: eleSobreEla },
];

// ---- Estrutura final das 5 abas --------------------------------------------
export const tabCategories: TabCategory[] = [
  { id: 'frases-dela', label: 'Frases Dela', shortLabel: 'Frases Dela', icon: '💬', items: fraseDelaItems },
  { id: 'frases-elogiadas', label: 'Frases Que Ela Elogiou', shortLabel: 'Elogios', icon: '💌', items: frasesEloElogiadasItems },
  { id: 'girias', label: 'Nossas Gírias e Códigos', shortLabel: 'Gírias', icon: '✨', items: [] },
  { id: 'sonhos', label: 'Sonhos e Planos Dela', shortLabel: 'Sonhos', icon: '🌙', items: sonhosItems },
  { id: 'admiracao', label: 'Momentos de Admiração', shortLabel: 'Admiração', icon: '👑', items: [] },
];

// ============================================================================
// SEÇÃO 4 — 20 LANTERNAS / SURPRESAS
// ============================================================================
export interface LanternCard {
  id: number;
  icon: string; // referência usada pelo componente de ícones
  title: string;
  modalText: string;
  ref?: string;
}

export const lanternCards: LanternCard[] = [
  {
    id: 1,
    icon: 'mic',
    title: 'Lanternas dos Sonhos',
    modalText:
      'Os Stray Kids não são só um sonho — é a promessa de que o mundo pode ser tão mágico quanto você acredita. E quando esse dia chegar, vou lembrar que foi você, com os olhos brilhando de felicidade, que me ensinou a voar mais alto.',
    ref: '23/07/2025 14:56',
  },
  {
    id: 2,
    icon: 'bottle',
    title: 'Carta na Garrafa',
    modalText:
      'Não somos só duas pessoas numa conversa de WhatsApp. Somos madrugadas em claro, risadas silenciosas, planos de casamento e a certeza de que o amor existe mesmo a 7.000 km de distância.',
    ref: '16/03/2025 23:22',
  },
  {
    id: 3,
    icon: 'tower',
    title: 'A Torre dos Sonhos',
    modalText:
      'Lembra quando tu disseste que querias uma casa com muitas janelas e luz amarela? Vou construir uma torre pra ti, com varanda virada pro pôr do sol.',
    ref: '02/09/2025 21:12',
  },
  {
    id: 4,
    icon: 'headphones',
    title: 'Os Fones de Ouvido',
    modalText: 'Tu e os teus fones — uma dupla inseparável. É como se a música fosse o teu superpoder.',
    ref: '27/04/2025 21:53',
  },
  {
    id: 5,
    icon: 'chocolate',
    title: 'Chocolate de Dubai',
    modalText:
      'Um dia, vou atravessar oceanos só para te ver provar esse chocolate. E quando deres a primeira mordida, vou perceber que a doçura sempre esteve em ti.',
    ref: '10/04/2025 21:36',
  },
  {
    id: 6,
    icon: 'moon-laugh',
    title: 'O Teu Riso de Madrugada',
    modalText:
      "És tu, com as tuas gargalhadas silenciosas e os teus 'meoo' e 'socorro'. A única pessoa que me faz querer ficar acordado só para ouvir a tua voz.",
    ref: '13/07/2025 06:54',
  },
  {
    id: 7,
    icon: 'palette',
    title: 'As Cores da Nossa Casa',
    modalText: 'Verde menta, azul bebé, amarelo manteiga... disseste que gostavas de tons pastel para a nossa casa.',
    ref: '12/08/2025 12:50',
  },
  {
    id: 8,
    icon: 'hair',
    title: 'O Teu Cabelo',
    modalText: 'É impossível não reparar. No teu cabelo, em cada curva, cada fio que dança com o vento.',
    ref: '06/08/2025 17:31',
  },
  {
    id: 9,
    icon: 'book-heart',
    title: 'A Tua Biblioteca',
    modalText: 'Cada livro que lês, cada fanfic que me contas... é um pedaço do teu mundo que partilhas comigo.',
    ref: '07/10/2025 19:12',
  },
  {
    id: 10,
    icon: 'cake',
    title: 'O Bolo de Bolacha',
    modalText:
      'Prometi que quando a vida for difícil, vou trazer-te um bolo de bolacha. Porque às vezes, o que cura é partilhar algo que te faz sorrir.',
    ref: '01/05/2025 20:54',
  },
  {
    id: 11,
    icon: 'tear-book',
    title: 'O Teu Universo de Emoções',
    modalText: 'Ler uma fanfic não é só ler — é sentir. E tu sentes tudo com uma intensidade que eu admiro.',
    ref: '06/07/2025 20:53',
  },
  {
    id: 12,
    icon: 'recorder',
    title: 'O Teu Áudio de 10 Minutos',
    modalText: 'Quando me mandas um áudio de 10 minutos sobre a tua stora de português... eu ouço cada segundo.',
    ref: '11/10/2025 17:20',
  },
  {
    id: 13,
    icon: 'tangerine',
    title: 'O Teu Jeito de Amar as Coisas Simples',
    modalText: 'Choraste de felicidade porque a tua mãe comprou tangerinas. Um dia vou comprar um monte só para te ver sorrir.',
    ref: '22/07/2025 19:50',
  },
  {
    id: 14,
    icon: 'paint',
    title: 'Os Teus Cabelos Coloridos',
    modalText: 'Disseste que querias pintar o cabelo de rosa — e eu já imagino o sol a bater nos teus fios.',
    ref: '26/09/2025 11:03',
  },
  {
    id: 15,
    icon: 'boat',
    title: 'As Festas na Barca',
    modalText: 'Quando me falaste das festas na Barca, com as ruas cheias de gente... eu quis estar lá para te ver feliz.',
    ref: '25/07/2025 19:32',
  },
  {
    id: 16,
    icon: 'storm',
    title: 'O Teu Medo do Escuro',
    modalText:
      'Lembro-me de ti, com medo da trevoada, a acordar assustada. Mesmo com medo, tu continuas. E isso é coragem.',
    ref: '05/11/2025 00:06',
  },
  {
    id: 17,
    icon: 'star-headphone',
    title: 'O Teu Mundo de Fã',
    modalText:
      'O Stray Kids, o Ateez, o BTS, o Wave to Earth... cada grupo que me apresentaste. O melhor de um fandom é partilhá-lo com quem amas.',
    ref: '01/10/2025 14:41',
  },
  {
    id: 18,
    icon: 'house-map',
    title: 'Os Teus Planos Para o Futuro',
    modalText:
      'Queres morar na Suíça, visitar a Itália, ter uma casa cheia de luz e 2 filhos. E eu me vejo em cada um desses sonhos ao teu lado.',
    ref: '02/09/2025 22:24',
  },
  {
    id: 19,
    icon: 'speech',
    title: 'As Tuas Palavras',
    modalText:
      "Tu tens um jeito especial de falar — com 'meoo', com 'socorro'. A tua verdade, princesa, é a coisa mais bonita que já ouvi.",
  },
  {
    id: 20,
    icon: 'moon-letter',
    title: 'O Nosso Eu Te Amo de Madrugada',
    modalText:
      'Tu disseste que te apaixonaste pelas minhas palavras, não pela minha aparência. O amor não precisa de toque para ser real.',
    ref: '18/05/2025 09:34',
  },
];

// ============================================================================
// SEÇÃO 5 — BARBIE
// ============================================================================
export const barbieCards = [
  { title: '80% de fofura e 20% de doces', text: '"Eu sou 80% de fofura e 20% de doces" — e isso resume tudo o que faz de ti tão especial.' },
  { title: 'A alfa da relação', text: '"Com licença eu sou a alfa da relação" — e é claro que sim, princesa. O reino é teu.' },
  { title: 'Toda princesa tem que ser assim', text: '"Tipo toda princesa tem que ser assim" — glamorosa, forte e absolutamente inesquecível.' },
];

// ============================================================================
// SEÇÃO 6 — CARTA FINAL
// ============================================================================
export const finalLetterParagraphs: string[] = [
  "Querida princesa,",
  "Lembro-me do dia em que tudo começou. Tu, do outro lado do mundo, com os teus 'meoo' e 'socorro', a rir das minhas figurinhas sem sentido e a mandar-me áudios de 10 minutos sobre a tua stora de português. Eu, a tentar ser o príncipe que tu merecias — mesmo sem saber como. E de repente, as horas passavam, as madrugadas chegavam, e eu percebi que já não era uma conversa. Era uma história.",
  "Quando disseste que não te apaixonaste pelo que viste, mas pela forma como eu te tratava, percebi que tu eras diferente. Que não querias um amor de conto de fadas — querias um amor real. E foi aí que eu soube que não ia deixar-te escapar. Tu és feita de tangerinas que fazem chorar de felicidade, de fones de ouvido que são a tua armadura contra o mundo. Tu és a rapariga que sonha com shows do Stray Kids, com uma casa cheia de janelas e luz amarela, com 2 filhos e um vestido de noiva comprido. E eu quero estar em cada um desses sonhos — não como quem assiste, mas como quem caminha ao teu lado.",
  "Quando te sentiste sozinha, quis ser a tua companhia. Quando te assustaste com a trevoada, quis ser a tua luz. Porque é isso que tu mereces — não promessas vazias, mas gestos que mostram que, mesmo longe, o meu amor por ti não diminui. Ao contrário: cresce a cada áudio de madrugada, a cada vez que partilhas comigo os teus dias, mesmo aqueles em que o mundo parece pesar. Cresce quando me contas os teus sonhos e me deixas fazer parte deles.",
  "Um dia, princesa, vou estar aí. Vou rir com as tuas histórias sobre a tua irmã, vou comer o bolo de bolacha que tanto amas, vou ver o brilho nos teus olhos quando contares os teus sonhos. Até lá, o nosso 'foguinho' continua aceso — em cada mensagem, em cada vídeo, em cada 'eu te amo' que trocamos. Não importa quantos quilómetros nos separam. Importa que, quando fecho os olhos, tu estás sempre aqui, no meu coração, a iluminar os meus dias como só uma princesa consegue.",
  "Amo-te, hoje, amanhã e sempre.",
];
