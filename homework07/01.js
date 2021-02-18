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

    dovument.getElementById("text").style.fontSize = "20px";
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