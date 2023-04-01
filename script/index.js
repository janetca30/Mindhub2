const apiUrl = 'https://mindhub-xj03.onrender.com/api/amazing';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const events = data.events;
    const categorias = events.map(event => event.category);
    const categoriasFiltradas = categorias.filter((category, index) => {
    return categorias.indexOf(category) === index;
});
    printChecksYBuscador(events, categoriasFiltradas, '#checks');
    pintarCards(events);
  })
  .catch(error => console.error(error));

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
            <a href="./details.html?name=${element.name}" class="btn mas">Ver más ...</a>
          </div>
        </div>
      </div>
    `;
  });
  contenedor.innerHTML = cards;
}


function printChecksYBuscador(eventos, categorias, contenedor) {
  const contenedorHTML = document.querySelector(contenedor);
  contenedorHTML.id = 'checks-container';
  const checkboxesHTML = categorias.map(category => {
      return `
      <fieldset>
          <label class="contact-label" for="${category}">${category}</label>
          <input class="class_checks contact-input" type="checkbox" value="${category}" name="categoria" id="${category}" data-category="${category}">
      </fieldset>
  `;
  });
  const inputHTML = document.createElement('input');
  inputHTML.type = 'text';
  inputHTML.className = 'form-control';
  inputHTML.placeholder = 'search';
  inputHTML.autocomplete = 'off';
  inputHTML.addEventListener('keyup', captureData);
  contenedorHTML.innerHTML = checkboxesHTML.join('');
  contenedorHTML.appendChild(inputHTML)

function captureData() {
  const categoriasSeleccionadas = Array.from(document.querySelectorAll('#checks-container input[type="checkbox"]'))
  .filter(checkbox => checkbox.checked)
  .map(checkbox => checkbox.getAttribute('data-category'));
  const textoBusqueda = document.querySelector('#checks-container input[type="text"]').value;
  const eventosFiltrados = filtrarEventos(eventos, textoBusqueda, categoriasSeleccionadas);
  pintarCards(eventosFiltrados);
  
}
contenedorHTML.addEventListener('change', captureData);
}

function filtrarEventos(eventos, texto, categoriasSeleccionadas) {
  return eventos.filter(evento => {
  return (categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(evento.category))
  && evento.name.toLowerCase().includes(texto.toLowerCase());
});
}



