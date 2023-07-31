import { createClient, MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
});

//microCMSで投稿した全てのブログ記事を取得する関数
export const getBlogs = async (queries: MicroCMSQueries) => {
  return await client.get({ endpoint: "blog", queries });
};

//記事の内容を動的に取得する
export const getBlogDetail = async (
  blogid: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail({
    endpoint: "blog",
    contentId: blogid,
    queries,
  });
};
