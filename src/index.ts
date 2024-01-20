import {Point5} from './point';

//////////// how to declare a variable

let age : number = 40 ;
let age2 = 40;       

let names;

////////////


//////////// Arrays

let numbers : number[] = [1, 2, 3];   

let numbers2 = [1, 2, 3];

console.log(numbers2[0]);


let numbers3: string[] = [];
numbers3[0] = "A";
numbers3[1] = "B";
let numbers4 = [];   //The type is any (something we should avoid)

console.log( typeof numbers3);

////////////

//////////// Tuples
let user: [number, string] = [20, "Marie"];    //We can have an array with deferent types without using "any"

user.push(5);     
     


console.log(user);

console.log(typeof user[0]);


////////////

//////////// enums

enum Size {Small, Medium, Large};
enum Size2 {Small= "S", Medium= "M", Large= "L"};


let firstClient: Size = Size.Small;
let secondClient: Size2 = Size2.Medium;

console.log(Size);



console.log(firstClient);  //return the index
console.log(secondClient);  //return the index 

enum days { day1=1 , day2, day3};    //The second value is automatically 2     // days[days["day1"] = 1] = "day1"   // days[days["day2"] = 2] = "day2"

console.log(days.day2);
console.log(days);




////////////


//////////// functions

function add(firstNumber: number, secondNumber: number){
    if (firstNumber > secondNumber)
        return firstNumber + secondNumber ;
    else 
        return 0;
}

function add2(firstNumber: number, secondNumber: number, thirdNumber? : number){            //? : to make a parameter optional
    if (!thirdNumber)
        return firstNumber + secondNumber ;
    else if(thirdNumber)
        return firstNumber + secondNumber + thirdNumber;
    else
        return 0;
}

console.log(add(3,5));
console.log(add(5,3));
console.log(add2(7,3));
console.log(add2(5,3,5));


////////////

//////////// Objects
let client : {num : number, readonly age : number, name : string} = { num : 1, age : 10, name : 'Sam'};

client.name = 'Sara';
// client.age = 50;   we add readonly if we don't wanna change the value
console.log(client);
console.log(client.name);

let employers : object[] = [{name : 'alecia', id : 0, age : 30 }, ];



console.log(employers);
console.log(employers[0]);

employers.push({name : 'alex', id : 1, age : 26 }) ;
console.log(employers);
console.log(employers[1]);



////////////


//////////// type aliases

type Client = {num : number, readonly age : number, name : string};
type numberOrString = string | number;


let client1 : Client= { num : 1, age : 10, name : 'Sam'};
let client2 : Client = { num : 2, age : 20, name : 'Sara'};



////////////

//////////// Union types

function isItaNumberOraString( parameter : Number | String | any ) {   // the type of the parameter can be one of the types declared
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


////////////

//////////// Intersection types

type Draggable = { drag: () => void};
type Resizable = { resize: () => void};

type UIWidget = Draggable & Resizable ;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {},
}
////////////

//////////// Literal types

type Age = 30 | 31;

let age1: Age ;

age1 = 30;
////////////

//////////// Optional chaining

type Customer = {birthday: Date}

function getCustomer(id: number): Customer | null | undefined  { return id === 0 ? null : { birthday: new Date()}}

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

let call1: any = (message: number) => console.log(message);
let call2: any = null ;

call1?.('hey');
call2?.('0');

////////////

// Type Assertions

let message;

message = 'abc';
let endWithC = ( <string> message).endsWith('c');
let alternativeWay = ( message as string).endsWith('b');

console.log(endWithC);
console.log(alternativeWay);

////////////

// Arrow function

let log = function(message: string){
    console.log(message);

}

let doLog = (message: string) => console.log(message);  //this called arrow function

////////////

// Interfaces
interface Point1 {
    z: number,
    w: number
}

let drawPoint : (point: Point1) => {  
    // drawThePointAlgorithm 
}
////////////

// Classes && objects

class Point {
    x: number = 6;
    y: number;

    draw(){
        console.log('X = ' + this.x + ' Y = ' + this.y);  
    }
    getDistance(){

    }
}

let point = new Point();
point.x = 4;
point.y = 5;
point.draw();
////////////

// Constructors && Access Modifiers ( public / private / protected)

class Point2 {
    private x: number; 
    private y: number;
    constructor(x?: number, y?: number){       //? :  to make parameter optional
        this.x = x;
        this.y = y;
    }
    draw(){
        console.log('X = ' + this.x + ' Y = ' + this.y);  
    }
    getDistance(){

    }
}

let point2 = new Point2(9 , 15  );

point2.draw();
////////////

// Access Modifiers in Constructor Parameters ( To make the code cleaner)

class Point3 {
    constructor(private x?: number, private y?: number){}     // parameters are declared and initialize

    draw(){
        console.log('X = ' + this.x + ' Y = ' + this.y);  
    }
    getDistance(){

    }
}

let point3 = new Point3(90 , 51  );
point3.draw();
////////////

// Properties ( getter / setter )

class Point4 {
    constructor(private _x?: number, private _y?: number){}     // parameters are declared and initialize

    draw(){
        console.log('X = ' + this._x + ' Y = ' + this._y);  
    }
    
    get x(){                                        //instead of:  getX(){ return this.x; }
        return this._x;                                 
    }            
    set x(value){                                   //instead of:  setX(value: number){ this.x = value; }
        this._x = value;
    }                                     
}

let point4 = new Point4(9 ,3  );

let w = point4.x;                       // instead of:   let w = point4.getX();
console.log(w);
point4.x = 7;                           // instead of:   point4.setX(7);
point4.draw();
////////////


// Modules

let point5 = new Point5(10 , 16);
point5.draw();

//////