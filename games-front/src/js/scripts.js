async function loadPlayers(){
    const data = await fetch("http://localhost:1337/api/players")
    const players = await data.json()
    console.log(players)
    players.data.forEach(printPlayer);
}

window.addEventListener("load",loadPlayers)
function printPlayer(player){
    const element = document.querySelector("h2")
    element.innerText = element.innerText + "\n" +player.attributes.Name
}



