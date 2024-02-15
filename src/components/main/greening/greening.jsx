import Image from "next/image";
import classes from "./styles/greening.module.css";

import banner from "public/images/banner/banner_greening.jpg";
import plantWood from "./images/plant-wood.jpg";

export function Greening() {
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
                <h1 id="banner-title">«Озеленение»</h1>
              </div>
              <div className={classes.banner_block_content_middle}>
                <div className={classes.banner_description}>
                  Цель — посадить
                  <span className={classes.desc_span}>1.000.000</span> деревьев
                  в регионе!
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

      <br id="why" />
      <section className={classes.zagolovok_v}>
        <div className={classes.zagolovok_v_block}>
          <h1>Посади дерево в своем дворе!</h1>
          <h2>Начало программы стартует с Астраханской области</h2>
        </div>
      </section>

      <br id="why" />
      <section className={classes.programm_v}>
        <div className={classes.programm_v_block}>
          <p>Голосуйте за свой двор, и мы приедем к Вам!</p>
          <p>
            Вы сможете посадить деревья совместно с нашими специалистами или
            сделать благотворительный взнос и посмотреть фотоотчёт нашей команды
            на сайте.
          </p>
          <p>Сделайте свой двор зелёным и уютным!</p>

          <p>
            <Image
              src={plantWood}
              alt="Благотворительная программа «Озеленение»"
            />
          </p>
          <p>
            В Астраханской области программа будет продолжаться до тех пор, пока
            число высаженных деревьев не достигнет миллиона, следующая область
            будет выбрана исходя из количества поступивших  заявок.
          </p>
        </div>
      </section>
    </>
  );
}
