"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("./point");
//////////// how to declare a variable
let age = 40;
let age2 = 40;
let names;
////////////
//////////// Arrays
let numbers = [1, 2, 3];
let numbers2 = [1, 2, 3];
console.log(numbers2[0]);
let numbers3 = [];
numbers3[0] = "A";
numbers3[1] = "B";
let numbers4 = []; //The type is any (something we should avoid)
console.log(typeof numbers3);
////////////
//////////// Tuples
let user = [20, "Marie"]; //We can have an array with deferent types without using "any"
user.push(5);
console.log(user);
console.log(typeof user[0]);
////////////
//////////// enums
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
var Size2;
(function (Size2) {
    Size2["Small"] = "S";
    Size2["Medium"] = "M";
    Size2["Large"] = "L";
})(Size2 || (Size2 = {}));
;
let firstClient = Size.Small;
let secondClient = Size2.Medium;
console.log(Size);
console.log(firstClient); //return the index
console.log(secondClient); //return the index 
var days;
(function (days) {
    days[days["day1"] = 1] = "day1";
    days[days["day2"] = 2] = "day2";
    days[days["day3"] = 3] = "day3";
})(days || (days = {}));
; //The second value is automatically 2     // days[days["day1"] = 1] = "day1"   // days[days["day2"] = 2] = "day2"
console.log(days.day2);
console.log(days);
////////////
//////////// functions
function add(firstNumber, secondNumber) {
    if (firstNumber > secondNumber)
        return firstNumber + secondNumber;
    else
        return 0;
}
function add2(firstNumber, secondNumber, thirdNumber) {
    if (!thirdNumber)
        return firstNumber + secondNumber;
    else if (thirdNumber)
        return firstNumber + secondNumber + thirdNumber;
    else
        return 0;
}
console.log(add(3, 5));
console.log(add(5, 3));
console.log(add2(7, 3));
console.log(add2(5, 3, 5));
////////////
//////////// Objects
let client = { num: 1, age: 10, name: 'Sam' };
client.name = 'Sara';
// client.age = 50;   we add readonly if we don't wanna change the value
console.log(client);
console.log(client.name);
let employers = [{ name: 'alecia', id: 0, age: 30 },];
console.log(employers);
console.log(employers[0]);
employers.push({ name: 'alex', id: 1, age: 26 });
console.log(employers);
console.log(employers[1]);
let client1 = { num: 1, age: 10, name: 'Sam' };
let client2 = { num: 2, age: 20, name: 'Sara' };
////////////
//////////// Union types
function isItaNumberOraString(parameter) {
    if (typeof parameter === 'number')
        console.log('It is a number');
    else if (typeof parameter === 'string')
        console.log('It is a string');
    else
        console.log('Are u kidding me');
}
isItaNumberOraString(5);
isItaNumberOraString('hey');
isItaNumberOraString(true);
let textBox = {
    drag: () => { },
    resize: () => { },
};
let age1;
age1 = 30;
function getCustomer(id) { return id === 0 ? null : { birthday: new Date() }; }
let customer1 = getCustomer(0);
let customer2 = getCustomer(1);
// Without the optional property
// if(customer1 !== null)
//     console.log(customer1.birthday);
// if(customer2 !== null)
//     console.log(customer2.birthday);
// using the optional property access operator
console.log(customer1?.birthday);
console.log(customer2?.birthday);
// optional call
let call1 = (message) => console.log(message);
let call2 = null;
call1?.('hey');
call2?.('0');
////////////
// Type Assertions
let message;
message = 'abc';
let endWithC = message.endsWith('c');
let alternativeWay = message.endsWith('b');
console.log(endWithC);
console.log(alternativeWay);
////////////
// Arrow function
let log = function (message) {
    console.log(message);
};
let doLog = (message) => console.log(message); //this called arrow function
let drawPoint;
////////////
// Classes && objects
class Point {
    x = 6;
    y;
    draw() {
        console.log('X = ' + this.x + ' Y = ' + this.y);
    }
    getDistance() {
    }
}
let point = new Point();
point.x = 4;
point.y = 5;
point.draw();
////////////
// Constructors && Access Modifiers ( public / private / protected)
class Point2 {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log('X = ' + this.x + ' Y = ' + this.y);
    }
    getDistance() {
    }
}
let point2 = new Point2(9, 15);
point2.draw();
////////////
// Access Modifiers in Constructor Parameters ( To make the code cleaner)
class Point3 {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    } // parameters are declared and initialize
    draw() {
        console.log('X = ' + this.x + ' Y = ' + this.y);
    }
    getDistance() {
    }
}
let point3 = new Point3(90, 51);
point3.draw();
////////////
// Properties ( getter / setter )
class Point4 {
    _x;
    _y;
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    } // parameters are declared and initialize
    draw() {
        console.log('X = ' + this._x + ' Y = ' + this._y);
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
}
let point4 = new Point4(9, 3);
let w = point4.x; // instead of:   let w = point4.getX();
console.log(w);
point4.x = 7; // instead of:   point4.setX(7);
point4.draw();
////////////
// Modules
let point5 = new point_1.Point5(10, 16);
point5.draw();
//////
