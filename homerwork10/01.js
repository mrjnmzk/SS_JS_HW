//task 01

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); 
console.log(y); 
console.log(z); 

//task 02

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let {names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4]} = data;
console.log(name2);
console.log(age2); 
console.log(name4);
console.log(age4); 

//task 03

function mul(...args) {
    let nums = args.filter(arg => typeof arg == "number")
    if (nums.length == 0) {
        return 0;
    }
    let multResult = 1;
    for (let i = 0; i < nums.length; i++) {
        multResult *= nums[i];
    }
    return multResult;
}

console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, " str", false, true));

//task 04

let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => this.data + "")
    }
};
let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return (callback => {
            this.result = callback()
        })
    }
};
client.calc(123);
console.log(client.result);
console.log(typeof client.result);

//task 05

function mapBuilder (keysArray, valuesArray) {
    let newMap = new Map()
    for (let i = 0; i < keysArray.length; i++) {
        newMap.set(keysArray[i], valuesArray[i])
    }
    return newMap;
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size);
console.log(map.get(2));