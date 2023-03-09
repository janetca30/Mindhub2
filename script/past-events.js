var data = data;
const fechaActual = data.currentDate;
const events = data.events;
let pastArray = [];

function pastCardList(){
    for (let i = 0; i < events.length; i++){
        if (events[i].date < fechaActual){
            pastArray.push(events[i])
        }
    }
}
pastCardList()

let card = document.getElementById('cardPast')

function printCards(){
    for (let i = 0; i < pastArray.length; i++){
        card.innerHTML += `
        <div class="col-sm-3">
        <div class="cardPast" id="cardPast">
            <img src="${pastArray[i].image}" class="card-img-top" alt="" id="imagen">
            <div class="card-body">
                <h5 class="card-title"id="titulo">${pastArray[i].name}</h5>
                <p class="card-text" id="descripcion">${pastArray[i].description}</p>
            </div>
            <div class="card-footer">
                <h6>Price: $<p id="precio">${pastArray[i].price}</p>
                </h6>
                <a class="mas" href="./details.html">Ver más ...</a>
            </div>
        </div>
        </div>
        `
    }

}
printCards(card)

