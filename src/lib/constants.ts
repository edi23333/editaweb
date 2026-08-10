export const SITE = {
  name: "Slastičarna Gala",
  owner: "Nijaz Raščić",
  tagline:
    "Svježi kolači, odlična kafa i ugodna atmosfera u srcu Sarajeva.",
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

 
  photoCredit: "Fotografije: Google Maps (javno dostupne)",
} as const;

/** Real publicly available photos from Google Maps listing for Slastičarna Gala */
const GALA_PHOTOS = {
  exterior:
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnQg5bJJa0NXBxVvN3xKuNgFT2Ta1fOcmTMpjsgoatTq02jX4vAghREC1g9YneUj0m5RJ3zyVDOVy7FktM1RkDbzggPGpUaG1G41hhLZqO0FJbWmrN5dPPPjBQc2cBE51v1jzPb=w1200-h900-k-no",
  interior1:
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmrba0M1dMK4jqAWL-66GCVIIjcNNMcsy3VfOiVV-eRreCHeJanJb6l4scjJXuUjTqiwIZMufO_1XD4FzogCKtPSv9BDfFIGl5Th0sgSthn62gALy2Dr3PqidezLwmNZU14vpf1HIt3t6My=w1200-h900-k-no",
  dessert1:
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlBYk41uEZaKoyMXSydyQSdosF5E8jKXQnYgjG9DQJbQFAO5sXI9V4_piqSH5JrkUvDP3ciYcuC7c3OsxtzpfB6d25i0_G5PTDHcpHZ5SW0Xd2Dda-WGBZrY8gexfs_N3QuJ8sbGw=w1200-h900-k-no",
  dessert2:
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnxKpHEwkQygEhRpkAr3sK8YkKKINItfhZYAe-O6sIYIY4VcfEhX4-Cz0pxVyCUVryKD5cBCdRST17Hi8vI2KDQDYgyNt4wuMjZT7q8dsV19OOtR6XGrll-09xlbViMPqLAb3iWxg=w1200-h900-k-no",
  dessert3:
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn6rRLzRbxvF-B7LsyE6yjFD_bKlMYyFvM-DeuAaFiH3b_HQM83yaSbYErcv8EyXlNpgMv2gp60AJp9CONwdrJ8ybtf5k5rrawE-q4PxsPsp5ngaLKbOFFq2NuU2GtkPtA4Mah2=w1200-h900-k-no",
  interior2:
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkQvw1WEossdE9qirPchP5Aem2BNEc-jr4Ixw-7QnbC5qkjbcOvVDuezyY5qXE4ZmxndyVtmu3jQATa-O59WSP3PVhaKx0jv2u9ACAzbGv950XDZVvl7vCeNaFL8BpZ_CQ6AxGovg=w1200-h900-k-no",
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
      { name: "Ćaj", price: "2,50 KM" },
      { name: "Topla čokolada", price: "3,50 KM" },
      { name: "Borovnica", price: "3,50 KM" },
      { name: "Kuća prirode sokovi", price: "3,50 KM" },
      { name: "Gazirani sokovi", price: "4,00 KM" },
      { name: "Senzacija", price: "2,00 KM" },
      { name: "Mineralna voda", price: "2,50KM" },
      { name: "Flaširana voda", price: "2,00KM" },
    ] satisfies MenuItem[],
    image: GALA_PHOTOS.interior2,
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
    image: GALA_PHOTOS.dessert1,
    description:
      "Svježe pripremljeni kolači i deserti, pravljeni svakodnevno u našoj slastičarnoj.",
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
    image: GALA_PHOTOS.dessert2,
    description:
      "Cijele torte za proslave, rođendane i posebne prilike — naručite unaprijed.",
  },
] as const;

export const WHY_VISIT = [
  {
    icon: "coffee",
    title: "Vrhunska kafa",
    description:
      "Kvalitetno pripremljena kafa — od brzog espressa do opuštenog latta.",
  },
  {
    icon: "cake",
    title: "Svježi kolači",
    description:
      "Domaći kolači i deserti pečeni svježe tokom cijelog dana.",
  },
  {
    icon: "leaf",
    title: "Ugodna atmosfera",
    description:
      "Topao i opuštajući prostor — idealan za duže zadržavanje.",
  },
  {
    icon: "heart",
    title: "Ljubazna usluga",
    description:
      "Gostoljubivo osoblje koje svakog gosta dočeka s osmijehom.",
  },
  {
    icon: "map-pin",
    title: "Lako dostupno",
    description:
      "Pogodna lokacija u ulici Džemala Bijedića, s vanjskim sjedenjem.",
  },
] as const;

