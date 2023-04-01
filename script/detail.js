// Obtiene los eventos desde la API
const apiUrl = 'https://mindhub-xj03.onrender.com/api/amazing';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const events = data.events;
    const queryString = location.search;
    const params = new URLSearchParams(queryString);
    const nombreEvento = params.get('name');
    const event = events.find((element) => element.name === nombreEvento);
    renderEventDetails(event, '#event-details');
    renderFilters(events, categoriasFiltradas, '#checks');
    renderEventCards(events);
  })
  .catch(error => {
    console.error(error);
  });

function renderEventDetails(event, selector) {
  const element = document.querySelector(selector);
  element.innerHTML = `
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
  `;
}
