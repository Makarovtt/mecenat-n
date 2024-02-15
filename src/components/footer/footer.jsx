"use client";

import Image from "next/image";
import Link from "next/link";
import classes from "./styles/footer.module.css";
import logoFooter from "public/images/logotype.png";
import logoBZCekh from "./images/bzcekh-logo.png";
import { CONTACTS, COPYRIGHTS, FOOTER_MENU } from "../data/data";
import { SocialBlock } from "../social-block/social-block";
import { useState } from "react";
import { ModalCustom } from "../ui/modal-custom";
import { QuizGetHelp } from "../main/page-home/components/quiz/quiz-get-help";
import { Feedback } from "../main/page-home/components/feedback/feedback";

export function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen((actual) => !actual);
  }
  function closeModal() {
    setIsOpen((actual) => !actual);
  }
  return (
    <section className={classes.footer}>
      <div className={classes.footer_block}>
        <div className={classes.footer_top_line}>
          <div className={classes.footer_top_about}>
            <div className={classes.footer_top_about_logotype_block}>
              <Image src={logoFooter} alt="Меценат - Н" width={100} />
            </div>
            <div className={classes.footer_top_about_requisits_block}>
              <div>{CONTACTS.address}</div>
              <div>
                {CONTACTS.inn}
                <br />
                {CONTACTS.ogrn}
              </div>
              <div>{CONTACTS.email}</div>
            </div>
          </div>
          <div className={classes.footer_top_social_block}>
            <div className={classes.footer_top_social_block_title}>
              Социальные сети
            </div>
            <div className={classes.footer_top_social_block_list}>
              <SocialBlock />
            </div>
          </div>

          {FOOTER_MENU.map((item) => {
            return (
              <div key={item.id} className={classes.footer_top_documents_block}>
                <div className={classes.footer_top_documents_block_title}>
                  {item.title}
                </div>
                <div className={classes.footer_top_documents_block_list}>
                  <ul className={classes.footer_documents_list}>
                    {item.submenu?.map((isub) => {
                      if (isub.id === 22) {
                        return (
                          <li
                            key={isub.id}
                            onClick={openModal}
                            style={{ cursor: "pointer" }}
                          >
                            {isub.title}
                          </li>
                        );
                      }
                      return (
                        <li key={isub.id}>
                          <Link href={isub.href}>{isub.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className={classes.footer_bottom_line}>
          <div className={classes.footer_bottom_line_block}>
            <div className={classes.footer_bottom_copyright}>{COPYRIGHTS}</div>
            <div className={classes.footer_top_about_requisits_block}>
              <Link
                href="https://bzcekh.ru"
                title="Разработка продвижение интернет сайтов"
                target="_blank"
              >
                <Image
                  src={logoBZCekh}
                  alt="Разработка сайтов"
                  className={classes.header_logo_img}
                />
              </Link>
            </div>
          </div>
        </div>

        <ModalCustom
          width="md"
          className=""
          styleContent="px-12"
          isOpen={isOpen}
          onClose={closeModal}
        >
          <Feedback onClose={closeModal} />
        </ModalCustom>
      </div>
    </section>
  );
}
