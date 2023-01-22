// async function loadPlayers(){
//     const data = await fetch("http://localhost:1337/api/players")
//     const players = await data.json()
//     console.log(players)
//     players.data.forEach(printPlayer);
// }

// window.addEventListener("load",loadPlayers)
// function printPlayer(player){
//     const element = document.querySelector("h2")
//     element.innerText = element.innerText + "\n" +player.attributes.Name
// }

// async function loadPlayers(){
//     const data = await fetch("http://localhost:1337/api/players")
//     const players = await data.json()
//     console.log(players)
//     players.data.forEach(printPlayer);
// }

// window.addEventListener("load",loadPlayers)
// function printPlayer(player){
//     const element = document.querySelector("h2")
//     element.innerText = element.innerText + "\n" +player.attributes.Name
// }

async function loadNews() {
  const data = await fetch(
    "http://localhost:1337/api/news?populate=*&sort[0]=publishedAt:desc"
  );
  const news = await data.json();
  news.data.forEach(createCardNews);
}

function createCardNews(data) {
  const newElement = document.createElement("div");
  const titleElement = document.createElement("h3");
  const textElement = document.createElement("h4");
  const divScript = document.querySelector(".script"); // нужно ли? по факту просто достаточно вставить в документ

  if (data.attributes.Image.data != null) {
    const image =
      "http://localhost:1337" + data.attributes.Image.data.attributes.url;
    const imageElement = document.createElement("img");
    const contentElement = document.createElement("div");

    newElement.classList.add("contentWithImage");
    contentElement.classList.add("contentWithImageContent");
    imageElement.src = image;

    element = TitleAndTextAppend(
      contentElement,
      titleElement,
      textElement,
      data
    ); // коректная ли функция?

    newElement.appendChild(imageElement);
    newElement.appendChild(element);
    divScript.appendChild(newElement);
  } else {
    newElement.classList.add("contentWithoutImage");

    element = TitleAndTextAppend(newElement, titleElement, textElement, data);

    divScript.appendChild(element);
  }
}

function TitleAndTextAppend(element, titleElement, textElement, data) {
  element.appendChild(titleElement);
  element.appendChild(textElement);

  titleElement.innerText = data.attributes.Title;
  textElement.innerText = data.attributes.Text;
  return element;
}

async function loadGames(category = false) {
  const data = await fetch("http://localhost:1337/api/games?populate=*");
  const games = await data.json();
  if (category) {
    games.data = games.data.filter(
      (data) =>
        data.attributes.game_type.data.attributes.GameTypeName == category
    );
  }
  games.data.forEach(createCardGame);
}

function createCardGame(data) {
  const newElement = document.createElement("div");
  const titleElement = document.createElement("h3");
  const textElement = document.createElement("h4");
  const divScript = document.querySelector(".script"); // нужно ли? по факту просто достаточно вставить в документ

  if (data.attributes.Image.data != null) {
    const image =
      "http://localhost:1337" + data.attributes.Image.data.attributes.url;
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
  const GM = data.attributes.GM.data.attributes;
  const description = data.attributes.Description;
  const level = data.attributes.Level;
  const players = data.attributes.Players.data;
  const gamePlace = data.attributes.Game_place.data.attributes;
  const date = new Date(data.attributes.Date);

  titleElement.innerText = data.attributes.Game_name;
  textElement.innerHTML = `<div>GM:${GM.Name} | Telegram:${GM.Telegram}</div> 
                             <div>${description}</div> 
                             <div>Уровень персонажей: ${level}</div>
                             <div>Игроки:<ul>${playerPrint(players)}</ul></div>
                             <div>Место проведения: ${
                               gamePlace.Name
                             } | Адрес: ${gamePlace.Description}</div>
                             <div>Дата проведения: ${dateEditing(date)}</div>`;

  return [titleElement, textElement];
}

function playerPrint(players) {
  let playerNames = "";
  for (var i = 0; i < players.length; i++) {
    const playerName =
      "<li>" +
      players[i].attributes.Name +
      "|" +
      players[i].attributes.Telegram +
      "</li>";
    playerNames += playerName;
  }
  return playerNames;
}

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
