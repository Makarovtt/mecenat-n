import { StaticImageData } from "next/image";

export const DATA_MAIN_INFO = {
  title:
    "Благотворительный фонд социально-экологического направления «Меценат-Н»",
  phone: "+7 (961) 816 70-92",
};

import BANNER_1 from "public/images/banner/banner-vozrojdenie.jpg";
import BANNER_2 from "public/images/banner/banner_woodwish.jpg";
import BANNER_3 from "public/images/banner/banner_greening.jpg";
import BANNER_4 from "public/images/banner/banner_helthfood.jpg";
import BANNER_5 from "public/images/banner/banner_international.jpg";
import BANNER_6 from "public/images/banner/banner_eco.jpg";

interface Submenu {
  id: number | null;
  title: string;
  href: string;
  image: string | StaticImport;
}

interface DataMenu {
  id: number;
  title: string;
  href: string;
  submenu: Submenu[];
}

export const DATA_MENU: DataMenu[] = [
  {
    id: 1,
    title: "О фонде",
    href: "/",
    submenu: [
      {
        id: 11,
        title: "Почему «Меценат-Н»",
        href: "/#why",
        image: "",
      },
      {
        id: 12,
        title: "Документы",
        href: "/documents",
        image: "",
      },
      {
        id: 13,
        title: "Новости",
        href: "/news",
        image: "",
      },
    ],
  },
  {
    id: 2,
    title: "Благотворительные программы",
    href: "#",
    submenu: [
      {
        id: 21,
        title: "Возрождение Дельты",
        href: "/vozrojdenie",
        image: BANNER_1,
      },
      {
        id: 22,
        title: "Дерево желаний",
        href: "/wood-wish",
        image: BANNER_2,
      },
      {
        id: 23,
        title: "Озеленение",
        href: "/greening",
        image: BANNER_3,
      },
      {
        id: 24,
        title: "Здоровое питание",
        href: "/health-food",
        image: BANNER_4,
      },
      {
        id: 25,
        title: "Международная",
        href: "/international",
        image: BANNER_5,
      },
      {
        id: 26,
        title: "ЭКО Переработка",
        href: "/eco",
        image: BANNER_6,
      },
    ],
  },
  {
    id: 3,
    title: "Волонтеры",
    href: "/volonters",
    submenu: [
      {
        id: null,
        title: "",
        href: "",
        image: "",
      },
    ],
  },
  {
    id: 4,
    title: "Партнеры и друзья фонда",
    href: "/partners",
    submenu: [
      {
        id: null,
        title: "",
        href: "",
        image: "",
      },
    ],
  },
  {
    id: 5,
    title: "Отчеты",
    href: "/reports",
    submenu: [
      {
        id: null,
        title: "",
        href: "",
        image: "",
      },
    ],
  },
  {
    id: 6,
    title: "Новости",
    href: "/news",
    submenu: [
      {
        id: null,
        title: "",
        href: "",
        image: "",
      },
    ],
  },
  {
    id: 7,
    title: "Контакты",
    href: "/contacts",
    submenu: [
      {
        id: null,
        title: "",
        href: "",
        image: "",
      },
    ],
  },
];

interface FooterSubMenu {
  id: number | null;
  title: string;
  href: string;
}

interface FooterMenu {
  id: number;
  title: string;
  href: string;
  submenu: FooterSubMenu[];
}
export const FOOTER_MENU: FooterMenu[] = [
  {
    id: 1,
    title: "Документы",
    href: "#",
    submenu: [
      {
        id: 11,
        title: "Публичный договор оферты",
        href: "/contract-oferta",
      },
      {
        id: 12,
        title: "Уставные документы",
        href: "/registration",
      },
    ],
  },
  {
    id: 2,
    title: "Полезная информация",
    href: "#",
    submenu: [
      {
        id: 21,
        title: "Часто задаваемые вопросы",
        href: "#",
      },
      {
        id: 22,
        title: "Обратная связь",
        href: "#",
      },
      {
        id: 23,
        title: "Политика обработки персональных данных",
        href: "/personal-data",
      },
    ],
  },
];

export const CONTACTS = {
  address: "414000, г. Астрахань, ул. Дантона, строение 3/4",
  inn: "ИНН: 3000007227",
  ogrn: "ОГРН: 1233000002751",
  email: "Email: maecenas-n@mail.ru",
};

import iconTelegram from "../footer/images/icon-telegram.svg";
import iconOk from "../footer/images/icon-ok.svg";
import iconVk from "../footer/images/icon-vk.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
export const SOCIAL_NETWORK = [
  {
    id: 1,
    title: "Вконтакте",
    name: "vk",
    src: iconVk,
    href: "https://vk.com/maecenas_n",
    show: true,
  },
  {
    id: 2,
    title: "Телеграм",
    name: "telegram",
    src: iconTelegram,
    href: "https://t.me/maecenasN",
    show: true,
  },
  {
    id: 2,
    title: "Одноклассники",
    name: "ok",
    src: iconOk,
    href: "",
    show: false,
  },
];

export const COPYRIGHTS = "Copyright © 2024г";
