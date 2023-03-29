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
    pintarCards(eventosFiltrados);
    

}

contenedorHTML.addEventListener('change', captureData);
}
  
const categorias = events.map(event => event.category);
const categoriasFiltradas = categorias.filter((category, index) => {
    return categorias.indexOf(category) === index;
});
  
printChecksYBuscador(events, categoriasFiltradas, '#checks');
  