export const REVIEWS = [
  {
    text: "Odlično mjesto za kafu i kolač. Atmosfera je opuštena, a osoblje uvijek ljubazno.",
    author: "Primjer recenzije",
    note: "Inspirisano utiscima gostiju",
  },
  {
    text: "Jedno od naših omiljenih mjesta u Sarajevu. Divni deserti, pristupačne cijene i lijepa terasa.",
    author: "Primjer recenzije",
    note: "Inspirisano utiscima gostiju",
  },
  {
    text: "Savršeno za mirnu jutarnju kafu ili poslijepodnevnu poslasticu. Domaći kolači su izvrsni.",
    author: "Primjer recenzije",
    note: "Inspirisano utiscima gostiju",
  },
] as const;

export const GALLERY_IMAGES = [
  {
    src: GALA_PHOTOS.exterior,
    alt: "Spoljašnjost Slastičarne Gala u Sarajevu",
    aspect: "tall",
  },
  {
    src: GALA_PHOTOS.dessert2,
    alt: "Ponuda torti i kolača u Slastičarni Gala",
    aspect: "wide",
  },
  {
    src: GALA_PHOTOS.interior1,
    alt: "Enterijer Slastičarne Gala",
    aspect: "square",
  },
  {
    src: GALA_PHOTOS.dessert1,
    alt: "Deserti u Slastičarni Gala",
    aspect: "wide",
  },
  {
    src: GALA_PHOTOS.interior2,
    alt: "Prostor za sjedenje u Slastičarni Gala",
    aspect: "tall",
  },
  {
    src: GALA_PHOTOS.dessert3,
    alt: "Kolači i poslastice u Slastičarni Gala",
    aspect: "square",
  },
  {
    src: GALA_PHOTOS.dessert2,
    alt: "Torte u Slastičarni Gala",
    aspect: "wide",
  },
  {
    src: GALA_PHOTOS.exterior,
    alt: "Slastičarna Gala — pogled s ulice",
    aspect: "tall",
  },
] as const;

export const HERO_IMAGE = GALA_PHOTOS.exterior;

export const COUNTERS = [
  { value: 350, suffix: "+", label: "Recenzije gostiju" },
  { value: 4.5, suffix: "", label: "Prosječna ocjena", decimals: 1 },
  { value: 15, suffix: "+", label: "Sati otvoreno dnevno" },
  { value: 3, suffix: "", label: "Kategorije menija" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
] as const;

export const SECTIONS = {
  about: {
    eyebrow: "O nama",
    title: "Omiljeno mjesto za kafu i kolače",
    description:
      "Slastičarna Gala je omiljena poslastičarnica u Sarajevu gdje gosti dolaze po kafi, domaćim tortama, kolačima i opuštajućoj atmosferi.",
  },
  menu: {
    eyebrow: "Naš meni",
    title: "Prirodni okusi, jednostavno i ukusno",
    description:
      "Od jutarnjeg espressa do poslijepodnevnog kolača — izbor kafe, deserta i cijelih torti za vaš tempo.",
    menuDisclaimer:
      "Cijene su informativne i mogu biti podložne promjenama.",
  },
  gallery: {
    eyebrow: "Galerija",
    title: "Trenuci u Gali",
    description:
      "Pogled na atmosferu, kafu i kolače zbog kojih nam se gosti vraćaju.",
  },
  whyVisit: {
    eyebrow: "Zašto nas posjetiti",
    title: "Zašto gosti vole Galu",
    description:
      "Sve šta očekujete od lokalne slastičarne .",
  },
  reviews: {
    eyebrow: "Recenzije",
    title: "Šta kažu gosti",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Posjetite nas",
    description:
      "Otvoreni smo svaki dan i rado vas dočekujemo — bilo za brzu kafu ili duže zadržavanje.",
    address: "Adresa",
    phone: "Telefon",
    hours: "Radno vrijeme",
    everyDay: "Svaki dan",
  },
} as const;
