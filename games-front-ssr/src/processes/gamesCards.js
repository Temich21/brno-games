import React from "react"
import styles from "../styles/global.css"

const backendUrl = "http://localhost:1337"

class loadGames extends React.Component {
    async render(category = null) {
        const url = `${backendUrl}/api/games?populate=*&sort[0]=publishedAt:desc`

        const query = category
            ? `${url}&${`filters[game_type][GameTypeName][$eq]=${encodeURIComponent(
                category)}`}` : url

        const data = await fetch(query)
        const games = await data.json()
        return games.data.forEach(createCardGame)
    }

    createCardGame(data) {
        data = data.attributes

        return (
            <article className={data.Image.data != null ? styles.contentWithImage : styles.contentWithoutImage}>
                <img src={data.Image.data != null ? backendUrl + data.Image.data.attributes.url : nule} placeholder="blur"></img>
                <div className={data.Image.data != null ? styles.contentWithImageContent : nule}>
                    <h3>{data.Game_name}</h3>
                    <h4>{contentUnification(data)}</h4>
                </div>
            </article>
        )
    }

    contentUnification(data) {
        const GMTelgram = `https://telegram.me/${data.GM.data.attributes.Telegram.slice(1, -1)}`

        return (
            <div>
                <div className="GM"> {data.GM.data.attributes.Name} |
                    Telegram: <a href={GMTelgram}>{data.GM.data.attributes.Telegram}</a>
                </div>
                <div style="font-family:cursive">Уровень персонажей: {data.level}</div>
                <div>Игроки:<ul>{printPlayerList(data.Players)}</ul></div>
                <div>Место проведения: {data.Game_place.data.attributes.Name}
                    | Адрес: {data.Game_place.data.attributes.Description}</div>
                <div>Дата проведения: {dateEditing(new Date(data.Date))}</div>
            </div>
        )
    }

    printPlayerList(players) {
        return players.map(printPlayer).join("");
    }

    printPlayer(player) {
        `
          <li>${player.attributes.Name} | 
          <a href="https://telegram.me/${player.attributes.Telegram.slice(1, -1)}">
          ${player.attributes.Telegram}</a></li>
      `}

    dateEditing(date) {
        const day = date.getDay();
        const days = [
            "Воскресенье",
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
        ];
        const dayName = days[date.getDay()];

        const year = date.getFullYear();

        const months = {
            0: "Января",
            1: "Февраля",
            2: "Марта",
            3: "Апреля",
            4: "Мая",
            5: "Июня",
            6: "Июля",
            7: "Августа",
            8: "Сентября",
            9: "Октября",
            10: "Ноября",
            11: "Декабря",
        };
        const monthName = months[date.getMonth()];

        const hour = date.getHours();

        const minutes = date.getMinutes();

        const formatted = `${dayName}, ${day} ${monthName} ${year} в ${hour}:${minutes}0`;

        return formatted;
    }

}

export default loadGames