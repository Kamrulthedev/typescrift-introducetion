"use strict";
//Larning function 
// function 2 types
// 1.normal function
// 2. arrow function
//normal function
var add = function (num1, num2) {
    return num1 + num2;
};
add(1, 4);
//arrow function
var added = function (num1, num2) { return num1 + num2; };
added(2, 3);
// Object-->function -- > method
var NameUser = {
    name: "Kamrul",
    balance: 0, // Fixed typo in variable name from 'beleance' to 'balance'
    // Method to add balance and return a message
    addBalance: function (amount) {
        this.balance += amount; // Update the balance
        return "My new balance: ".concat(this.balance); // Return a string indicating the new balance
    },
};
// Example usage of the object's method
var result = NameUser.addBalance(100); // Adding 100 to the balance
console.log(result); // Output: My new balance: 100
