import Image, { StaticImageData } from "next/image";
import classes from "./styles/page-home.module.css";
import { DATA_MENU } from "@/components/data/data";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Submenu {
  id: number | null;
  title: string;
  href: string;
  image: string | StaticImport;
}
const stack = DATA_MENU[1].submenu;

export function Programs() {
  return (
    <section className={classes.programs}>
      <div className={classes.programs_block}>
        <h2>Благотворительные программы</h2>

        <div className={classes.programs_list}>
          {stack &&
            stack.map((item: Submenu) => {
              return (
                <div key={item.id} className={classes.programs_list_item}>
                  <div className="w-[250px] h-[250px] rounded-full overflow-hidden border-solid border-2 border-cyan-500">
                    <Link href={item.href}>
                      <Image
                        src={item.image}
                        alt={`Благотворительная программа «${item.title}»`}
                        className="w-full h-full object-cover transition-opacity hover:opacity-90"
                      />
                    </Link>
                  </div>
                  <div className={classes.programs_list_item_title}>
                    <Link href={item.href}>«{item.title}»</Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
