import Image from "next/image";
import classes from "../styles/news.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  id: number;
  image: string | StaticImport;
  date: string;
  title: string;
}
export function NewsBlockItem({ date, title, image, id }: Props) {
  return (
    <li>
      <div className="w-80 h-52">
        <Link href={`/news/${id}`}>
          <Image src={image} alt={title} className="object-cover h-full" />
        </Link>
      </div>
      <div className={classes.news_item_date}>{date}</div>
      <div className="text-sky-700 text-base my-4">{title}</div>
      <div>
        <Button asChild>
          <Link className="text-white text-base" href={`/news/${id}`}>
            Читать полностью
          </Link>
        </Button>
      </div>
    </li>
  );
}
