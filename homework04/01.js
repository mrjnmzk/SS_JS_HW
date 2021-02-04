// task01

function calcRectangleArea(width, height) {
    let area = width * height
    if (isNaN(width) || isNaN(height)) {
        throw 'is NaN';
    }
    console.log(area);
}
try {
    calcRectangleArea(1, 'i');
} catch (exception) {
    console.error(exception);
}

// task02

function checkAge() {
    let age = prompt('Enter your age');
    if (age == " ") {
        throw new Error('The field is empty! Please enter your age');
    } else if (isNaN(age)) {
        throw new Error('Enter a number');
    } else if (age < 14) {
        throw new Error('Drink milk with cookie')
    } else {
        alert('You have acces to content')
    }
    return age;
}

try {
    result = checkAge();
} catch (exception) {
    alert(exception);

}

// task03

class MonthException {
    constructor(message) {
        this.message = message;
        this.name = 'MonthException'
    }
}

function showMonthName(month) {
    switch (month) {
        case 1:
            return 'January';

        case 2:
            return 'February';

        case 3:
            return 'March';

        case 4:
            return 'April';

        case 5:
            return 'May';

        case 6:
            return 'June';

        case 7:
            return 'July';

        case 8:
            return 'August';

        case 9:
            return 'September';

        case 10:
            return 'October';

        case 11:
            return 'November';

        case 12:
            return 'December';

        default:
            throw new MonthException('Incorrect month number');

    }
}

console.log(showMonthName(5));
// console.log(showMonthName(14));

function checkMonth(month) {
    let nameOfMonth;
    try {
        nameOfMonth = showMonthName(month)
    } catch (e) {
        if (e instanceof MonthException) {
            alert(e.name + "- " + e.message)
        }
    }
    return nameOfMonth;

}

let checkMonthNumber = parseInt(prompt('Enter number of month'));
console.log(checkMonth(checkMonthNumber));

// task 04

let num = parseInt(prompt('Enter id'));

function showUser(id) {
    let user = { 'id': id };
    if (id < 0) {
        alert("ID must not be negative: " + id);
    }
    return user;
}
showUser(num);

function showUsers(ids) {
    let usersValid = [];
    for (let i = 0; i < ids.length; i++) {
        try {
            let userValid = showUser(ids[i]);
            usersValid.push(userValid);
        } catch (e) {
            console.log(e);
        }
    }
    console.log(usersValid);
    return usersValid;
}
showUsers([7, -12, 44, 22]);

