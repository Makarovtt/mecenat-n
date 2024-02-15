"use client";

import classes from "./styles/page-home.module.css";
import { QuizGetHelp } from "./components/quiz/quiz-get-help";
import { ModalCustom } from "@/components/ui/modal-custom";
import { useState } from "react";

export function GetHelp() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen((actual) => !actual);
  }
  function closeModal() {
    setIsOpen((actual) => !actual);
  }

  return (
    <section className={classes.gethelp}>
      <div className={classes.gethelp_block}>
        <div className={classes.gethelp_btn} onClick={openModal}>
          Получить помощь
        </div>
      </div>

      <ModalCustom
        width="md"
        className=""
        styleContent="px-12"
        isOpen={isOpen}
        onClose={closeModal}
      >
        <QuizGetHelp onClose={closeModal} />
      </ModalCustom>
    </section>
  );
}
