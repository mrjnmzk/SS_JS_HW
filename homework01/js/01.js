// task1
console.log('task1 see in htlm');

// task2
console.log('task2');

let lastName = 'muzyka';
console.log(lastName);

// task3
console.log('task3');

let text = 'Lviv';
let data = '755';
console.log(`value of text ${text}`);
console.log(`value of text ${data}`);

text = data;
console.log(`value of text ${text}`);
console.log(`value of text ${data}`);

// task4
console.log('task4');

let myCity = {
    'name': 'Lviv',
    'age': 755,
    'isOld': true,
    'what': null
}
myCity.whatCountry;

console.log(myCity);
console.log(typeof whatCountry);

// task5
console.log('task5');

let isAdult = confirm('Are you sure that you adult');
console.log(isAdult);

//task6
console.log('task6');

let name = 'marian';
let surname = 'muzyka';
let group = 'JS fundamental';
let birthYear = 1985;

let isSingle = true;

console.log(`This is a ${typeof birthYear} variable type: ${birthYear}`);
console.log(`This is a ${typeof isSingle} variable type: ${isSingle}`);
console.log(`This is a ${typeof name} ${typeof surname} ${typeof group}  variable type: ${name} ${surname} ${group}`);

let someVariable = null;
let unknownVariable;

console.log(typeof someVariable);
console.log(typeof unknownVariable);

//task7
console.log('task7');

let login = prompt('Enter your login');
let email = prompt('Enter your email');
let pass = prompt('Enter your pass');

alert(`Dear ${login}, your email is ${email}, your password is ${pass}`);

// task8
console.log('task8');

let min = 60;
let hour = min * 60;
let day = hour * 24;
let month = day * 31;

console.log(`in hour ${hour} sec`);
console.log(`in day ${day} sec`);
console.log(`in month ${month} sec`);
