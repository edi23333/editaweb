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

export type MenuSubcategory = {
  title: string;
  items: readonly MenuItem[];
};

export type MenuCategory = {
  id: string;
  title: string;
  image: string;
  items: readonly MenuItem[];
  subcategories?: readonly MenuSubcategory[];
};

export const MENU_CATEGORIES: readonly MenuCategory[] = [
  {
    id: "topli-napici",
    title: "Topli napitci",
    image: MEDIA.kafa1,
    items: [
      { name: "Espresso", price: "2,50 KM" },
      { name: "Macchiato", price: "3,00 KM" },
      { name: "Cappuccino", price: "3,50 KM" },
      { name: "Latte macchiato", price: "4,00 KM" },
      { name: "Dupli espresso", price: "5,00 KM" },
      { name: "Espresso sa šlagom", price: "3,00 KM" },
      { name: "Ness", price: "3,50 KM" },
      { name: "Topla čokolada", price: "4,50 KM" },
      { name: "Bosanska kafa", price: "3,00 KM" },
      { name: "Čaj", price: "2,50 KM" },
      { name: "Salep", price: "3,00 KM" },
    ],
  },
  {
    id: "torte",
    title: "Torte",
    image: MEDIA.tortanova,
    items: [
      { name: "Čokoladna torta", price: "50 KM" },
      { name: "Višnja torta", price: "50 KM" },
      { name: "Orah torta", price: "50 KM" },
      { name: "Švarcvald torta", price: "50 KM" },
      { name: "Kinder Pingvin torta", price: "60 KM" },
      { name: "Nutella torta", price: "60 KM" },
      { name: "Sacher torta", price: "70 KM" },
      { name: "Havana torta", price: "80 KM" },
      { name: "Medena torta", price: "80 KM" },
      { name: "Voćna torta", price: "60 KM" },
      { name: "Karamela torta", price: "60 KM" },
      { name: "Kokos torta", price: "60 KM" },
    ],
  },
  {
    id: "kolaci",
    title: "Kolači",
    image: MEDIA.gala8,
    items: [
      { name: "Nutella kocka", price: "4,00 KM" },
      { name: "Voćna kocka", price: "4,00 KM" },
      { name: "Kinder šnita", price: "4,00 KM" },
      { name: "Kinder nugat šnita", price: "4,00 KM" },
      { name: "Borovnica šnita", price: "4,00 KM" },
      { name: "Bombica", price: "4,00 KM" },
      { name: "Banana šnita", price: "4,00 KM" },
      { name: "Bueno", price: "4,00 KM" },
      { name: "Rafaelo", price: "4,00 KM" },
      { name: "Šampita", price: "4,00 KM" },
      { name: "Trileće", price: "4,00 KM" },
      { name: "Tufahija", price: "5,00 KM" },
      { name: "Hurmašica", price: "3,00 KM" },
      { name: "Kadaif", price: "4,00 KM" },
      { name: "Karamela", price: "4,00 KM" },
      { name: "Gala šnita", price: "4,00 KM" },
      { name: "Čoko višnja", price: "4,00 KM" },
      { name: "Orah šnita", price: "4,00 KM" },
      { name: "Kokos šnita", price: "4,00 KM" },
    ],
  },
  {
    id: "sokovi",
    title: "Sokovi",
    image: MEDIA.cafa,
    items: [],
    subcategories: [
      {
        title: "Negazirana pića",
        items: [
          { name: "Cedevita", price: "2,50 KM" },
          { name: "Domaća borovnica", price: "3,50 KM" },
          { name: "Gusti sokovi", price: "3,50 KM" },
          { name: "Ledeni čaj", price: "3,00 KM" },
        ],
      },
      {
        title: "Gazirana pića",
        items: [
          { name: "Coca Cola", price: "4,00 KM" },
          { name: "Coca Cola Zero", price: "4,00 KM" },
          { name: "Kokta", price: "4,00 KM" },
          { name: "Fanta", price: "4,00 KM" },
          { name: "Schweppes", price: "4,00 KM" },
          { name: "Orangina", price: "4,00 KM" },
          { name: "Kisela", price: "2,50 KM" },
          { name: "Senzacija", price: "2,50 KM" },
        ],
      },
      {
        title: "Cijeđeni sokovi",
        items: [
          { name: "Cijeđena narandža", price: "4,50 KM" },
          { name: "Limunada", price: "3,00 KM" },
          { name: "Cijeđeni mix", price: "6,00 KM" },
        ],
      },
      {
        title: "Voda",
        items: [
          { name: "Flaširana voda", price: "2,50 KM" },
          { name: "Voda-limun", price: "3,00 KM" },
        ],
      },
    ],
  },
];

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