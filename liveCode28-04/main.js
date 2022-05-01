// let testString = `This is a string`;
// const pi = 3.14;
// var checkThis = True;
// let variable;
// let animals = [`cat`, `dog`, `mouse`];
// animals[15] = `dolphin`;

// for(i = 0; i < animals.length; i++){//FOR LOOP
//     console.log(animals[i]);
// } 

// animals.forEach(animal => console.log(animal));//FOREACH LOOP

// let i = 0;                          //WHILE LOOP
// while(i < animal.length){
//     console.log(animals[i]);
//     i++;
// }

// do  {                                //DO WHILE LOOP
//     console.log(animals[i]);
//     i++;
// } while(i < animals.length)

// // FOR IN LOOP                     
//  //FOR IN AND FOREACH RETURN ACTUAL VALUE/IGNORE UNDEFINED
// let x = 0;
// for(x in animals){
//     console.log(animals[x]);
// }




// // FOR OF LOOP

// for(let animal of animals){
//     console.log(animal);
// }




// let person = {
//     lastName: `Koenig`,
//     firstName: `Susanne`,
//     isMarried: false,
//     noOfChildren: 0,
//     spokenLanguages: [`German`,`English`, `French`],
//     languageSkills: {
//         motherTongue: `German`,
//         advanced: `English`,
//         basic: [`French`, `Finnish`]
//     },
//     getMaritialStatus: function(){
//         return this.isMarried;
//     }
// }

// for(let property in person){
//     console.log(person[property]);
// }

// for(let value of person){
//     console.log(value);
// }

// //FUNCTION

// calculate(5,7,`+`);

// let calculateAsExpression = function(number1, number2, operator){
//     switch(operator){
//         case `+`:
//             return number1 + number2;
//             break;
//         case `-`:
//             return number1 - number2;
//             break;
//         case `*`:
//             return number1 * number2;
//             break;
//         case `/`:
//             return number1 / number2;
//             break;
//         default:
//             return `This is not a valid operator. Please use one of +, -, *, /`
//             break;
//         }
// }

// let calculateAsArrow = (number1, number2, operator) => {
//     switch(operator){
//         case `+`:
//             return number1 + number2;
//             break;
//         case `-`:
//             return number1 - number2;
//             break;
//         case `*`:
//             return number1 * number2;
//             break;
//         case `/`:
//             return number1 / number2;
//             break;
//         default:
//             return `This is not a valid operator. Please use one of +, -, *, /`
//             break;
//         }
// }

// function calculate(number1, number2, operator){
//     if(operator === `+`) 
//     return number1 + number2;
// } else if(operator === `-`){
//     return number1 - number2;
// }
//  else if(operator === `*`){
//     return number1 * number2;
// }
//  else if(operator === `/`){
//     return number1 / number2;
// } else {
//     return `This is not a valid operator. Please use one of +, -, *, /`
// }

// switch(operator){
//     case `+`:
//         return number1 + number2;
//         break;
//     case `-`:
//         return number1 - number2;
//         break;
//     case `*`:
//         return number1 * number2;
//         break;
//     case `/`:
//         return number1 / number2;
//         break;
//     default:
//         return `This is not a valid operator. Please use one of +, -, *, /`
//         break;
//     }

//EXCERCISE ERRAY/ 
// Access and output Oranges.
// Remove the Banana from the array.
// Sort the array in order.
// Put "Kiwi" at the end of the array.
// Remove "Apples" from the array.
// Sort the array in reverse order, i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// /* using this array,
// Access and output Oranges.
// Remove the Banana from the array.
// Sort the array in order.
// Put "Kiwi" at the end of the array.
// Remove "Apples" from the array.
// Sort the array in reverse order, i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
// You should at the end have ["Kiwi", "Oranges", "Blueberries"]
// */
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// console.log(array[2]);
// array.shift();
// console.log(array);
// array.splice(0,1);
// console.log(array);
// console.log(array.sort());
// console.log(array);
// array.push("Kiwi");
// console.log(array);
// // array.splice(1,1);
// array.sort().reverse();
// // console.log(array);
// // array.reverse();
// console.log(array);

