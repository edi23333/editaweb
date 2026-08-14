import { MEDIA } from "@/lib/media";

export const SITE = {
  name: "Slastičarna Gala",
  owner: "Nijaz Raščić",
  tagline:
    "Spoj vrhunske kafe, svježih kolača i ugodnog ambijenta u Sarajevu.",
  description:
    "Slastičarna Gala — omiljena lokalna slastičarna u Sarajevu. Uživajte u kvalitetnoj kafi, domaćim tortama, kolačima i opuštajućoj atmosferi",
  url: "https://slasticarna-gala.ba",
  phone: "+387 33 718 600",
  phoneHref: "tel:+38733718600",
  address: {
    street: "Džemala Bijedića 48",
    city: "Sarajevo",
    country: "Bosna i Hercegovina",
    full: "Džemala Bijedića 48, Sarajevo, Bosna i Hercegovina",
  },
  hours: "Svaki dan · 07:00 – 22:30",
  wifiPassword: "gala2024",
  rating: 4.5,
  reviewCount: 350,
  priceRange: "1–5 KM",
  coordinates: {
    lat: 43.8513201,
    lng: 18.3725695,
  },
} as const;

export const NAV_LINKS = [
  { label: "Početna", href: "#home" },
  { label: "O nama", href: "#about" },
  { label: "Meni", href: "#menu" },
  { label: "Galerija", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
] as const;

export const UI = {
  reserve: "Rezervacija",
  viewMenu: "Pogledajte meni",
  findUs: "Pronađite nas",
  skipLink: "Preskoči na glavni sadržaj",
  backToTop: "Natrag na vrh",
  openMenu: "Otvori meni",
  closeMenu: "Zatvori meni",
  mainNav: "Glavna navigacija",
  callToReserve: "Pozovite za rezervaciju",
  openInMaps: "Otvori u Mapama",
  visitUs: "Posjetite nas",
  quickLinks: "Brzi linkovi",
  allRights: "Sva prava zadržana.",
  menuDisclaimer: "Cijene su informativne i mogu biti podložne promjenama.",
} as const;

export type MenuItem = {
  name: string;
  price: string;
};

export const MENU_CATEGORIES = [
  {
    title: "Napitci",
    items: [
      { name: "Espresso", price: "2,50 KM" },
      { name: "Cappuccino", price: "3,50 KM" },
      { name: "Latte", price: "3,00 KM" },
      { name: "Ledeni Latte", price: "3,00 KM" },
      { name: "Bosanska kafa", price: "3,00 KM" },
      { name: "Čaj", price: "2,50 KM" },
      { name: "Topla čokolada", price: "3,50 KM" },
      { name: "Borovnica sok", price: "3,50 KM" },
      { name: "Kuća prirode sokovi", price: "3,50 KM" },
      { name: "Gazirani sokovi", price: "4,00 KM" },
      { name: "Senzacija", price: "2,00 KM" },
      { name: "Mineralna voda", price: "2,50KM" },
      { name: "Flaširana voda", price: "2,00KM" },
    ] satisfies MenuItem[],
    image: MEDIA.kafa1,
    description:
      "Pažljivo pripremljena kafa — od brzog espressa do tradicionalne bosanske kafe.",
  },
  {
    title: "Deserti",
    items: [
      { name: "Voćna kocka", price: "4 KM" },
      { name: "Nutella kocka", price: "4 KM" },
      { name: "Orah kolač", price: "4 KM" },
      { name: "Trileće", price: "4 KM" },
      { name: "Šampita", price: "4 KM" },
      { name: "Nugat kolač", price: "4 KM" },
      { name: "Pistacija kolač", price: "5 KM" },
      { name: "Kadaif", price: "4 KM" },
      { name: "Hurmašica", price: "3 KM" },
      { name: "Tufahija", price: "4 KM" },
      { name: "Bombica", price: "4 KM" },
      { name: "Višnja kolač", price: "4 KM" },
      { name: "Kinder Pingvin kolač", price: "4 KM" },
    ] satisfies MenuItem[],
    image: MEDIA.gala8,
    description:
      "Kolači i deserti — pravljeni svakodnevno u našoj slastičarnoj.",
  },
  {
    title: "Cijele torte",
    items: [
      { name: "Orah torta", price: "50 KM" },
      { name: "Nutella torta", price: "60 KM" },
      { name: "Havana torta", price: "50 KM" },
      { name: "Čokoladna torta", price: "50 KM" },
      { name: "Kinder Pingvin torta", price: "50 KM" },
      { name: "Torta za 30 osoba", price: "80 KM" },
    ] satisfies MenuItem[],
    image: MEDIA.tortanova,
    description:
      "Cijele torte za proslave, rođendane i posebne prilike — naručite unaprijed.",
  },
] as const;

export const WHY_VISIT = [
  {
    icon: "coffee",
    title: "Vrhunska kafa",
    description: "Kvalitetno pripremljena kafa.",
  },
  {
    icon: "cake",
    title: "Svježi kolači",
    description: "Domaći kolači i deserti pečeni svježe tokom cijelog dana.",
  },
  {
    icon: "leaf",
    title: "Ugodna atmosfera",
    description: "Topao i opuštajući prostor.",
  },
  {
    icon: "heart",
    title: "Ljubazna usluga",
    description: "Gostoljubivo osoblje koje svakog gosta dočeka s osmijehom.",
  },
  {
    icon: "map-pin",
    title: "Lako dostupno",
    description: "Pogodna lokacija u ulici Džemala Bijedića.",
  },
] as const;

export const REVIEWS = [
  {
    text: "Odlično mjesto za kafu i kolač. Atmosfera je opuštena, a osoblje uvijek ljubazno.",
    author: "Primjer recenzije",
    note: "Inspirisano utiscima gostiju",
  },
  {
    text: "Jedno od naših omiljenih mjesta u Sarajevu. Divni deserti, pristupačne cijene i prelijepa bašta.",
    author: "Primjer recenzije",
    note: "Inspirisano utiscima gostiju",
  },
  {
    text: "Savršeno za mirnu jutarnju kafu ili poslijepodnevnu poslasticu. Domaći kolači su izvrsni.",
    author: "Primjer recenzije",
    note: "Inspirisano utiscima gostiju",
  },
] as const;

export const COUNTERS = [
  { value: 350, suffix: "+", label: "Recenzije gostiju" },
  { value: 4.5, suffix: "", label: "Prosječna ocjena", decimals: 1 },
  { value: 15, suffix: "+", label: "Sati otvoreno dnevno" },
  { value: 3, suffix: "", label: "Kategorije menija" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/caffegala/",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/CaffeSlasticarnaGala/",
    icon: "facebook",
  },
] as const;

export const SECTIONS = {
  about: {
    eyebrow: "O nama",
    title: "Omiljeno mjesto za kafu i kolače",
  },
  menu: {
    eyebrow: "Naš meni",
    title: "Jednostavno i ukusno",
    description:
      "Izbor kafe, deserta i cijelih torti.",
    menuDisclaimer:
      "Cijene su informativne i mogu biti podložne promjenama.",
  },
  gallery: {
    eyebrow: "Galerija",
    title: "Trenuci u Gali",
    description:
      "Atmosfera i detalji zbog kojih nam se gosti rado vraćaju.",
  },
  dessertVideos: {
    eyebrow: "Poslastičarska radnja",
    title: "Pripremljeni s pažnjom",
    description:
      "Pogledajte kako naši kolači nastaju i serviraju se.",
  },
  whyVisit: {
    eyebrow: "Zašto nas posjetiti",
    title: "Zašto gosti vole Galu",
    description:
      "Sve šta očekujete od nas.",
  },
  reviews: {
    eyebrow: "Recenzije",
    title: "Šta kažu gosti",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Posjetite nas",
    description:
      "Otvoreni smo svaki dan i rado vas dočekujemo.",
    address: "Adresa",
    phone: "Telefon",
    hours: "Radno vrijeme",
    everyDay: "Svaki dan",
  },
} as const;