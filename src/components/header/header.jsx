import Image from "next/image";
import classes from "./styles/header.module.css";
import imageLogotype from "public/images/logotype.png";
import { DATA_MAIN_INFO } from "../data/data";
import Link from "next/link";

export function Header() {
  return (
    <>
      <section className={classes.header}>
        <div className={classes.header_block}>
          <div className={classes.header_logotype_block}>
            <Link href={"/"}>
              <Image
                src={imageLogotype}
                alt={DATA_MAIN_INFO.title}
                width={120}
              />
            </Link>
            <div className={classes.header_logotype_text}>
              {DATA_MAIN_INFO.title}
            </div>
          </div>
          <div className={classes.header_description_block}>
            <div className={classes.header_description_contacts_phone}>
              {DATA_MAIN_INFO.phone}
            </div>
          </div>
        </div>
      </section>

      {/* Линии */}
      <section className={classes.lines}>
        <div className={classes.lines_block}></div>
      </section>
      {/* END Линии */}
    </>
  );
}
