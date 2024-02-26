import Image from "next/image";
import classes from "./styles/international.module.css";

import banner from "public/images/banner/banner_international.jpg";
import hard from "./images/hard.jpg";
import international from "./images/international.jpg";
import praktic from "./images/praktic.jpg";
import table from "./images/table.jpg";
import talants from "./images/talants.jpg";
import volonters from "./images/volonters.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function International() {
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
                <h1 id="banner-title">«Международная»</h1>
              </div>
              <div className={classes.banner_block_content_middle}>
                <div className={classes.banner_description}>
                  Создание Центра помощи молодежи
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
          {/* <h1>«ВОЗРОЖДЕНИЕ ДЕЛЬТЫ»</h1> */}
          <h2>
            Будет хорошо если у всей молодежи мира будет много возможностей для
            самореализации, имея для этого только свое большое желание!
          </h2>
        </div>
      </section>

      <section className={classes.programm_v}>
        <div className={classes.programm_v_block}>
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_1}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Изучение любого иностранного языка совершенно бесплатно. Через
                обучение иностранных языков будет возможность изучить и понять
                культуру народа, в конечном итоге это улучшит взаимопонимание
                между народами, странами.
              </h3>
              <div className={classes.programm_v_number_block}>1</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={table}
                alt="Благотворительная программа «Международная». Изучение любого иностранного языка совершенно бесплатно"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_2}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Помощь молодежи: попавшим в сложную жизненную ситуацию, помощь в
                трудоустройстве, помощь юриста фонда, помощь в адаптации и т.д.
              </h3>
              <div className={classes.programm_v_number_block}>2</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={hard}
                alt="Благотворительная программа «Международная». Помощь молодежи: попавшим в сложную жизненную ситуацию"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_3}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Содействие талантливой молодежи (в спорте, культуре, молодым
                ученым и т.д.)
              </h3>
              <div className={classes.programm_v_number_block}>3</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={talants}
                alt="Благотворительная программа «Международная». Содействие талантливой молодежи"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_4}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>Пропаганда волонтёрства</h3>

              <div className={classes.programm_v_number_block}>4</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={volonters}
                alt="Благотворительная программа «Международная». Пропаганда волонтёрства"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_5}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Сплочение молодежи разных стран с помощью культурных,
                спортивных, и иных объединяющих мероприятий
              </h3>

              <div className={classes.programm_v_number_block}>5</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={international}
                alt="Благотворительная программа «Международная». Сплочение молодежи разных стран"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_6}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Помощь в прохождении практики для студентов и поиске работы.
              </h3>

              <div className={classes.programm_v_number_block}>6</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={praktic}
                alt="Благотворительная программа «Международная». Помощь в прохождении практики для студентов и поиске работы."
              />
            </div>
          </div>
          {/* end item */}
          <div className="mt-10">
            <Button className="text-wrap py-15px px-25px block h-[82px] text-lg max-w-[400px] leading-6 ">
              <Link
                href={"/documents/programms/doc-international.pdf"}
                target="_blank"
              >
                Положение о благотворительной программе «Интернациональная»
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
