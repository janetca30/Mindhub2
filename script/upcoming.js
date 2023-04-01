const currentData = 'https://mindhub-xj03.onrender.com/api/amazing';
const input = document.querySelector('input');
const containerCheck = document.getElementById('checks');
const containerSearch = document.getElementById('contenedor');
let arrayEvents  = [];


async function getData() {

    try{
        let response = await fetch (currentData);
        let api = await response.json();


        input.addEventListener('input',superFilter)
        containerCheck.addEventListener('change',superFilter)



        events = api.events
        for (const event of api.events){
            if(event.date>api.currentDate){
                
                arrayEvents.push(event)
            }
        }

        rendersCards(arrayEvents)
        addChecks(arrayEvents)


        } catch (fail) {
            console.log(fail.message);
        }
    }
    console.log(arrayEvents);

    getData();


function rendersCards(array){
    let container = document.querySelector("#contenedor");
    if(array.length == 0){
        container.innerHTML = "<h2 class='display-1 fw-bolder'>Not Found</h2>"
        return
    }

    let htmlCards = "";
        array.forEach(array => htmlCards += showCards(array));
        container.innerHTML = htmlCards;
}

function showCards(element){
        return `
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
    `
}

function addChecks(array){
    let checks = ''
    let repeat = array.map(element => element.category)
    let range = new Set(repeat.sort((a,b)=>{
        if(a>b){
            return 1
        }
        if(a<b){
            return -1
        }
        return 0
    }))
    range.forEach(element => {
        checks += `
        <fieldset>
            <label class="contact-label" for="${element}">${element}</label>
            <input class="class_checks contact-input" type="checkbox" value="${element}" name="categoria" id="${element}" data-category="${element}">
        </fieldset>
`
    })
    containerCheck.innerHTML = checks
}

function filterText(array, text){
    let arrayFilter = array.filter (element => element.name.toLowerCase().includes(text.toLowerCase()))
    return arrayFilter
}

function filterCategory(array){
    let checkBoxes = document.querySelectorAll("input[type='checkbox']")
    console.log(checkBoxes);
    let checks = Array.from(checkBoxes)
    console.log(checks);
    let checksChecked = checks.filter(check => check.checked)
    console.log(checksChecked);
    if(checksChecked.length == 0){
        return array
    }
    let checkValues = checksChecked.map(check => check.value)
    console.log(checkValues);
    let arrayFilter = array.filter(element => checkValues.includes(element.category))
    console.log(arrayFilter);
    return arrayFilter
}

function superFilter(){
    let arrayFilter = filterText(arrayEvents, input.value)
    let arrayFilter2 = filterCategory(arrayFilter)
    rendersCards(arrayFilter2)
}