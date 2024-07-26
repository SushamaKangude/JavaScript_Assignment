// Write a script that declares variables of different data types 
//(string, number, boolean, null, undefined, object, array). Print each variable to the console.

// String
let myString = "Hello, World!";
console.log("String: " + myString);

// Number
let myNumber = 42;
console.log("Number: " + myNumber);

// Boolean
let myBoolean = true;
console.log("Boolean: " + myBoolean);

// Null
let myNull = null;
console.log("Null: " + myNull);

// Undefined
let myUndefined;
console.log("Undefined: " + myUndefined);

// Object
let myObject = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log("Object: " + JSON.stringify(myObject));

// Array
let myArray = [1, 2, 3, 4, 5];
console.log("Array: " + myArray);
