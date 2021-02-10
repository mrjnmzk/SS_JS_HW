// task 1

let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
        };

function propsCount(currentObject) { 
    let propOfObj = Object.keys(currentObject).length;
    console.log(propOfObj);
}
propsCount(mentor);

// task 2

let officeWorker = {
    firstName: 'Mike',
    lastName: 'Peterson',
    position: 'Manager',
    salary: 2000,
    age: 35,
}

function showProps(obj) { 
    return Object, keys(obj);
}

console.log(showProps(officeWorker));
console.log(Object.values(officeWorker));

// task 3

class Person { 
    constructor(name, surname) { 
        this.name = name;
        this.surname = surname;
    }
    showFullName() { 
        console.log(this.name + ' ' + this.surname);
    }
}

class Student extends Person { 
    constructor(name, surname, year) { 
        super(name, surname);
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
    showFullName(midleName) { 
        this.midleName = midleName;
        let fullName = this.name + ' ' + this.surname + ' ' + this.midleName;
        // console.log(fullName);
        return fullName;
    }
    showCourse() { 
        let date = new Date();
        let currentYear = date.getFullYear();
        let startYear = currentYear - this.year;
        return startYear;
    }

}
let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); 
console.log("Current course: " + stud1.showCourse()); 

// task 4

class Worker {
    #experience = 1.2
    get experience() {
        return this.#experience;
    }

    set experience(value) {
        this.#experience = value;
    }
    constructor(fullName, dayRate, workingDays) { 
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    salaryCalc() { 
        return this.dayRate * this.workingDays;
    }
    showSalary() { 
        let salary = this.salaryCalc();
        console.log(`${this.fullName} salary: ${salary}`);
    }
    calcSalaryWithExperience() { 
        let withExperience = this.salaryCalc() * this.#experience;
        return withExperience;
    }
    showSalaryWithExperience() { 
        console.log(`${this.fullName} salary- ${this.calcSalaryWithExperience()}`);
    }
    static salarySort(employers) {
        employers.sort(function(employeeA, employeeB) {
            return employeeA.calcSalaryWithExperience() - employeeB.calcSalaryWithExperience();
        })
        console.log('Sorted salaries:');
        for (let i = 0; i < employers.length; i++) {
            console.log(`${employers[i].fullName}: ${employers[i].calcSalaryWithExperience()}`)
        }
    }

}

let employee1 = new Worker('Mike Shinoda', 10, 12);
console.log(employee1.fullName);
employee1.showSalary();
console.log('New experience: ' + employee1.experience);
employee1.showSalaryWithExperience();
employee1.experience = 1.5;
console.log("New experience: " + employee1.experience);
employee1.showSalaryWithExperience();

let employee2 = new Worker('Viki Stark', 15, 9);
console.log(employee2.fullName);
employee2.showSalary();
console.log('New experience: ' + employee2.experience);
employee2.showSalaryWithExperience();
employee2.experience = 1.5;
console.log("New experience: " + employee2.experience);
employee2.showSalaryWithExperience();

let employee3 = new Worker('Jhon Favro', 8, 11);
console.log(employee3.fullName);
employee3.showSalary();
console.log('New experience: ' + employee3.experience);
employee3.showSalaryWithExperience();
employee3.experience = 1.5;
console.log("New experience: " + employee3.experience);
employee3.showSalaryWithExperience();


let employers = [employee1, employee2, employee3];
Worker.salarySort(employers); 

// task 5

class GeometricFigures {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigures {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    getArea() {
        return (this.base * this.height) / 2;
    }
}

class Square extends GeometricFigures {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}

class Circle extends GeometricFigures {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
function handleFigures(figures) {
    let totalFigArea = 0;
    for (let i = 0; i < figures.length; i++) {
        const figure = figures[i];
        if (figure instanceof GeometricFigures) {
            console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
            totalFigArea += figure.getArea();
        }
    }
    return totalFigArea;
 }

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));

    




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             