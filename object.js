//JavaScript variables are containers for data values. 
//Objects are variables too. But objects can contain many values.
// Objects are containers for Properties and Methods.
// In JavaScript, almost "everything" is an object except primitives (has no properties and methods.)

// # Objects are objects
// # Maths are objects
// # Functions are objects
// # Dates are objects
// # Arrays are objects
// # Maps are objects
// # Sets are objects

// PRIMITIVES. Primitive values are immutable (they are hardcoded and cannot be changed).
// # string ['hello' - string]
// # number [ 101 - number ]
// # boolean [ true / false - boolean]
// # null [ null (object)]
// # undefined [ undifined ]
// # symbol
// # bigint

// Objects are mutable: They are addressed by reference, not by value.

const homosapien = {
    firstName : "Homo",
    lastName : "Sapien",
    age : 24,
    fullName : function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

let joyHomoSapien = homosapien; //The object joyHomoSapien is not a copy of homosapien. The object joyHomoSapien is homosapien. They are sharing same memory address. 

joyHomoSapien.age = 25;

console.log(joyHomoSapien.age);

// How to Define a JavaScript Object
// # Using an Object Literal (Optimal for readability, simplicity and execution speed)
// # Using the new Keyword
// # Using an Object Constructor


// Using an Object Literal.

const myCar = {
    type: 'Fiat',
    model: '500',
    color: 'white'
}

console.log(myCar.model)
console.log(myCar['color']);


// Can also create like this.

const Person = {};

Person.name = "Joy",
Person.age = 24,
Person.gender = "Male"

console.log(Person.name);
console.log(Person["age"]);


// # Using the new Keyword

const Manush = new Object();

Manush.name = "Joy",
Manush.age = 24,
Manush.gender = "Male"

console.log(Manush.name);
console.log(Manush["gender"]);


const PersonInfo = {
    firstName : 'Joy',
    lastName : 'Das',
    age: 24,
    fullName : function () {
        return `${this.firstName} ${this.lastName}`; // this refers to the PersonInfo object, this.firstName means the firstName property of person, this.lastName means the lastName property of person.
    },
    height : 5.6
}
PersonInfo.eyeColor = "Black"
delete PersonInfo.height;

console.log(PersonInfo.fullName());
console.log(PersonInfo.eyeColor)
console.log(PersonInfo)

//Nested Object..

const myObj = {
    name : 'John Doe',
    age : 24,
    hobbies : {
        hobby1 : 'Gaming',
        hobby2 : 'Coding',
        hobby3 : 'Travelling'
    }
}

console.log(myObj)
console.log(myObj.hobbies.hobby1)