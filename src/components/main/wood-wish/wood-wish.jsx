import Image from "next/image";
import classes from "./styles/wood-wish.module.css";

import Banner from "public/images/banner/banner_woodwish.jpg";
import church from "./images/church.jpg";
import forChild from "./images/for-child.jpg";
import lifeHealth from "./images/life-health.jpg";
import liveHard from "./images/live-hard.jpg";
import volonters from "./images/volonters.jpg";
import woodWish from "./images/wood-wish.jpg";
import mobApp from "./images/mob-app.svg";

export function WoodWish() {
  return (
    <>
      {/* Баннер */}
      <section className={classes.banner}>
        <div className={classes.banner_block}>
          <div className={classes.banner_block_image_block}>
            <div className={classes.banner_block_images_wrap}>
              <Image alt="" src={Banner} />
            </div>
          </div>
          <div className={classes.banner_block_content_block}>
            <div className={classes.banner_block_content_top}>
              <div className={classes.banner_block_content_title}>
                <span>Благотворительная программа</span>
                <h1 id="banner-title">«Дерево желаний»</h1>
              </div>
              <div className={classes.banner_block_content_middle}>
                <div className={classes.banner_description}>
                  Адресная помощь всем, кто на самом деле в ней нуждается!
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
      {/*  Баннер */}

      <br id="why" />
      <section className={classes.programm_v}>
        <div className={classes.programm_v_block}>
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_1}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Помощь людям, попавшим в сложную жизненную ситуацию!
              </h3>

              <div className={classes.programm_v_number_block}>1</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={liveHard}
                alt="Благотворительная программа «Дерево желаний». Помощь людям, попавшим в сложную жизненную ситуацию!"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_2}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Пропаганда здорового образа жизни
              </h3>
              <div className={classes.programm_v_number_block}>2</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={lifeHealth}
                alt="Благотворительная программа «Дерево желаний». Пропаганда здорового образа жизни"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_3}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Пропаганда волонтерской деятельности
              </h3>
              <div className={classes.programm_v_number_block}>3</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={volonters}
                alt="Благотворительная программа «Дерево желаний». Пропаганда волонтерской деятельности"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_4}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Помощь детям с тяжелыми болезнями, детям без семьи (в детских
                домах), мед. учреждениям
              </h3>

              <div className={classes.programm_v_number_block}>4</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={forChild}
                alt="Благотворительная программа «Дерево желаний». Помощь детям с тяжелыми болезнями, детям без семьи (в детских домах), мед. учреждениям"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_5}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Помощь в восстановлении церквей
              </h3>

              <div className={classes.programm_v_number_block}>5</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={church}
                alt="Благотворительная программа «Дерево желаний». Помощь в восстановлении церквей"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_6}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Разработка мобильного приложения на телефон. Адресная помощь
                всем нуждающимся
              </h3>
              <div className={classes.programm_v_number_block}>6</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={mobApp}
                alt="Благотворительная программа «Дерево желаний». Разработка мобильного приложения на телефон. 
              Адресная помощь всем нуждающимся"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_7}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                 Импровизированное «Дерево желаний» для детей.  Исполнение
                желаний круглый год для всех детей.
              </h3>
              <div className={classes.programm_v_number_block}>7</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={woodWish}
                alt="Благотворительная программа «Дерево желаний».  Импровизированное «Дерево желаний» для детей.
                 Исполнение желаний круглый год для всех детей."
              />
            </div>
          </div>
          {/* end item */}
        </div>
      </section>
    </>
  );
}
