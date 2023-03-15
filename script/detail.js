
var data = data;
const fechaActual = data.currentDate;
const events = data.events;
let cardArray = [];

var nombreEvento = localStorage.getItem("Evento");
/*reasigno el ("Evento") a */
let filtrado = filterEventsByName(nombreEvento);
let bigCard = document.getElementById('bigCard')

/*recibe el name del index,lo filtra y compara con el event.name */
function filterEventsByName(name) {
    return events.filter(event => event.name === name);
}

/*recorre los elementos de events */
function cardList(){
    for (let i = 0; i < events.length; i++){
        cardArray.push(events[i])
    }
}
cardList()

/*si filtrado es mayor que 0 se crea un index que luego compara el name */
if (filtrado.length > 0) {
    let index = cardArray.findIndex(event => event.name === filtrado[0].name);
    if (index >= 0) {
        printCard(index);
    }
}
function printCard(index){
    let event = events[index];
    let bigCard = document.getElementById('bigCard');  
    bigCard.innerHTML = `
    <div class="container bigCard">
        <div class="row c-home" id="tarjeta">
            <div class="close">
                <a href="./index.html">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bix bi-x-circle-fill" viewBox="0 0 20 20"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                </a>
            </div>
            <div class="imagendiv">
                <img src="${event.image}" class="img-home " alt="" id="imagen">
            </div>
            <div class="contenido">
                <h5 class="tch5" id="titulo">${event.name}</h5>
                <h6>Date:<p id="fecha">${event.date}</p></h6>
                <h6>Descripcion:<p id="descripcion">${event.description}</p></h6>
                <h6>Category:<p id="categoria">${event.category}</p></h6>
                <h6>Place:<p id="lugar">${event.place}</p></h6>
                <h6>Capacity:<p id="capacidad">${event.capacity}</p></h6>
                <h6>Assistance:<p id="asistencia">${event.assistance}</p></h6>
                <h6>Price: $<p id="precio">${event.price}</p></h6>
            </div>
        </div>
    </div>
    `
}

