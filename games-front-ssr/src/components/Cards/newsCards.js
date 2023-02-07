import { useEffect, useState } from "react";
import styles from "./Cards.module.css";

const backendUrl = "http://localhost:1337";

const LoadNews = () => {
  const [news, setNews] = useState({ data: [] });

  const loadNews = async () => {
    const data = await fetch(
      `${backendUrl}/api/news?populate=*&sort[0]=publishedAt:desc`
    );
    const news = await data.json();
    setNews(news);
  };

  useEffect(() => {
    loadNews();
  }, []);

  const newsElements = news.data.map((data) => (
    <NewsCard key={data.id} data={data.attributes} />
  ));
  return <div>{newsElements}</div>;
};

const NewsCard = ({ data }) => {
  return (
    <article
      className={
        data.Image.data != null
          ? styles.contentWithImage
          : styles.contentWithoutImage
      }
    >
      <img
        src={
          data.Image.data != null
            ? backendUrl + data.Image.data.attributes.url
            : ""
        }
        placeholder="blur"
        className={styles.picture}
      ></img>
      <div
        className={
          data.Image.data != null
            ? styles.contentWithImageContent
            : styles.contentWithouImageContent
        }
      >
        <h3 className={styles.banner}>{data.Title}</h3>
        <h4 className={styles.text}>{data.Text}</h4>
      </div>
    </article>
  );
};

export default LoadNews;
