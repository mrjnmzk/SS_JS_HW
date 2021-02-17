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

