
var data = data;
const fechaActual = data.currentDate;
const events = data.events;
let cardArray = [];

function cardList(){
    for (let i = 0; i < events.length; i++){
        cardArray.push(events[i])
    }
}
cardList()

let card = document.getElementById('cardsHome');

function printCards(){
    for (let i = 0; i < cardArray.length; i++){
        card.innerHTML += `
        <div class="col-sm-3">
            <div class="card" id="cardsHome">
                <div class="csmall">
                    <img src="${cardArray[i].image}" class="card-img-top" alt="" id="imagen">
                    <div class="card-body">
                        <h5 class="card-title"id="titulo">${cardArray[i].name}</h5>
                        <p class="card-text" id="descripcion">${cardArray[i].description}</p>
                    </div>
                    <div class="card-footer">
                        <h6>Price: $<p id="precio">${cardArray[i].price}</p></h6>
                        <a class="mas" href="./details.html" onclick="captureCard(this)"  data-nombre ="${cardArray[i].name}">Ver más ...</a>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
printCards()
/*capturo el evento onclick y lo guardo en data-nombre*/
function captureCard(nombre) {
    var nombre = nombre.getAttribute("data-nombre");
    
    localStorage.setItem("Evento", nombre);    
}




