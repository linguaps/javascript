/*
Odd / even reporter 2.0
========================
Write a for loop that will iterate from 0 to 20.
For each iteration, it will check if the current number is even or odd.
Report the result to the screen (e.g. "2 is even")
>Let's try all kinds of loops.

*/
//FOR LOOP
// for (let i = 0; i <= 20; i++) {
//     //template string
//    // console.log(`${i} is even`);

//     //contencated string with +
//   // console.log(`this is the remainder: `+i%2)

//    if (i % 2 === 0) {
//     console.log(`${i} is even`);
//    } else {
//     console.log(`${i} is odd`); 
//    }

// }

//WHILE LOOP

// let i=0;
// while (i <= 20) {
  
//     i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is even`);
//     i++;
// }

//DO WHILE LOOP

// let i = 0;
// do {
//     i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is even`);
//     i++;

// } while (i <= 20)

// FOREACH LOOP
//Looping through an array
// console.log(numbers);
let numbers = []; 
for (let i = 0; i <= 20; i++) {
    numbers.push(i);
}
    numbers.forEach(number => {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
       } else {
        console.log(`${number} is odd`)
       };