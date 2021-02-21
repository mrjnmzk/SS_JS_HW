// task 01

function upperCase(str) {
    RegExp = /^[A-Z]/;
    if (RegExp.test(str)) {
        console.log(`String's not starts with uppercase character`);
    } else {
        console.log(`String's starts with uppercase character`);
    }
}

upperCase('regexp');
upperCase('RegExp');


// task 02

function checkMail(data) {
    regExp = /^\w+@\w+\.\w+$/;
    return regExp.test(data);
}

console.log(checkMail("Qmail2@gmail.com"));

// task 03

function checkString(text) {
    let dataString = /d(b+)(d)/gi.exec(text);
    console.log(dataString.slice());
}

checkString("cdbBdbsbz");

// task 04
function changeWords(str) {
    let regExp = /(\w+)\s(\w+)/;
    let match = regExp.exec(str);
    let newStr = `${match[2]}, ${match[1]}`;
    console.log(newStr);
}

changeWords("java Script");

// task 05

function checkCardNumber(card) {
    let regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regExp.test(card);
}

let digits = '9999-9999-9999-9999';
console.log(`Card ${digits} is valid: ${checkCardNumber(digits)}`);

// task 06

function checkEmail(str) {
    let regExp = /^[a-zA-Z0-9]\w+-{0,1}\w+@[a-zA-Z]+\.[a-zA-Z]+$/;
    let result = regExp.test(str);
    if (result) {
        console.log('Email is correct!');
    } else {
        console.log('Email is not correct!');
    }
}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');

// task 07

function checkLogin(str) {
    let regExp = /^[a-zA-Z][a-zA-Z0-9\.]{1,9}$/;
    let result = regExp.test(str);
    console.log(result);
    let regExpNumbers = /(\d+\.\d+)|(\d+)/g;
    let matched = str.match(regExpNumbers)
    console.log(matched.join(', '));
}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');