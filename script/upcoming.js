const events = data.events;
const fechaActual = new Date(data.currentDate); // convertir la fecha actual a objeto Date
const contenedor = document.getElementById('contenedor')

cardList(events)

function cardList(arrayDatos){
    if(arrayDatos.length == 0){
        contenedor.innerHTML = "<h3>No hay coincidencia</h3>"
        return
    }
    let cardf = ''
    // ordenar por fecha de menor a mayor
    arrayDatos.sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(element => {
        // convertir la fecha del evento a objeto Date
        const fechaEvento = new Date(element.date);
        // verificar si la fecha del evento es mayor a la fecha actual
        if (fechaEvento > fechaActual){
            cardf += `
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
            `
        }
    })
    contenedor.innerHTML = cardf
}


function filtrarEventos(eventos, texto, categoriasSeleccionadas) {
    return eventos.filter(evento => {
    return (categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(evento.category))
    && evento.name.toLowerCase().includes(texto.toLowerCase());
});
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
    contenedorHTML.appendChild(inputHTML);

function captureData() {
    const categoriasSeleccionadas = Array.from(document.querySelectorAll('#checks-container input[type="checkbox"]'))
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.getAttribute('data-category'));
    const textoBusqueda = document.querySelector('#checks-container input[type="text"]').value;
    const eventosFiltrados = filtrarEventos(eventos, textoBusqueda, categoriasSeleccionadas);
    cardList(eventosFiltrados);
    

}

contenedorHTML.addEventListener('change', captureData);
}
  
const categorias = events.map(event => event.category);
const categoriasFiltradas = categorias.filter((category, index) => {
    return categorias.indexOf(category) === index;
});
  
printChecksYBuscador(events, categoriasFiltradas, '#checks');