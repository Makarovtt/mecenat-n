import Image from "next/image";
import classes from "./styles/eco.module.css";

import banner from "public/images/banner/banner_eco.jpg";
import kroshka from "./images/kroshka.jpg";
import penalty from "./images/penalty.png";
import svalka from "./images/svalka.jpg";
import tennis from "./images/tennis.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Eco() {
  return (
    <>
      <section className={classes.banner}>
        <div className={classes.banner_block}>
          <div className={classes.banner_block_image_block}>
            <div className={classes.banner_block_images_wrap}>
              <Image src={banner} alt="" />
            </div>
          </div>
          <div className={classes.banner_block_content_block}>
            <div className={classes.banner_block_content_top}>
              <div className={classes.banner_block_content_title}>
                <span>Благотворительная программа</span>
                <h1 id="banner-title">«ЭКО Переработка»</h1>
              </div>
              <div className={classes.banner_block_content_middle}>
                <div className={classes.banner_description}>
                  Сделайте наш город чище, ярче и безопаснее вместе с
                  «Меценат-Н»!
                </div>
              </div>
            </div>

            <div
              className={classes.banner_block_content_dots}
              id="dots-block"
            ></div>
          </div>
        </div>
      </section>
      {/* END Баннер */}

      {/* Заголовок */}
      <br id="why" />
      <section className={classes.zagolovok_v}>
        <div className={classes.zagolovok_v_block}>
          {/* <h1>«ВОЗРОЖДЕНИЕ ДЕЛЬТЫ»</h1>  */}
          <h2>
            Благотворительный фонд социально-экологического направления
            «Меценат-Н»  начинает программу «Эко-переработка» в Астраханской
            области с переработки автомобильных шин
          </h2>
        </div>
      </section>
      {/* Заголовок */}

      {/* Описание программы */}
      <section className={classes.programm_v}>
        <div className={classes.programm_v_block}>
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_1}`}>
            <div className={classes.programm_v_description}>
              <h2>Почему это важно?</h2>
              <h3 className={classes.name_punkt}>
                автомобильная резина относится к IV классу опасности и может
                нанести вред окружающей среде за счёт токсичного хим. состава
                (канцерогенные вещества, некоторые из которых имеют срок
                разложения свыше 100 лет). Всё это может попасть в почву,
                грунтовые воды, водоёмы. Частицы каучука и смолы, которые входят
                в состав автопокрышки, при вдыхании с воздухом могут стать
                причиной возникновения аллергии, астмы, конъюнктивита и даже
                онкологических заболеваний.
              </h3>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={svalka}
                alt="Благотворительная программа «ЭКО Переработка». Почему это важно?"
              />
            </div>
          </div>
          {/* end item */}
        </div>
      </section>
      {/* END Описание программы */}

      {/* Про штраф */}
      <section className={classes.penalty_section}>
        <div className={classes.penalty_block}>
          {/* <h1>«ВОЗРОЖДЕНИЕ ДЕЛЬТЫ»</h1>  */}
          <Image src={penalty} alt="" />
        </div>
      </section>
      {/* End Про штраф */}

      {/* Продукция */}
      <section className={classes.products_section}>
        <div className={classes.products_block}>
          <div className={classes.products_list}>
            <div className={classes.products_item}>
              <div
                className={`${classes.products_item} ${classes.first} ${classes.flex_item}`}
              >
                <div className={classes.first_image}>
                  <Image src={kroshka} alt="" />
                </div>
                <div
                  className={`${classes.first_description} ${classes.flex_desc}`}
                >
                  В чём смысл резиновой крошки, почему не утилизация? – из
                  резиновой крошки можно создать следующие вещи;
                </div>
              </div>
              <div
                className={`${classes.products_item} ${classes.second} ${classes.flex_item}`}
              >
                <div className={classes.first_image}>
                  <Image src={tennis} alt="" />
                </div>
                <div
                  className={`${classes.first_description} ${classes.flex_desc}`}
                >
                  Упругое и травмобезопасное покрытие для спортивных площадок,
                  беговых дорожек;
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Link href={"/documents/programms/doc-eco.pdf"} target="_blank">
              <Button className="text-wrap py-15px px-25px block h-[82px] text-lg max-w-[400px] leading-6 ">
                Положение о благотворительной программе «Эко переработка»
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
