const turnon = document.getElementById('turnon');
const turnoff = document.getElementById('turnoff');
const lamp = document.getElementById('lamp');


function lampon() {
    lamp.src = "./img/lampada lg..jpg";
}

function lampoff() {
    lamp.src ="./img/lampada ap..jpg";

}
function lampbroken(){
lamp.src ="./img/lampada qb..jpg";
}
turnon.addEventListener('click',lampon);
turnoff.addEventListener('click',lampoff);
lamp.addEventListener("mouseover", lampon);
lamp.addEventListener("mouseleave", lampoff);
lamp.addEventListener("dblclick", lampbroken);