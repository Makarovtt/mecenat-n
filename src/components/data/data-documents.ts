import { StaticImport } from "next/dist/shared/lib/get-img-props";
import iconDownloadPDF from "public/images/icons/icon_pdf_download.svg";
import iconDownloadDOCX from "public/images/icons/icon_docx_download.svg";

interface DataStack {
  id: number;
  title: string;
  href: string;
  type: string[];
  icon: string | StaticImport;
}

export const DATA_DOCUMENTS: DataStack[] = [
  {
    id: 1,
    title: "Устав благотворительного фонда",
    href: "/documents/registration/ustav.pdf",
    type: ["all", "registration"],
    icon: iconDownloadPDF,
  },
  // {
  //   id: 1,
  //   title: "Решение о создании общества",
  //   href: "/documents/files/decision.pdf",
  //   type: ["all", "registration"],
  //   icon: iconDownloadPDF,
  // },
  {
    id: 2,
    title: "Свидетельство о государственной регистрации НКО",
    href: "/documents/registration/gos_registr.pdf",
    type: ["all", "registration"],
    icon: iconDownloadPDF,
  },
  {
    id: 3,
    title: "Свидетельство о постановке на учет в налоговом органе",
    href: "/documents/registration/postanov_na_uchet.pdf",
    type: ["all", "registration"],
    icon: iconDownloadPDF,
  },
  {
    id: 4,
    title: "Публичный договор оферта о добровольном пожертвовании",
    href: "/documents/dogovor_dobrovolnoe_pojertvovanie.pdf",
    type: ["all", "oferta"],
    icon: iconDownloadPDF,
  },
  {
    id: 5,
    title: "Политика по противодействию коррупции",
    href: "/documents/non_corruption.pdf",
    type: ["all"],
    icon: iconDownloadPDF,
  },
  {
    id: 6,
    title: "Политика в отношении обработки персональных данных",
    href: "/documents/personal_data.pdf",
    type: ["all", "personal_data"],
    icon: iconDownloadPDF,
  },
  {
    id: 7,
    title: "Согласие на обработку персональных данных",
    href: "/documents/agree_personal_data.pdf",
    type: ["all", "personal_data"],
    icon: iconDownloadPDF,
  },
  {
    id: 8,
    title:
      "Положение о порядке привлечения денежных средств с использованием ящиков для сбора благотворительных пожертований",
    href: "/documents/polojenie_use_cash.pdf",
    type: ["all"],
    icon: iconDownloadPDF,
  },
  {
    id: 9,
    title: "Заявление о предоставлении благотворительной помощи",
    href: "/documents/statement_about_help.docx",
    type: ["all"],
    icon: iconDownloadDOCX,
  },
  {
    id: 10,
    title: "Условия пользования сайтом",
    href: "/documents/use_site.pdf",
    type: ["all"],
    icon: iconDownloadPDF,
  },
];
