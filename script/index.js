const events = data.events;
const contenedor = document.getElementById('contenedor');

pintarCards(events);

function pintarCards(arrayDatos) {
  if(arrayDatos.length == 0){
    contenedor.innerHTML = "<h3>No hay coincidencia</h3>"
    return
  }
  
  let cards = '';
  arrayDatos.forEach(element => {
    cards += `
      <div class="card" style="max-width: 18rem;" id="cardsmall">
        <div class="csmall">
          <img src="${element.image}" class="card-img-top" alt="" id="imagen">
          <div class="card-body">
            <h5 class="card-title" id="titulo">${element.name}</h5>
            <p class="card-text" id="descripcion">${element.description}</p>
          </div>
          <div class="card-footer">
            <h6>Price: $<p id="precio">${element.price}</p></h6>
            <a href="./details.html?name=${element.name}" class="btn">Ver más ...</a>
          </div>
        </div>
      </div>
    `;
  });
  contenedor.innerHTML = cards;
}

