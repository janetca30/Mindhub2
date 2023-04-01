const currentData = 'https://mindhub-xj03.onrender.com/api/amazing';
let arrayEvents  = [];
let pastEvents = [];
let upEvents = [];

fetch(currentData)
    .then(response => response.json())
    .then(data => {
        events = data.events;
        update = data.currentDate;

for (const event of events) {
    arrayEvents.push(event);
}

for (let i = 0; i < events.length; i++) {
    if (events[i].date > update) {
    upEvents.push(events[i]);
    } else {
    pastEvents.push(events[i]);
    }
}

highestAttendance(pastEvents);
lowestAttendance(pastEvents);
HighestCapacity(arrayEvents);
table1();
table2();
table3();
})
.catch(error => console.error(error));

function highestAttendance(array){
    return array.reduce((account, value) => {
        if (((value.assistance*100)/value.capacity) > ((account.assistance*100)/account.capacity)){
            return value 
        } else {
            return account
        }
    })
}
    
function lowestAttendance(array){
    return array.reduce((account, value) => {
        if (((value.assistance*100)/value.capacity) < ((account.assistance*100)/account.capacity)){
            return value 
        } else {
            return account
        }
    })
}

function HighestCapacity(array) {
    return array.reduce((account, value) => {
        if (value.capacity > account.capacity){
            return value
        } else {
            return account
        }
    })
}
function table1(){
    let container = document.querySelector(".table1")
    let bodyHtml = "";
    let highestPercentage = highestAttendance(pastEvents)
    let lowestPercentage = lowestAttendance(pastEvents)
    let largeCapacity = HighestCapacity(events)
    bodyHtml += `
<div class="table1">
    <table class="table table-bordered border-dark">
        <thead>
            <p class="psub">Events statistics</p>
            <tr>
                <th class="t1th1">Events with the highest percentage of attendance</th>
                <th class="t1th2">Events with the lowest percentage of attendance</th>
                <th class="t1th3">Event with larger capacity</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>${highestPercentage.name} </td>
            <td>${lowestPercentage.name}</td>
            <td>${largeCapacity.name}</td>
        </tr>
        </tbody>
    </table>
</div>       
    `
    container.innerHTML = bodyHtml;
}
    
function arrayCategory(events){
    let categories = [];
    events.forEach(element => {
        if (! categories.includes(element.category)){
            categories.push(element.category)
        }
    }) 
    return categories;
}
function table2(){
    let container = document.querySelector(".tabla3")
    let bodyHtml = "";
    let categorias = arrayCategory(upEvents)
    categorias.forEach(e => {
        let counter = 0;
        let revenues = 0;
        upEvents.forEach(element => {
            if(element.category == e){
                revenues += (element.price*element.estimate)
            }
            return revenues
        })
        
        let percentage = 0;
        upEvents.forEach(element => {
            if(element.category == e){
                counter++
                percentage += ((element.estimate*100)/element.capacity)
            }
        })
        percentage = (percentage/counter).toFixed(2)
        bodyHtml += `
                <tbody class="tabla3">
                    <tr>
                        <td>${e}</td>
                        <td>${revenues}</td>
                        <td>${percentage}%</td>
                    </tr>
                </tbody>
        `
    });
    container.innerHTML = bodyHtml;
}

function table3(){
    let container = document.querySelector(".body")
    let bodyHtml = "";
    let categorias = arrayCategory(pastEvents)
    categorias.forEach(e => {
        let counter = 0;
        let revenues = 0;
        pastEvents.forEach(element => {
            if(element.category == e){
                revenues += (element.price*element.assistance)
            }
            return revenues
        })
        
        let percentage = 0;
        pastEvents.forEach(element => {
            if(element.category == e){
                counter++
                percentage += ((element.assistance*100)/element.capacity)
            }
        })
        percentage = (percentage/counter).toFixed(2)
        bodyHtml += `
            <tbody class="body">
                <tr>
                    <td>${e}</td>
                    <td>${revenues}</td>
                    <td>${percentage}%</td>
                </tr>
                
            </tbody>
        `
    });
    container.innerHTML = bodyHtml;
}