import { NEWS } from "@/components/data/news";
import NewsSingle from "../../../components/main/news/news-single";
const dataNews = NEWS;

interface GetId {
  single: string;
}
async function getNewsData(pars: GetId) {
  const news = dataNews?.find((item) => item.id === Number(pars?.single));
  return news;
}

export async function generateStaticParams() {
  return [{ single: "1" }, { single: "2" }];
}

interface Props {
  params: {
    single: string;
  };
}
export default async function Home({ params }: Props) {
  const finalData = await getNewsData(params);

  return <NewsSingle data={finalData} />;
}
