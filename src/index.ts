
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
