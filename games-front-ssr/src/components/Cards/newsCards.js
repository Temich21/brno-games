import styles from "./Cards.module.css"

const backendUrl = "http://localhost:1337"

const LoadNews = async () => {
    const data = await fetch(
        `${backendUrl}/api/news?populate=*&sort[0]=publishedAt:desc`
    )
    const news = await data.json()
    news.data.forEach(CreateNewsCard)
}

const CreateNewsCard = (data) => {
    data = data.attributes
    return (
        <article className={data.Image.data != null ? styles.contentWithImage : styles.contentWithoutImage}>
            <img src={data.Image.data != null ? backendUrl + data.Image.data.attributes.url : null} placeholder="blur" className={styles.picture}></img>
            <div className={data.Image.data != null ? styles.contentWithImageContent : styles.contentWithouImageContent}>
                <h3 className={styles.banner}>{data.Title}</h3>
                <h4 className={styles.text}>{data.Text}</h4>
            </div>
        </article >
    )
}

export default LoadNews