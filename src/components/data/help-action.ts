import { StaticImport } from "next/dist/shared/lib/get-img-props";
import justhelp1 from "public/images/just_helped/image_01.jpg";
import justhelp2 from "public/images/just_helped/image_02.jpg";
import justhelp3 from "public/images/just_helped/image_03.jpg";
import justhelp4 from "public/images/just_helped/image_04.jpg";
interface DataArray {
  id: number;
  image: string | StaticImport;
  who: string;
  what: string;
  image_src: string;
}
export const JUST_HELP: DataArray[] = [
  {
    id: 1,
    image: justhelp1,
    who: "Государственному бюджетному учреждению здравоохранения Астраханской области «Ахтубинская районная больница»",
    what: "Фондом приобретено и передано медицинское оборудование на сумму в размере 2 000 000 рублей",
    image_src: "",
  },
  {
    id: 2,
    image: justhelp2,
    who: "Государственному бюджетному учреждению здравоохранения Астраханской области «Александро-Мариинская областная клиническая больница»",
    what: "Фондом приобретена и передана лицензия на право доступа к платформе «Медицинский цифровой диагностический центр» в размере 500 000 рублей",
    image_src: "",
  },
  {
    id: 3,
    image: justhelp3,
    who: "Государственному бюджетному учреждению здравоохранения Астраханской области «Наримановская районная больница»",
    what: "Фондом приобретено и передано медицинское оборудование на сумму в размере 370 000 рублей",
    image_src: "",
  },
  {
    id: 4,
    image: justhelp4,
    who: "Государственному бюджетному учреждению здравоохранения Астраханской области «Медицинский информационно-аналитический центр»",
    what: "Фондом организовано обучение мед.работника по программе «Региональная AI-трансформация России» в размере 70 000 рублей",
    image_src: "",
  },
];
