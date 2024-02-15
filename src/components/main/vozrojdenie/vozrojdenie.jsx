import Image from "next/image";
import classes from "./styles/vozrojdenie.module.css";

import Banner from "public/images/banner/banner-vozrojdenie.jpg";
import bluePatrul from "./images/blue-patrul.jpg";
import clearFlora from "./images/clear-flora.jpg";
import clearRiver from "./images/clear-river.jpg";
import forest from "./images/forest.jpg";
import nerest from "./images/nerest.jpg";
import noFire from "./images/no-fire.jpg";

export function Vozrojdenie() {
  return (
    <>
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
                <h1 id="banner-title">«Возрождение дельты»</h1>
              </div>
              <div className={classes.banner_block_content_middle}>
                <div className={classes.banner_length_rain}>
                  <span>Длина реки</span>3 530 км
                </div>
                <div className={classes.banner_square_delta}>
                  <span>Площадь дельты</span>1 360 000 км²
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
          <h1>«ВОЗРОЖДЕНИЕ ДЕЛЬТЫ»</h1>
          <h2>
            программа, в рамках которой Фонд направляет пожертвования на оплату
            помощи в следующих направлениях:
          </h2>
        </div>
      </section>
      {/* END Заголовок */}

      {/* Описание программы */}
      <br id="why" />
      <section className={classes.programm_v}>
        <div className={classes.programm_v_block}>
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_1}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Голубой патруль. Спасение рыбной молоди
              </h3>
              <p className={classes.programm_v_text}>
                Организация отряда спасения рыбной молоди, а также помощь другим
                уже существующим отрядам спасения рыбной молоди - «Голубой
                Патруль», в дельте реки Волга (в отшнурованных водоемах после
                паводка). Помощь отрядам в технике, материально-техническом
                оснащении, оплате труда, спец. одежде и других необходимых
                формах поддержки.
              </p>
              <div className={classes.programm_v_number_block}>1</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={bluePatrul}
                alt="Благотворительная программа «Голубой патруль»"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_2}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Улучшение нереста и сохранение существования рыбной популяции
              </h3>
              <ul>
                <li>
                  <p className={classes.programm_v_text}>
                    организация   перевозки рыбной молоди в наиболее
                    благоприятную, естественную среду обитания (до раскатной
                    части дельты Волги и  северного Каспия), на
                    специализированной технике, в результате  спасении рыбной
                    молоди отрядами «Голубой патруль», сотрудничество с прудами,
                    заводами занимающимися воспроизводством рыбной молоди и
                    выпуском их в естественную среду,
                  </p>
                </li>
                <li>
                  <p className={classes.programm_v_text}>
                    выкос водной растительности в ериках и авандельте р. Волга,
                  </p>
                </li>
                <li>
                  <p className={classes.programm_v_text}>
                    земляные и дноуглубительные работы, направленные на
                    сохранение и улучшение существования рыбной популяции.
                  </p>
                </li>
                <li>
                  <p className={classes.programm_v_text}>
                    покупка рыбной молоди и выпуск в Дельту р. Волга
                  </p>
                </li>
              </ul>

              <div className={classes.programm_v_number_block}>2</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image src={nerest} alt="Благотворительная программа «Нерест»" />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_3}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Очистка рек, протоков, авандельты р. Волга и северного Каспия от
                мусора, деревьев, металла и затонувших металлических конструкций
              </h3>

              <ul>
                <li>
                  <p className={classes.programm_v_text}>
                    появляется движение воды в авандельту, которая в последние
                    годы страдает от нехватки воды
                  </p>
                </li>
                <li>
                  <p className={classes.programm_v_text}>заиливание протоков</p>
                </li>
                <li>
                  <p className={classes.programm_v_text}>
                    открывается проезд транспорта
                  </p>
                </li>
                <li>
                  <p className={classes.programm_v_text}>
                    чистота протоков от мусора.
                  </p>
                </li>
              </ul>
              <div className={classes.programm_v_number_block}>3</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={clearRiver}
                alt="Благотворительная программа «Голубой патруль»"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_4}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Выкос водной растительности
              </h3>

              <ul>
                <li>
                  <p className={classes.programm_v_text}>
                    предупреждение заболачиваемости акватории
                  </p>
                </li>
                <li>
                  <p className={classes.programm_v_text}>
                    улучшение пропускного режима воды
                  </p>
                </li>
                <li>
                  <p className={classes.programm_v_text}>
                    увеличение уровня содержания кислорода в воде
                  </p>
                </li>
              </ul>
              <div className={classes.programm_v_number_block}>4</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={clearFlora}
                alt="Благотворительная программа «Голубой патруль»"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_5}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>Выкос камыша на островах</h3>

              <ul>
                <li>
                  <p className={classes.programm_v_text}>
                    для благоприятного нереста рыбы в весенний период
                  </p>
                </li>
                <li>
                  <p className={classes.programm_v_text}>
                    профилактика пожаров на островах
                  </p>
                </li>
              </ul>
              <div className={classes.programm_v_number_block}>5</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={noFire}
                alt="Благотворительная программа «Голубой патруль»"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className={`${classes.programm_v_item} ${classes.punkt_6}`}>
            <div className={classes.programm_v_description}>
              <h3 className={classes.name_punkt}>
                Посадка деревьев на островах в дельте р. Волга
              </h3>
              <p className={classes.programm_v_text}>
                Высадка тополя, ивы и других деревьев, хорошо переносящих
                паводок, снижает риск затопления островов водой во время
                половодья.
              </p>
              <div className={classes.programm_v_number_block}>6</div>
            </div>
            <div className={classes.programm_v_image}>
              <Image
                src={forest}
                alt="Благотворительная программа «Голубой патруль»"
              />
            </div>
          </div>
          {/* end item */}
        </div>
      </section>
    </>
  );
}
