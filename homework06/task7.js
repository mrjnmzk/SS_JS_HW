// task 7

let main = document.createElement("main");
main.className = "mainClass check item";
document.body.appendChild(main);

let div = document.createElement("div");
div.id = "myDiv";
main.appendChild(div);

let p = document.createElement("p");
p.innerHTML = "First paragraph";
div.appendChild(p)
console.log(p.innerHTML)
