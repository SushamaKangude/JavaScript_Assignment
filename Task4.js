// Create an object representing a person with properties for name, age, and hobbies.
// Create an array of objects representing multiple people.
// Write a function that takes an array of people and returns the names of those above a certain age.

let person1 = {
    name: "Vaibhav",
    age: 25,
    hobbies: ["reading", "hiking", "coding"]
};

let person2 = {
    name: "Raghav",
    age: 30,
    hobbies: ["cooking", "swimming", "traveling"]
};

let person3 = {
    name: "Krishna",
    age: 35,
    hobbies: ["gaming", "cycling", "photography"]
};

// Array of Objects
let people = [person1, person2, person3];

// Function 
function getNamesAboveAge(people, ageThreshold) {
    let names = [];
    for (let person of people) {
        if (person.age > ageThreshold) {
            names.push(person.name);
        }
    }
    return names;
}

let result = getNamesAboveAge(people, 28);
console.log("People above age 28: " + result); 
