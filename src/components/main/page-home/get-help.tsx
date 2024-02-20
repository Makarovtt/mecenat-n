"use client";

import { PayUCassa } from "@/components/pay/pay-u";
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
    <section>
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div
          className="m-[80px] text-xl border rounded-md font-bold py-5 
        px-16 italic text-[#126688] shadow-lg cursor-pointer hover:bg-cyan-50
        transition"
          onClick={openModal}
        >
          Получить помощь
        </div>
        <div className="w-px border-l mx-10 h-36"></div>
        <div className="ml-10">
          <PayUCassa />
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
