// Loggin to the console

console.log('Hello, World!'); //string

// #Variables

let firstName = 'Aleksander'; // 

firstName = 'Isak';

console.log(firstName);

const lastName = 'Aasen'; //Constant

console.log(lastName);

// #Data types

let age = 20; // int (integer) Literal
let fullName = 'Aleksander Aasen' //string Literal
let isOfAge = true; // Boolean Literal (Can be: True or False)
let handsome = undefined; // undefined
let ugly // undefined
let nothing = null; // null

// #String manipulation

let favoriteTeam = 'Manchester United'


// Concatenation
console.log('My favorite football team is ' + favoriteTeam);

// Template
console.log(`The best team is ${favoriteTeam} for sure.`);

// Mathematics

let addition = 3 + 6;

console.log(addition);
console.log(10 - 4);
console.log(3 * 6);
console.log(4 / 2);

//  Arrays

let fruits = ['Apple', 'Banana', 'Pear', 'Orange'];

console.log(fruits);

fruits.splice(3, 1) //remove item from array 

fruits.push('Kiwi') //Add item to array

console.log(fruits);

// Objects 

let person = {
    name: 'Aleksander',
    age: 22,
    isUgly: false
};

// Dot notation
console.log(person.name);

// Bracket notation
let theKey = "name";
console.log(person[theKey]);

person.name = "Yoda";

console.log(person.name);

person["swordColor"] = "green";

console.log(person.swordColor);

// #Loops

// For loop

for (let i = 0; i < 5; i++) {
    console.log("it ran!");
}

// While loop

let i = 0;

while (i < 5) {
    console.log("Ran in while loop");
    i++;
}

// Mapping Arrays

let ages = [21, 54, 70, 19, 40];
ages.map(age => console.log(age))

// Conditionals 

let userAge = 1; 

if (userAge > 12 && userAge < 19) {
    console.log("Congrats! You have access.");
} else if (userAge === 0) {
console.log("How are you even here?")
} else {
    console.log("Sorry, you do not have access.");
}

// Functions

function greet(name) {
    if (name) {
        console.log("Hello, " + name);
    }
    else {
        console.log("You should pass a name");
    }
}

greet("Aleksander");
greet();

// Classes 

class Dog {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("The dog is walking");
    }
}

let dog = new Dog ("Jakko");
dog.walk();
