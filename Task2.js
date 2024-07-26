// Write a script that demonstrates the use of arithmetic operators, comparison operators, 
// and logical operators. Implement if-else statements, switch statements, and loops (for, while, do-while).

// Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition: " + (a + b));       
console.log("Subtraction: " + (a - b));    
console.log("Multiplication: " + (a * b)); 
console.log("Division: " + (a / b));       
console.log("Modulus: " + (a % b));        
console.log("Exponentiation: " + (a ** b)); 

// Comparison Operators
console.log("Equal: " + (a == b));         
console.log("Not Equal: " + (a != b));     
console.log("Strict Equal: " + (a === b)); 
console.log("Strict Not Equal: " + (a !== b)); 
console.log("Greater Than: " + (a > b));   
console.log("Less Than: " + (a < b));      
console.log("Greater Than or Equal: " + (a >= b)); 
console.log("Less Than or Equal: " + (a <= b)); 

// Logical Operators
let x = true;
let y = false;

console.log("Logical AND: " + (x && y));   
console.log("Logical OR: " + (x || y));    
console.log("Logical NOT: " + (!x));      

// if-else Statements
if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is less than b");
} else {
    console.log("a is equal to b");
}

// Switch Statements
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
        break;
}
console.log("Day: " + dayName);

// For Loop
console.log("For Loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop
console.log("While Loop:");
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Do-While Loop
console.log("Do-While Loop:");
count = 0;
do {
    console.log(count);
    count++;
} while (count < 5);
