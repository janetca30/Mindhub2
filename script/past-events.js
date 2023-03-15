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
        <div class="col">
            <div class="cardPast" id="cardPast">
                <div class="csmall">
                    <img src="${pastArray[i].image}" class="card-img-top" alt="" id="imagen">
                    <div class="card-body">
                        <h5 class="card-title"id="titulo">${pastArray[i].name}</h5>
                        <p class="card-text" id="descripcion">${pastArray[i].description}</p>
                    </div>
                    <div class="card-footer">
                        <h6>Price: $<p id="precio">${pastArray[i].price}</p></h6>
                        <a class="mas" href="./details.html" onclick="captureCard(this)"  data-nombre ="${pastArray[i].name}">Ver más ...</a>
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

