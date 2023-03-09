var data = data;
const fechaActual = data.currentDate;
const events = data.events;
let upcomingArray = [];

function upcomingCardList(){
    for (let i = 0; i < events.length; i++){
        if (events[i].date > fechaActual){
            upcomingArray.push(events[i])
        }
    }
}
upcomingCardList()

let card = document.getElementById('cardUpcoming')

function printCards(){
    for (let i = 0; i < upcomingArray.length; i++){
        card.innerHTML += `
        <div class="col-sm-3">
        <div class="cardUpcoming" id="cardUpcoming">
            <img src="${upcomingArray[i].image}" class="card-img-top" alt="" id="imagen">
            <div class="card-body">
                <h5 class="card-title"id="titulo">${upcomingArray[i].name}</h5>
                <p class="card-text" id="descripcion">${upcomingArray[i].description}</p>
            </div>
            <div class="card-footer">
                <h6>Price: $<p id="precio">${upcomingArray[i].price}</p>
                </h6>
                <a class="mas" href="./details.html">Ver más ...</a>
            </div>
        </div>
        </div>
        `
    }
    

}
printCards(card)