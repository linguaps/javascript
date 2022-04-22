// //EXCERCISE-1 SAY HELLO
//===========================

// // Say hello
// // Create a program in JavaScript that prompts for your name and prints a greeting using your name.

// // Improve your code by turning it to function

// // Time estimates: 15 minutes

// let nameOfUser = prompt("please write your name");



// sayHello => {`Hello ${nameOfUser}, I hope you are having a great day`};

// let sayHello = function() {
// alert(`Hello ${nameOfUser}, I hope you are having a great day`);
// // }

// sayHello();

//EXCERCISE_2 COUNTING NUMBERS OF CHARS
//========================================


// //Counting the number of characters
// Create a program in JavaScript that prompts for an input string and displays output that shows the input string and the number of characters the string contains.

// Improve your code by turning it to function

// Time estimates: 30 minutes


// let wordByUser = prompt("Please write something");

// // let val1 = parseInt(wordByUser);
// // val1 == undefined ? alert(`Ok I will do the thing for the word ${wordByUser}`) : prompt("Come on! I only want the letters");
// // }

// let giveLength = function() {
//     alert(`The length of the word, ${wordByUser}, that you wrote is ${wordByUser.length} `);
// }

// giveLength();

//EXCERCISE_3 PRINTING QUOTES
// Create a program that prompts for a quote and an author. Display the quotation and author as shown here:
// [Author] says, "[Quote]" (Replace [Author] and [Quote] with the actual values

// Improve your code by turning it to function

// Time estimates: 30 minutes

// let quoteByUser = prompt("Please write a quote of a person that you want to share")

// let quoter = prompt(`Cool: "${quoteByUser}" : Who said this?`);

// let giveQuote = function() {

//     alert(`"${quoter}" says "${quoteByUser}"`);
// }

// giveQuote();

//EXCERCISE_4 AGE CALCULATOR
//============================

// Age calculator
// Improve your age calculator
// First add an input for the month
// Then change that to using a function
// Call that function several times
// Improve your code by turning it to function

// Time estimates: 45 minutes

// let birthYear = Number(prompt("Please write the year of your birth in numbers, e.g.1985"));
// let birthMonth = Number(prompt("Please write the month of your birth in numbers, e.g.11"));
// let futureYear = Number(prompt("Please write the year in which you want to check your age in numbers, e.g.4"));
// let futureMonth = Number(prompt("Please write the month in which you want to check your age in numbers, e.g.7"));

// let yearDifference = futureYear - birthYear;
// let monthBirthDif   =   12 - birthMonth;
// let totalMonthDif = monthBirthDif + futureMonth;
// let remnantYear = Math.floor(totalMonthDif / 12);//ExtraYear
// let extraMonth = Math.floor(totalMonthDif % 12);//Remainder of month
// let finalYearDif = yearDifference + remnantYear;

// let countMyAge = function(){
//     if(totalMonthDif <12) {
//     alert(`You will be on Earthhh for ${yearDifference} years and ${totalMonthDif} months on the date ${futureMonth}.${futureYear}`);    
//     }
//     else { 
//     alert(`You will be on Earth for ${finalYearDif} years and ${extraMonth} months on the date "${futureMonth}.${futureYear}"`); 
//     }
// }

// countMyAge();


//EXCERCISE_5 TIP CALCULATOR
//============================
// Tip calculator
// Create a tip calulactor in JavaScript. Take the pseudocode we created last week and turn it into JS. Step by step. Where to use functions?

// Time estimates: 45 minutes

let bill = Number(prompt("Please write the amount on the bill"));

let tip = Math.floor(bill / 20);

alert(`You are supposed to get "${tip} CHF" as a tip`);

