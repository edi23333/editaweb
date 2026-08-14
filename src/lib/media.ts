/** Encode public asset paths for filenames with spaces or special characters */
export function assetPath(folder: "images" | "video", filename: string) {
  return `/${folder}/${encodeURIComponent(filename)}`;
}

export const HERO_VIDEO = assetPath(
  "video",
  "aaa.mp4",
);

export type DessertVideo = {
  src: string;
  label: string;
  featured?: boolean;
};

export const DESSERT_VIDEOS: readonly DessertVideo[] = [
  {
    src: assetPath("video", "cake1.mp4"),
    label: "Priprema torte u Slastičarni Gala",
    featured: true,
  },
  {
    src: assetPath("video", "cake2.mp4"),
    label: "Dekoracija i završni detalji deserta",
  },
  {
    src: assetPath("video", "cake3.mp4"),
    label: "Serviranje svježeg kolača",
  },
  {
    src: assetPath("video", "cake4.mp4"),
    label: "Ručna izrada poslastica",
  },
  {
    src: assetPath("video", "cake5.mp4"),
    label: "Torte i kolači iz naše vitrine",
  },
] as const;

export const LOGO = assetPath("images", "gala_trans-removebg-preview.png");

/** Used for OpenGraph, schema.org and About section */
export const HERO_IMAGE = assetPath("images", "header1.jpg");

export const MEDIA = {
  kafa: assetPath("images", "gala kafa.jpg"),
  kafa1: assetPath("images", "gala kafa1.jpg"),
  kafa2: assetPath("images", "gala13.jpg"),
  barista: assetPath(
    "images",
    "kapucino.jpg",
  ),
  gala8: assetPath("images", "gala8.jpg"),
  tortanova: assetPath("images", "tortanova.jpg"), // <-- ADDED HERE TO FIX THE MISSING IMAGE ERROR
  torta1: assetPath("images", "torta1.jpg"),
  torta2: assetPath("images", "gala3.jpg"),
  torta3: assetPath("images", "torta.jpg"),
  torta4: assetPath("images", "gala12.jpg"),
  torta5: assetPath("images", "gaal4.jpg"),
  torta6: assetPath("images", "gača7.jpg"),
  torta7: assetPath("images", "gala 10.jpg"),
  torta8: assetPath("images", "gala4.jpg"),
  torta9: assetPath("images", "gala11.jpg"),
  ambijent1: assetPath("images", "gala2.jpg"),
  ambijent2: assetPath(
    "images",
    "ambijent.jpg",
  ),
  ambijent3: assetPath("images", "gala11.jpg"),
  ambijent4: assetPath("images", "ambijernt.jpg"),
} as const;

export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryCategory = {
  title: string;
  images: readonly GalleryImage[];
};

export const GALLERY_CATEGORIES: readonly GalleryCategory[] = [
  {
    title: "Kafa",
    images: [
      {
        src: MEDIA.kafa,
        alt: "Barista u Slastičarni Gala priprema latte",
      },
      {
        src: MEDIA.kafa1,
        alt: "Espresso u Slastičarni Gala s brendiranom kockicom šećera",
      },
      {
        src: MEDIA.kafa2,
        alt: "Espresso u brendiranoj šalici Slastičarne Gala",
      },
      {
        src: MEDIA.barista,
        alt: "Barista priprema kafu u Slastičarni Gala",
      },
    ],
  },
  {
    title: "Torte i kolači",
    images: [
      {
        src: MEDIA.torta1,
        alt: "Rođendanska torta s Kinder čokoladama u Slastičarni Gala",
      },
      {
        src: MEDIA.torta2,
        alt: "Torta s natpisom Bajram Šerif Mubarek Olsun",
      },
      {
        src: MEDIA.torta3,
        alt: "Kriška čokoladne torte u Slastičarni Gala",
      },
      {
        src: MEDIA.torta4,
        alt: "Kriška slojevite torte s kremom u Slastičarni Gala",
      },
      {
        src: MEDIA.torta5,
        alt: "Kriške čokoladne torte s bananom u Slastičarni Gala",
      },
      {
        src: MEDIA.torta6,
        alt: "Kriška slojevite torte s pistacijom u Slastičarni Gala",
      },
      {
        src: MEDIA.torta7,
        alt: "Čokoladni desert s voćnim punjenjem u Slastičarni Gala",
      },
      {
        src: MEDIA.torta8,
        alt: "Rođendanska torta u vitrini Slastičarne Gala",
      },
    ],
  },
  {
    title: "Ambijent",
    images: [
      {
        src: MEDIA.ambijent1,
        alt: "Vanjska terasa Slastičarne Gala s kolačem i sokom",
      },
      {
        src: MEDIA.ambijent2,
        alt: "Enterijer Slastičarne Gala — bar i radni prostor",
      },
      {
        src: MEDIA.ambijent3,
        alt: "Večernji ambijent u Slastičarni Gala s kafom i kolačem",
      },
      {
        src: MEDIA.ambijent4,
        alt: "Ugodan ambijent u Slastičarni Gala",
      },
    ],
  },
] as const;

/** Flat list for lightbox navigation */
export const GALLERY_IMAGES: readonly GalleryImage[] =
  GALLERY_CATEGORIES.flatMap((category) => category.images);