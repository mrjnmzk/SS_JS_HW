// task1
console.log('task1');
let x = 1;
let y = 2;

let res1 = x + String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x + y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseInt(Boolean(x + y));// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"


// task2
console.log('task2');

let number = prompt('Enter your number');

if ((number % 2 === 0) && (number > 0) && (number % 7 === 0)) {
    console.log(`${number} is positive, even and a multiple of 7`);
} else if ((number % 2 === 0) && (number > 0)) {
    console.log(`${number} is positive and even`);
} else if (number % 7 === 0 && (number != 0)) {
    console.log(`${number} is multiple of 7`);
} else {
    console.log(`${number} is NaN or does not meet any criteria`);
}


// task3
console.log('task3');

let array = [];

array[0] = 7;
array[1] = 'JS is Awesome';
array[2] = false;
array[3] = null;

console.log(array.length);

array[4] = prompt('Enter your value');

console.log(array[4]);

array.shift();

console.log(array);

// task4
console.log('task4');
let cities = ["Rome", "Lviv", "Warsaw"];

console.log(cities.join('*'));

// task5
console.log('task5');

let isAdult = parseInt(prompt('Enter your age'));

let result = (isAdult >= 18 ? `you are adult` : 'you are not adult');

alert(result);

// task6

console.log('task6');

let side1 = parseInt(prompt('Enter your side1'));
let side2 = parseInt(prompt('Enter your side2'));
let side3 = parseInt(prompt('Enter your side3'));



if (side1 > 0 && side2 > 0 && side3 > 0 && (side1 + side2) > side3 && (side1 + side3) > side2 && (side2 + side3) > side1) {
    let perimetre = (side1 + side2 + side3) / 2;
    let area = (perimetre * (perimetre - side1) * (perimetre - side2) * (perimetre - side3) ** 1 / 2);
    console.log(`the area of triangle is ${area.toFixed(3)}`);
} else {
    console.log('incorect data');
} if ((side1 * side1) + (side2 * side2) == (side3 * side3)) {
    console.log('it is a right triangle');
} else {
    console.log('it is not a right triangle');
}

// task7

console.log('task7');

let time = new Date();

console.log(time)

let curentTime = time.getHours();

switch (curentTime) {
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        alert('good night');
        break;

    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        alert('good morniing');
        break;

    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        alert('good day');
        break;

    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
        alert('good evening');
        break;
}


if (curentTime === 23 || curentTime < 5) {
    alert('good night')
} else if (curentTime >= 5 && curentTime < 11) {
    alert('good morniing')
} else if (curentTime >= 11 && curentTime < 17) {
    alert('good day')
} else {
    alert('good evening')
}
