import React from "react"
import styles from "../styles/global.css"

const backendUrl = "http://localhost:1337"

class loadNews extends React.Component {
    async render() {
        const data = await fetch(
            `${backendUrl}/api/news?populate=*&sort[0]=publishedAt:desc`
        )
        const news = await data.json()
        return news.data.forEach(createNewsCard)
    }

    createNewsCard(data) {
        data = data.attributes
        return (
            <article className={data.Image.data != null ? styles.contentWithImage : styles.contentWithoutImage}>
                <img src={data.Image.data != null ? backendUrl + data.Image.data.attributes.url : nule} placeholder="blur"></img>
                <div className={data.Image.data != null ? styles.contentWithImageContent : nule}>
                    <h3>{data.Title}</h3>
                    <h4>{data.Text}</h4>
                </div>
            </article >
        )
    }
}

export default loadNews