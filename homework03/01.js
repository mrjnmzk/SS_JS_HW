let num = [2, 3, 4, 5];
let m = 1;

for (i = 0; i < num.length; i++) {
    m *= num[i];
}
console.log(m);


while (i < num.length) {
    m *= num[i];
}
console.log(m);


//task2

for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);

    } else {
        console.log(`${i} is odd`);
    }
}

//task3

function randArray(k) {
    result = [];
    for (i = 0; i < k; i++) {
        result.push(Math.floor(Math.random() * 500) + 1);
    }
    console.log(result);
}

randArray(5)

//task4

let a = parseFloat(prompt('Enter your integer number'));
let b = parseFloat(prompt('Enter your degree'));

function raiseToDegree(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        result = a ** b;
        alert(`${a} ^ ${b} is: ${result}`);
    } else {
        alert(`wrong input`);
    }

}

raiseToDegree(a, b)

//task5

let min = Infinity;

function findMin() {
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i]
        }
    }
    return min;
}

console.log(findMin(12, 14, 4, -4, 0.2));

// task6


function findUnique(arr) {
    let mySet = new Set(arr);
    if (mySet.size == arr.length) {
        console.log(true);
    } else {
        console.log(false);
    }
}


findUnique([1, 2, 3, 5, 3]);
findUnique([1, 2, 3, 5, 11]);

// task7

function returnLastElement(arr, n) {
    // return (n == 0 || n == undefined || n == 1
    //     ? array[arr.lenght - 1]
    //     : array.slice(arr.lenght - n));
    if (n == 0 || n == 1 || n == undefined) {
        return arr[arr.length - 1];
    } else {
        return arr.slice(arr.length - n)
    }
}

console.log(returnLastElement([3, 4, 10, -5]));      // -5
console.log(returnLastElement([3, 4, 10, -5], 2));   // [10, -5]
console.log(returnLastElement([3, 4, 10, -5], 8)); // [3, 4, 10, -5]

// task8

function capitalLetter(str) {

    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalLetter('i love java script'));
