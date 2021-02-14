// task 1

document.getElementById('test').innerHTML = 'Last';

document.querySelector('#test').innerHTML = 'Last';

document.body.firstElementChild.innerHTML = 'Last';

// task 2

let image = document.querySelector(".image");

image.src = "cat.jpg";

alert(image.outerHTML);

// task 3

let paragraphs = document.querySelectorAll("div > p");
console.log(paragraphs)

for (let i = 0; i < paragraphs.length; i++) {
    console.log(`Selector text ${i}: ${paragraphs[i].innerHTML}`);
}

// task 4

let listElems = document.querySelector("#list");
let elemFirst = listElems.firstElementChild;
let elemLast = listElems.lastElementChild;
let elem2 = elemFirst.nextElementSibling;
let elem3 = elem2.nextElementSibling;
let elem4 = elemLast.previousElementSibling;

console.log(elemFirst.innerHTML, elemLast.innerHTML, elem2.innerHTML, elem4.innerHTML, elem3.innerHTML);

alert(elemFirst.innerHTML);
alert(elemLast.innerHTML);
alert(elem2.innerHTML);
alert(elem4.innerHTML);
alert(elem3.innerHTML);