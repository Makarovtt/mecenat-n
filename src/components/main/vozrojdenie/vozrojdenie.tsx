import Image from "next/image";
import classes from "./styles/vozrojdenie.module.css";

import Banner from "public/images/banner/banner-vozrojdenie.jpg";
import bluePatrul from "./images/blue-patrul.jpg";
import clearFlora from "./images/clear-flora.jpg";
import clearRiver from "./images/clear-river.jpg";
import forest from "./images/forest.jpg";
import nerest from "./images/nerest.jpg";
import noFire from "./images/no-fire.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Vozrojdenie() {
  return (
    <>
      <section className="bg-[#eff5fc] border-b-[#d4e8ff] border">
        <div className="max-w-[1900px] h-[450px] mx-auto overflow-hidden flex justify-center items-start">
          <div className="shrink-1 relative w-1/2 h-[450px] z-10">
            <div className="absolute b-0 overflow-hidden flex-col w-full">
              <Image
                alt=""
                src={Banner}
                height={450}
                className="h-[450px] object-cover"
              />
            </div>
          </div>
          <div className="shrink-1 relative w-1/2 h-[450px] z-10 flex justify-center items-center">
            <div>
              <div className="text-center">
                <span>Благотворительная программа</span>
                <h1 id="banner-title" className="my-[30px] text-[2.5em]">
                  «Возрождение дельты»
                </h1>
              </div>
              <div>
                <div className="text-center text-[1.8em] text-[#126688]">
                  <span className="block text-center text-[0.6em]">
                    Длина реки
                  </span>
                  3 530 км
                </div>
                <div className="text-center text-[1.8em] text-[#126688] mt-[15px]">
                  <span className="block text-center text-[0.6em]">
                    Площадь дельты
                  </span>
                  1 360 000 км²
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-center"
              id="dots-block"
            ></div>
          </div>
        </div>
      </section>
      {/* END Баннер */}

      {/* Заголовок */}
      <br id="why" />
      <section>
        <div className="m-[50px]">
          <h1 className="text-[2em] text-center font-semibold mb-[40px]">
            «ВОЗРОЖДЕНИЕ ДЕЛЬТЫ»
          </h1>
          <h2 className="text-[1.5em] font-normal text-center max-w-[900px] mx-auto">
            программа, в рамках которой Фонд направляет пожертвования на оплату
            помощи в следующих направлениях:
          </h2>
        </div>
      </section>
      {/* END Заголовок */}

      {/* Описание программы */}
      <br id="why" />
      <section className="pb-[100px]">
        <div className="my-[50px] mx-auto max-w-[1200px] flex flex-col gap-[90px]">
          {/* item */}
          <div className="flex flex-row flex-nowrap items-start justify-between gap-[40px] relative">
            <div className="relative pr-[20px] w-1/2 z-10">
              <h3 className="mb-6 ml-4">
                Голубой патруль. Спасение рыбной молоди
              </h3>
              <p className="text-[#6d6d6d] text-[0.9em] mt-auto">
                Организация отряда спасения рыбной молоди, а также помощь другим
                уже существующим отрядам спасения рыбной молоди - «Голубой
                Патруль», в дельте реки Волга (в отшнурованных водоемах после
                паводка). Помощь отрядам в технике, материально-техническом
                оснащении, оплате труда, спец. одежде и других необходимых
                формах поддержки.
              </p>
            </div>
            <div
              className="absolute w-[140px] h-[140px] bg-[#f8f8f8] rounded-[50%] z-[5]
                              border border-[#efefef] text-[#ccc] text-[4em] font-extralight
                              flex items-center justify-center top-[-70px] left-[-100px]"
            >
              1
            </div>
            <div className="w-[400px] h-[250px]">
              <Image
                src={bluePatrul}
                alt="Благотворительная программа «Голубой патруль»"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div
            className="flex flex-row flex-nowrap items-start justify-between 
                          gap-[40px] relative"
          >
            <div className="relative pr-[20px] w-1/2 z-10">
              <h3 className="mb-6 ml-4">
                Улучшение нереста и сохранение существования рыбной популяции
              </h3>
              <ul>
                <li>
                  <p className="text-[#6d6d6d] text-[0.9em] mt-auto">
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
                  <p className="text-[#6d6d6d] text-[0.9em] mt-auto">
                    выкос водной растительности в ериках и авандельте р. Волга,
                  </p>
                </li>
                <li>
                  <p className="text-[#6d6d6d] text-[0.9em] mt-auto">
                    земляные и дноуглубительные работы, направленные на
                    сохранение и улучшение существования рыбной популяции.
                  </p>
                </li>
                <li>
                  <p className="text-[#6d6d6d] text-[0.9em] mt-auto">
                    покупка рыбной молоди и выпуск в Дельту р. Волга
                  </p>
                </li>
              </ul>
            </div>
            <div
              className="absolute w-[140px] h-[140px] bg-[#f8f8f8] rounded-[50%] z-[5]
                              border border-[#efefef] text-[#ccc] text-[4em] font-extralight
                              flex items-center justify-center top-[-70px] left-[-100px]"
            >
              2
            </div>
            <div className="w-[400px] h-[250px]">
              <Image src={nerest} alt="Благотворительная программа «Нерест»" />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="flex flex-row flex-nowrap items-start justify-between gap-[40px] relative">
            <div className="relative pr-[20px] w-1/2 z-10">
              <h3 className="mb-6 ml-4">
                Очистка рек, протоков, авандельты р. Волга и северного Каспия от
                мусора, деревьев, металла и затонувших металлических конструкций
              </h3>

              <ul>
                <li>
                  <p className="text-[#6d6d6d] text-[0.9em] mt-auto">
                    появляется движение воды в авандельту, которая в последние
                    годы страдает от нехватки воды
                  </p>
                </li>
                <li>
                  <p className="text-[#6d6d6d] text-[0.9em] mt-auto">
                    заиливание протоков
                  </p>
                </li>
                <li>
                  <p className="text-[#6d6d6d] text-[0.9em] mt-auto">
                    открывается проезд транспорта
                  </p>
                </li>
                <li>
                  <p className="text-[#6d6d6d] text-[0.9em] mt-auto">
                    чистота протоков от мусора.
                  </p>
                </li>
              </ul>
            </div>
            <div
              className="absolute w-[140px] h-[140px] bg-[#f8f8f8] rounded-[50%] z-[5]
                              border border-[#efefef] text-[#ccc] text-[4em] font-extralight
                              flex items-center justify-center top-[-70px] left-[-100px]"
            >
              3
            </div>
            <div className="w-[400px] h-[250px]">
              <Image
                src={clearRiver}
                alt="Благотворительная программа «Голубой патруль»"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="flex flex-row flex-nowrap items-start justify-between gap-[40px] relative">
            <div className="relative pr-[20px] w-1/2 z-10">
              <h3 className="mb-6 ml-4">Выкос водной растительности</h3>

              <ul>
                <li>
                  <p className="text-[#6d6d6d] text-[0.9em] mt-auto">
                    предупреждение заболачиваемости акватории
                  </p>
                </li>
                <li>
                  <p className="text-[#6d6d6d] text-[0.9em] mt-auto">
                    улучшение пропускного режима воды
                  </p>
                </li>
                <li>
                  <p className="text-[#6d6d6d] text-[0.9em] mt-auto">
                    увеличение уровня содержания кислорода в воде
                  </p>
                </li>
              </ul>
            </div>
            <div
              className="absolute w-[140px] h-[140px] bg-[#f8f8f8] rounded-[50%] z-[5]
                              border border-[#efefef] text-[#ccc] text-[4em] font-extralight
                              flex items-center justify-center top-[-70px] left-[-100px]"
            >
              4
            </div>
            <div className="w-[400px] h-[250px]">
              <Image
                src={clearFlora}
                alt="Благотворительная программа «Голубой патруль»"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div
            className="flex flex-row flex-nowrap items-start justify-between 
                          gap-[40px] relative"
          >
            <div className="relative pr-[20px] w-1/2 z-10">
              <h3 className="mb-6 ml-4">Выкос камыша на островах</h3>

              <ul>
                <li>
                  <p className="text-[#6d6d6d] text-[0.9em] mt-auto">
                    для благоприятного нереста рыбы в весенний период
                  </p>
                </li>
                <li>
                  <p className="text-[#6d6d6d] text-[0.9em] mt-auto">
                    профилактика пожаров на островах
                  </p>
                </li>
              </ul>
            </div>
            <div
              className="absolute w-[140px] h-[140px] bg-[#f8f8f8] rounded-[50%] z-[5]
                              border border-[#efefef] text-[#ccc] text-[4em] font-extralight
                              flex items-center justify-center top-[-70px] left-[-100px]"
            >
              5
            </div>
            <div className="w-[400px] h-[250px]">
              <Image
                src={noFire}
                alt="Благотворительная программа «Голубой патруль»"
              />
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div
            className="flex flex-row flex-nowrap items-start justify-between 
                          gap-[40px] relative"
          >
            <div className="relative pr-[20px] w-1/2 z-10">
              <h3 className="mb-6 ml-4">
                Посадка деревьев на островах в дельте р. Волга
              </h3>
              <p className="text-[#6d6d6d] text-[0.9em] mt-auto">
                Высадка тополя, ивы и других деревьев, хорошо переносящих
                паводок, снижает риск затопления островов водой во время
                половодья.
              </p>
            </div>
            <div
              className="absolute w-[140px] h-[140px] bg-[#f8f8f8] rounded-[50%] z-[5]
                              border border-[#efefef] text-[#ccc] text-[4em] font-extralight
                              flex items-center justify-center top-[-70px] left-[-100px]"
            >
              6
            </div>
            <div className="w-[400px] h-[250px]">
              <Image
                src={forest}
                alt="Благотворительная программа «Голубой патруль»"
              />
            </div>
          </div>
          {/* end item */}
          <div>
            <Button className="text-wrap py-15px px-25px block h-[82px] text-lg max-w-[400px] leading-6 ">
              <Link
                href={"/documents/programms/doc-vozrojdenie.pdf"}
                target="_blank"
              >
                Положение о благотворительной программе «Возрождение Дельты»
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
