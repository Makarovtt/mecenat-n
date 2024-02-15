import { NewsBlockAll } from "./components/news-block-all";
import classes from "./styles/news.module.css";

export default function NewsSingle({ data }) {
  return (
    <section className={classes.content}>
      <div className={classes.content_block}>
        <div className={classes.content_news}>
          <div>
            <h2>{data.title}</h2>
            <div className={classes.news_date}>{data.date}</div>
            <div dangerouslySetInnerHTML={{ __html: data.text }} />
            <br />
            <hr />
            <NewsBlockAll />
          </div>
        </div>
      </div>
    </section>
  );
}
