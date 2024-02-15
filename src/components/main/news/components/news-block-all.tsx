import { NEWS } from "@/components/data/news";
import classes from "../styles/news.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { NewsBlockItem } from "./news-block-item";

interface DataNews {
  id: number;
  img: string | StaticImport;
  date: string;
  title: string;
  text: string;
}

const dataNews: DataNews[] = NEWS;

export function NewsBlockAll() {
  return (
    <div className={classes.content_news}>
      <h2>Все новости</h2>

      <ul className={classes.news_list}>
        {dataNews &&
          dataNews.map((item) => {
            return (
              <NewsBlockItem
                key={item.id}
                image={item.img}
                title={item.title}
                id={item.id}
                date={item.date}
              />
            );
          })}
      </ul>
    </div>
  );
}
