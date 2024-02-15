"use client";

import Image from "next/image";
import classes from "./styles/page-home.module.css";
import { JUST_HELP } from "../../data/help-action";
import { TriangleWhiteArrow } from "./images/triangle-white-left";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import needhelp1 from "./images/needhelp1.jpg";
import needhelp2 from "./images/needhelp2.jpg";
import needhelp3 from "./images/needhelp3.jpg";
import needhelp4 from "./images/needhelp4.jpg";
import needhelp5 from "./images/needhelp5.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface DataArray {
  id: number;
  image: string | StaticImport;
  who: string;
  what: string;
  image_src: string;
}
const stack = JUST_HELP;

export function JustHelped() {
  return (
    <section className={classes.helps}>
      <div className="max-w-7xl mx-auto">
        <h2>Кому уже помогли</h2>

        <div className={classes.hepls_justhelped_block}>
          <div className={classes.help_justhelped_arrows}>
            <div
              data-slider-prew
              id="arrow-slider-rew"
              className={classes.help_justhelped_arrows_left}
            >
              <TriangleWhiteArrow />
            </div>
            <div
              data-slider-next
              id="arrow-slider-next"
              className={classes.help_justhelped_arrows_right}
            >
              <TriangleWhiteArrow />
            </div>
          </div>
          <Swiper
            navigation={{
              nextEl: "[data-slider-next]",
              prevEl: "[data-slider-prew]",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {stack &&
              stack.map((item: DataArray) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className={classes.help_justhelped_content}>
                      <div className="w-64 shrink-0">
                        <Image
                          src={item.image}
                          alt="Кому помогли"
                          className="w-full object-cover"
                        />
                      </div>
                      <div className="px-10 py-5">
                        <div className={classes.help_justhelped_content_title}>
                          {item.who}
                        </div>
                        <div className={classes.help_justhelped_content_text}>
                          {item.what}
                        </div>
                        {/* <div className={classes.help_justhelped_content_descript}>Дескрипт</div> */}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>

        <h2 className="mrg_top">Кому нужно помочь</h2>
        <div className={classes.help_needhelp}>
          {/* <ul className={classes.help_needhelp_list}>
            <li>
              <div className={classes.help_needhelp_item_img}>
                <Image src={needhelp1} alt="Нужно помочь" />
              </div>
              <div className={classes.help_needhelp_item_text}>
                Текст текст Текст текст Текст текст Текст текст
              </div>
            </li>

            <li>
              <div className={classes.help_needhelp_item_img}>
                <Image src={needhelp2} alt="Нужно помочь" />
              </div>
              <div className={classes.help_needhelp_item_text}>
                Текст текст Текст текст Текст текст Текст текст
              </div>
            </li>

            <li>
              <div className={classes.help_needhelp_item_img}>
                <Image src={needhelp3} alt="Нужно помочь" />
              </div>
              <div className={classes.help_needhelp_item_text}>
                Текст текст Текст текст Текст текст Текст текст
              </div>
            </li>

            <li>
              <div className={classes.help_needhelp_item_img}>
                <Image src={needhelp4} alt="Нужно помочь" />
              </div>
              <div className={classes.help_needhelp_item_text}>
                Текст текст Текст текст Текст текст Текст текст
              </div>
            </li>

            <li>
              <div className={classes.help_needhelp_item_img}>
                <Image src={needhelp5} alt="Нужно помочь" />
              </div>
              <div className={classes.help_needhelp_item_text}>
                Текст текст Текст текст Текст текст Текст текст
              </div>
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}
