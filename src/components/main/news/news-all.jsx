import classes from "./styles/news.module.css";
import { NewsBlockAll } from "./components/news-block-all";

export function News() {
	return (
		<section className={classes.content}>
			<div className={classes.content_block}>
				<div className={classes.content_news}>{<NewsBlockAll />}</div>
			</div>
		</section>
	);
}
