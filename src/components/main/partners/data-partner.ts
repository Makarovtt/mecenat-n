import { StaticImageData } from "next/image";

import imgSberbank from "public/images/main/partners/sberbank.jpg";
import imgMolniya from "public/images/main/partners/molniya.jpg";
import imgRost from "public/images/main/partners/rost.jpg";
import imgVolgaDelta from "public/images/main/partners/volga-delta.jpg";

interface DATA_PARTNERS {
  id: number;
  title: string;
  alt: string;
  image: string | StaticImageData;
}

export const DATA_PARTNERS: DATA_PARTNERS[] = [
  {
    id: 1,
    title: "Сбербанк",
    alt: "Сбербанк — партнер Меценат-Н",
    image: imgSberbank,
  },
  {
    id: 2,
    title: "Молния",
    alt: "Типография «Молния» — партнер Меценат-Н",
    image: imgMolniya,
  },
  {
    id: 3,
    title: "Волга-Дельта",
    alt: "«Волга-Дельта» — партнер Меценат-Н",
    image: imgVolgaDelta,
  },
  {
    id: 4,
    title: "Рост",
    alt: "ООО СЗ «Рост» — партнер Меценат-Н",
    image: imgRost,
  },
];
