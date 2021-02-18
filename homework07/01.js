// task 1

let windowCreate = window.open("about:blank", "", "width=300,height=300");

function changeSize() { 
    windowCreate.resizeTo(500, 500);
}

function moveWindow() { 
    windowCreate.moveTo(200, 200);
}

function closeWindow() { 
    windowCreate.close();
}

setTimeout(changeSize, 2000);
setTimeout(moveWindow, 4000);
setTimeout(closeWindow, 6000);

// task 2

function changeCSS() {
    document.getElementById("text").style.color = "orange";

    document.getElementById("text").style.fontFamily = "Comic Sans MS";

    document.getElementById("text").style.fontSize = "20px";
}

myButton.addEventListener("click", changeCSS);

// task 3

function colorMaker(event) {
    let color = document.body.style.backgroundColor

    if (event.type == "click" && event.target.id == "button01") {
        color = "blue";
    } else if (event.type == "dblclick" && event.target.id == "button02") {
        color = "pink";
    } else if (event.type == "mousedown" && event.target.id == "button03") {
        color = "brown";
    } else if (event.type == "mouseup" && event.target.id == "button03") {
        color = "white";
    } else if (event.type == "mouseover" && event.target.id == "link") {
        color = "yellow";
    } else if (event.type == "mouseout" && event.target.id == "link") {
        color = "white";
    }
    document.body.style.backgroundColor = color;
}
button01.addEventListener("click", colorMaker);
button02.addEventListener("dblclick", colorMaker);
button03.addEventListener("mousedown", colorMaker);
button03.addEventListener("mouseup", colorMaker);

link.addEventListener("mouseover", colorMaker);
link.addEventListener("mouseout", colorMaker);

// task 4

function deleteName() { 
    let select = document.getElementById("guys");
    select.remove(select.selectedIndex);
}

button.addEventListener("click", deleteName);

// task5

function pressBtn(event) {
    let message = document.createElement("p");
    if (event.type == "click") {
        message.innerHTML = "I was pressed";
    } else if (event.type == "mouseover") {
        message.innerHTML = "Mouse on me!";
    } else if (event.type == "mouseout") {
        message.innerHTML = "Mouse is not on me!"
} 
let messages = document.getElementById("messages")
messages.appendChild(message)
}
liveBtn.addEventListener("click", pressBtn);
liveBtn.addEventListener("mouseover", pressBtn);
liveBtn.addEventListener("mouseout", pressBtn);

// task6

function widthHeight() { 
    let text = "";
    text += "<p> Width - " + window.innerWidth + "</p>";
    text += "<p>Height - " + window.innerHeight + "</p>";
    document.getElementById("widthHeight").innerHTML = text;

}

window.addEventListener("resize", widthHeight)
window.addEventListener("load", widthHeight)

// task7

const CITIES = {
    "usa": ["Texas", "Seatle", "Atlanta", "Filadelfia"],
    "ger": ["Berlin", "Munich", "Dresden"],
    "ukr": ["Lviv", "Kyiv", "Lutsk"]
}

function addCities() {
    let cityElement = document.getElementById("cities")
    let countryElement = document.getElementById("country");
    let cities = CITIES[countryElement.value]
    cityElement.innerHTML = "";
    for (let i=0; i<cities.length; i++) {
        let option = document.createElement("option");
        option.text = cities[i];
        cityElement.add(option);
    }
}
function displaySelection() {
    let cityElement = document.getElementById("cities")
    let countryElement = document.getElementById("country");
    let textCountry = countryElement.options[countryElement.selectedIndex].text;
    let textCity = cityElement.options[cityElement.selectedIndex].text;
    let output = document.getElementById("cityAndCountry");
    output.innerText = `${textCountry}, ${textCity}`;
}

country.addEventListener("change", addCities);
cities.addEventListener("change", displaySelection);
country.addEventListener("change", displaySelection);