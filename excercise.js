let userName = prompt("please write your name");
const birthYear = prompt("please write your birthyear");

let currentYear = 2022;
let futureYear = 2067;

let age = currentYear -birthYear;
let age2067 = futureYear -birthYear;

alert(`Hello "${userName}!!!", right now you are at ${age}, which means that you will be ${age2067} in 2067!!! So, wake up and live your life. By the way there are ${userName.length} characters in your name`);