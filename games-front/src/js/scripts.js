const backendUrl = "http://localhost:1337";

async function loadNews() {
    const data = await fetch(
        `${backendUrl}/api/news?populate=*&sort[0]=publishedAt:desc`
    );
    const news = await data.json();
    news.data.forEach(createCardNews);
}

function createCardNews(data) {
    const newElement = document.createElement("article");
    const titleElement = document.createElement("h3");
    const textElement = document.createElement("h4");
    const divScript = document.querySelector("main");

    if (data.attributes.Image.data != null) {
        const image = backendUrl + data.attributes.Image.data.attributes.url;
        const imageElement = document.createElement("img");
        const contentElement = document.createElement("div");

        newElement.classList.add("contentWithImage");
        contentElement.classList.add("contentWithImageContent");
        imageElement.src = image;

        const element = titleAndTextAppend(
            contentElement,
            titleElement,
            textElement,
            data
        );

        newElement.appendChild(imageElement);
        newElement.appendChild(element);
        divScript.appendChild(newElement);
    } else {
        newElement.classList.add("contentWithoutImage");

        const element = titleAndTextAppend(newElement, titleElement, textElement, data);

        divScript.appendChild(element);
    }
}

function titleAndTextAppend(element, titleElement, textElement, data) {
    element.appendChild(titleElement);
    element.appendChild(textElement);

    titleElement.innerText = data.attributes.Title;
    textElement.innerText = data.attributes.Text;
    return element;
}

async function loadGames(category = null) {
    const url = `${backendUrl}/api/games?populate=*&sort[0]=publishedAt:desc`;

    const query = category
        ? `${url}&${`filters[game_type][GameTypeName][$eq]=${encodeURIComponent(
            category
        )}`}`
        : url;

    const data = await fetch(query);
    const games = await data.json();
    games.data.forEach(createCardGame);
}

function createCardGame(data) {
    const newElement = document.createElement("article");
    const titleElement = document.createElement("h3");
    const textElement = document.createElement("h4");
    const divScript = document.querySelector("main");

    if (data.attributes.Image.data != null) {
        const image = `${backendUrl}${data.attributes.Image.data.attributes.url}`;
        const imageElement = document.createElement("img");
        const contentElement = document.createElement("div");

        newElement.classList.add("contentWithImage");
        contentElement.classList.add("contentWithImageContent");
        imageElement.src = image;

        const [title, text] = contentUnification(data, titleElement, textElement);

        contentElement.appendChild(title);
        contentElement.appendChild(text);

        newElement.appendChild(imageElement);
        newElement.appendChild(contentElement);
        divScript.appendChild(newElement);
    } else {
        newElement.classList.add("contentWithoutImage");

        const [title, text] = contentUnification(data, titleElement, textElement);

        newElement.appendChild(title);
        newElement.appendChild(text);
        divScript.appendChild(newElement);
    }
}

function contentUnification(data, titleElement, textElement) {
    const { GM, Description, Level, Players, Game_place } = data.attributes;

    const GMInfo = GM.data.attributes;
    const description = Description;
    const level = Level;
    const players = Players.data;
    const gamePlace = Game_place.data.attributes;
    const date = new Date(data.attributes.Date);

    const padding = 'padding-bottom:4px'

    titleElement.innerText = data.attributes.Game_name;
    textElement.innerHTML = `<div class='GM'>GM:${GMInfo.Name} | Telegram:
    <a href="https://telegram.me/${GMInfo.Telegram.slice(1, -1)}">${GMInfo.Telegram}</a></div> 
                             <div style="font-family:cursive; ${padding}" >${description}</div> 
                             <div style="${padding}">Уровень персонажей: ${level}</div>
                             <div style="${padding}">Игроки:<ul>${printPlayerList(
        players
    )}</ul></div>
                             <div style="${padding}">Место проведения: ${gamePlace.Name
        } | Адрес: ${gamePlace.Description}</div>
                             <div style="${padding}">Дата проведения: ${dateEditing(date)}</div>`;

    return [titleElement, textElement];
}

function printPlayerList(players) {
    return players.map(printPlayer).join("");
}

const printPlayer = (player) => `
    <li>${player.attributes.Name} | <a href="https://telegram.me/${player.attributes.Telegram.slice(1, -1)}">${player.attributes.Telegram}</a></li>
`;

function dateEditing(date) {
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
