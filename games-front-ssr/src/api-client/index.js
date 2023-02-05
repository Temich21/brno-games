const backendUrl = "http://localhost:1337";

export const loadNews = async () => {
  const data = await fetch(
    `${backendUrl}/api/news?populate=*&sort[0]=publishedAt:desc`
  );
  const news = await data.json();

  return news;
};
