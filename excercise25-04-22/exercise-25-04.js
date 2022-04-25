// EXERCISE-1
//==============

// Which number is bigger?
// Declare 2 variables, both numbers
// Compare which number is greater
// Log the output, e.g. "The greater number of 5 and 10 is 10."
// Add an output for the else statement, e.g. "The smaller number of 5 and 10 is 5."
// Time estimates: 15 minutes

// let num1 = 8;
// let num2 = 7;

// let greatNum = function() {
//     num1 > num2 ? alert(`The greater number of ${num1} and ${num2} is ${num1}`) : alert(`The greater number of ${num1} and ${num2} is ${num2}`)
// };

// greatNum();

// let num1 = prompt("Please write a number");
// let num2 = prompt("Please write another number");

// let greatNum = function() {
//     num1 > num2 ? alert(`The greater number of ${num1} and ${num2} is ${num1}`) : alert(`The greater number of ${num1} and ${num2} is ${num2}`)
// };

// greatNum();


// EXERCISE-2
//==============

// The world translator
// Write a function named helloWorld that:
// Takes 1 argument, a language code (e.g. "es", "de", "en")
// Returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works
// Time estimates: 30 minutes

// let engHello = "Hello, World";
// let freHello = "Salut, Le Monde";
// let geHello = "Hallo, Welt";

// let codeEng = "en";
// let codeFre = "fr";
// let codeGe = "ge";

// let helloWorld = function(languageCode){
//     switch (languageCode) 
// {
//     case "en":
//         console.log(engHello);
//         break;

//     case "fr":
//         console.log(freHello);
//         break;

//     case "ge":
//         console.log(geHello);
//         break;

//     default:
//         console.log(engHello);

// }
// };
// helloWorld("en");

// EXERCISE-3
//==============

// Retirement calculator
// Create a program that determines how many years you have left until retirement and the year you can retire. It should prompt for your current age and the age you want to retire and display the output as shown in the example that follows on the next slide.

// Time estimates: 1 hour 30 minutes

// What to do
// List inputs, outputs, processes in a text file.
// What are the constraints? Any edge case to consider? Note in your text file.
// Write the steps of your algorithm in pseudo-code in a second text file.
// Write the program in JavaScript. Find out how to get the current year from your computer.
// Push all 3 files (1 js and 2 txt) to your Github account.

// Retirement calculator
// Example:
// What is your age? 25
// At what age would you like to retire? 65
// You have 40 years left until you can retire.
// It's 2020, so you can retire in 2060.
//  Your computer knows what the current year is. Figure out how to do that in JavaScript.



let userAge = Number(prompt("Please write your current age (use only numbers)"));
let futureAge = Number(prompt("Please write the age you would like to retire (use only numbers)"));
let yearDif = futureAge - userAge;
let currentYear = new Date().getFullYear();
let futureYear = currentYear + yearDif;

let getRetired = function(){
    alert(`You have ${yearDif} years left until you can retire.
	It's ${currentYear}, so you can retire in ${futureYear}.`)
};

getRetired();



