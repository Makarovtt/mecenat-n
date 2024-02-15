"use client";
import { useState } from "react";
import classes from "./styles/banner.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "../ui/button";
import { DATA_MENU } from "../data/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Stack {
  id: number | null;
  title: string;
  href: string;
  image: string | StaticImport;
}
const stack = DATA_MENU[1]?.submenu;

export function Banner() {
  const [actualStack, setActualStack] = useState<Stack>(stack[0]);

  function changeImage(index: number) {
    setActualStack(stack[index]);
  }

  return (
    <section className={classes.banner}>
      <div className={classes.banner_block}>
        <div className={classes.banner_block_image_block}>
          <Swiper
            modules={[Pagination]}
            className="mySwiper"
            onSlideChange={(index) => changeImage(index.activeIndex)}
            pagination={{
              el: "[data-slider-dots]",
              type: "bullets",
              clickable: true,
              bulletClass:
                "bg-gray-300 mx-4 rounded-full w-7 h-7 flex justify-center items-center cursor-pointer hover:bg-gray-400",
              bulletActiveClass: "text-white bg-sky-800 hover:bg-sky-800",
              renderBullet: function (index, className) {
                return `<div class="${className}">${index + 1}</div>`;
              },
            }}
          >
            {stack &&
              stack.map((item: Stack) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Image
                      className="w-full cursor-pointer"
                      src={actualStack.image}
                      alt={item.title}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <div className={classes.banner_block_content_block}>
          <div className={classes.banner_block_content_top}>
            <div className={classes.banner_block_content_title}>
              <span>Благотворительная программа</span>
              <h1 id="banner-title">{actualStack.title}</h1>
            </div>
            <div className={classes.banner_block_content_middle}>
              <div className={classes.banner_block_content_btns}>
                <div className={classes.banner_block_content_presnt}>
                  ПРЕЗЕНТАЦИЯ
                </div>
                <div className={classes.banner_block_content_presnt}>
                  <Button>
                    <Link href={actualStack.href}>Смотреть</Link>
                  </Button>
                </div>
              </div>

              <div className="h-10 bg-[url('/images/banner/banner-line.svg')] bg-no-repeat bg-center"></div>
            </div>
          </div>

          <div
            className={clsx(classes.banner_block_content_dots, "dots")}
            id="dots-block"
            data-slider-dots
          ></div>
        </div>
      </div>
    </section>
  );
}
