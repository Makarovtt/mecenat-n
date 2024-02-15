import classes from "./styles/page-home.module.css";
import { NewsBlockAll } from "../news/components/news-block-all";

export function News() {
  return (
    <section className={classes.news}>
      <div className={classes.news_block}>
        <NewsBlockAll />
      </div>
    </section>
  );
}
