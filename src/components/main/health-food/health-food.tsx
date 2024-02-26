import Image from "next/image";
import classes from "./styles/health-food.module.css";
import banner from "public/images/banner/banner_helthfood.jpg";
import ferma from "./images/ferma.jpg";
import garden from "./images/garden.jpg";
import paseka from "./images/paseka.jpg";
import vegetables from "./images/vegetables.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HealthFood() {
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
                <h1 id="banner-title">«Здоровое питание»</h1>
              </div>
              {/* <div className={classes.}"banner_block-content-middle">
              <div className={classes.}"banner_description">
                Адресная помощь всем, кто на самом деле в ней нуждается!
              </div>
            </div> */}
            </div>

            <div
              className={classes.banner_block_content_dots}
              id="dots-block"
            ></div>
          </div>
        </div>
      </section>
      {/* END Баннер

    Заголовок */}
      <section className={classes.zagolovok_v}>
        <div className={classes.zagolovok_v_block}>
          {/* <h1>«ВОЗРОЖДЕНИЕ ДЕЛЬТЫ»</h1> */}
          <br />
          <h2>
            Дети – цветы жизни. Они должны быть сытыми, здоровыми и счастливыми.
            Поэтому была создана благотворительная программа «Здоровое питание»,
            ведь это очень важно! Цель программы – обеспечить детей свежими и
            вкусными натуральными продуктами. Давайте вместе накормим детей
            полезными вкусняшками!
          </h2>
        </div>
      </section>
      {/* Заголовок */}

      {/* Описание программы */}
      <section className={classes.programm_v}>
        <div className={classes.programm_v_block}>
          {/* item  */}
          <div className={`${classes.programm_v_item} ${classes.punkt_1}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Организация пасеки. Собственное производство меда, его
                распространение по детским учреждениям
              </h3>

              <div className={classes.programm_v_number_block}>1</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={paseka}
                alt="Благотворительная программа «Здоровое питание». Организация пасеки"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_2}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Благотворительная ферма фонда. Вся экологически чистая продукция
                отправляется в детские дома и нуждающимся
              </h3>
              <div className={classes.programm_v_number_block}>2</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={ferma}
                alt="Благотворительная программа «Здоровое питание». Благотворительная ферма фонда"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_3}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Благотворительный огород: свежие, полезные овощи для детей и
                нуждающихся
              </h3>
              <div className={classes.programm_v_number_block}>3</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={vegetables}
                alt="Благотворительная программа «Здоровое питание». Благотворительный огород"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_4}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Благотворительный сад: спелые фрукты и ягоды в детские дома!
              </h3>

              <div className={classes.programm_v_number_block}>4</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={garden}
                alt="Благотворительная программа «Здоровое питание». Благотворительный
              сад"
              />
            </div>
          </div>
          {/* end item */}
          <div className="mt-10">
            <Button className="text-wrap py-15px px-25px block h-[82px] text-lg max-w-[400px] leading-6 ">
              <Link
                href={"/documents/programms/doc-health-food.pdf"}
                target="_blank"
              >
                Положение о благотворительной программе «Здоровое питание»
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
