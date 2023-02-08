import styles from "./Cards.module.css";
import { backendUrl } from "@/constants";

const News = ({ news }) => {
  const newsElements = news.data.map((data) => (
    <NewsCard key={data.id} data={data.attributes} />
  ))
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
      {data.Image.data != null ? (
        <img
          src={backendUrl + data.Image.data.attributes.url}
          className={styles.picture}
        ></img>
      ) : null}

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

export default News;
