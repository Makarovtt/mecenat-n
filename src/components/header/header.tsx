"use client";

import Image from "next/image";
import imageLogotype from "public/images/logotype.png";
import { DATA_MAIN_INFO } from "../data/data";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModalCustom } from "../ui/modal-custom";
import { useState } from "react";
import { PayUCassa } from "../pay/pay-u";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen((actual) => !actual);
  }
  function closeModal() {
    setIsOpen((actual) => !actual);
  }
  return (
    <>
      <section>
        <div className="max-w-maxw mx-auto pt-[5px] flex items-center justify-evenly">
          <div className="flex items-center justify-start w-[450px]">
            <Link href={"/"}>
              <Image
                src={imageLogotype}
                alt={DATA_MAIN_INFO.title}
                width={120}
              />
            </Link>
            <div className="ml-[30px] font-normal">{DATA_MAIN_INFO.title}</div>
          </div>
          <div className="w-[500px] text-center text-[1.2em] flex items-center justify-between">
            <div className="">
              <Link
                href={`tel:${DATA_MAIN_INFO.phone}`}
                className="flex items-center justify-start flex-nowrap flex-row
                            before:content-[''] before:block before:w-[31px] before:h-[29px]
                            before:bg-[url(/images/header/icon-phone-header.svg)]
                            before:mr-[15px]"
              >
                {DATA_MAIN_INFO.phone}
              </Link>
            </div>

            <div className="w-[200px]">
              <Button onClick={openModal}>Пожертвовать</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Линии */}
      <section className="h-[22px] bg-[url('/images/header/header-lines.svg')] bg-repeat-x bg-center-top">
        <div></div>
      </section>
      {/* END Линии */}

      <ModalCustom
        width="md"
        className=""
        styleContent="px-12"
        isOpen={isOpen}
        onClose={closeModal}
      >
        <PayUCassa />
      </ModalCustom>
    </>
  );
}
