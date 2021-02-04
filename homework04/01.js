// task01

function calcRectangleArea(width, height) {
    let RectArea = width * height
    if (isNaN(width) || isNaN(height)) {
        throw 'is NaN';
    }
    console.log(RectArea);  
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
    } else if (isNaN(age)){
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

    

