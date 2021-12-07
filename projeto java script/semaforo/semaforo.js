const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id] ();
}
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex :0;

  
const changercolor = () => {
    const color =["red","yellow","green"]
    const color = colors[colorIndex];
    turnOn[color] ();
    nextIndex();
}
const stopAutomatic = () => {
        clearInterval(intervalId);
    }
const turnOn =  {
    "red":    () => img.src = "./img/s verde.jpg",
    "yellow": () => img.src = "./img/s amarelo.jpg",
    "green":  () => img.src = "./img/s vermelho.jpg",
    "automatic":   () => intervalId= setInterval( changecolor,1000)
}
buttons.addEventListener("click", trafficLight);