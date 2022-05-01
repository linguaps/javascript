//OBJECTS
//=========

// const book = {
//     title: "Harry Potter and the prisoner of Azkaban",
//     author: "J. K. Rowling",
//     published: 1999,
//     numberOfPages: 448,
//     rating: 5,
//     bestseller: true,
//     series: "Harry Potter",
//     volume: 3,
//     ISBN: "0439136350",
//     publisher: "Scholastic",
//     bookmarkedPage: 325,
//     loadBookmarkedPage: function(){
//         return this.bookmarkedPage;

//     }
// };

// console.log(book.title);
// console.log(`"${book.title}" by ${book.author}`);
// console.log(book.loadBookmarkedPage());

//OBJECT CONSTRUCTOR

// function Book(title, author) {
//     this.title= title;
//     this.author= author;
// }

// let potter1 = new Book("Harry Potter and Philosopher's Stone", "J. K. Rowling");
// let potter2 = new Book("Harry Potter and Chamber of Secrets", "J. K. Rowling");
// let potter3 = new Book("Harry Potter and Prisoner of Azkaban", "J. K. Rowling");

// console.log(`"${potter1.title}" by ${potter1.author}`);
// console.log(Object.keys(potter2));

// console.log(`"${potter1.title}" by ${potter1.author}`);
// console.table(Object.keys(potter1));
// console.table(Object(potter1));

//ARRAYS

// var topics = ["HTML", "CSS", "JS"];
// console.log(topics[1]);

// topics = [
//     ["Javascript", "Python", "R"],
//     ["Vsc", "Github", "ABC"],
// ];

// console.log(topics[1][1]);  //Indexing start with 0, selecting github in the list.

// skills = {
//     frontend: "JavaScript",
//     backend: 
// }
// {

// }

// topics.forEach(topics => console.log(topics));

// for (let i = 0; i < topics.length; i ++){
//     console.log(topics[i]);
// }

//ARRAY METHODS
//=================
// var topics2 = ["movie", "serials", "cartoons"];
// var topics = ["HTML", "CSS", "JS"];
// topics.push("git");//add the item to the end of the list
// topics.pop("react");//pops element replace it
// topics.shift(); //Removes the first element
// topics.splice(2,1);//Deletes the element in that order

// //array method to merge two lists
// let mergedTopics = topics.concat(topics2)
// console.table(mergedTopics);

// EXCERCISES
// ===========
// // EXCERCISE 1- Exercise: Mad Lib
// ===================================
// Do your Mad Lib exercise again:
// Create a simple mad-lib program that prompts for a noun, a verb, an adverb, and an adjective and injects those into a story that you create.

// Write a function and store the variables in an array - or better an object?

// let nounByUser = prompt("Please write a noun");
// let verbByUser = prompt("Please write a verb");
// let adverbByUser = prompt("Please write an adverb");
// let adjectiveByUser = prompt("Please write an adjective");


// function Story(nounByUser, verbByUser, adverbByUser, adjectiveByUser) {
//         this.nounByUser= nounByUser;
//         this.verbByUser= verbByUser;
//         this.adverbByUser= adverbByUser;
//         this.adjectiveByUser= adjectiveByUser;
//      };


// let story = new Story(nounByUser, verbByUser, adverbByUser, adjectiveByUser);

// let storyText = `Once upon a time, there was a princess whose name was "${story.nounByUser}" and who was extremely "${story.adjectiveByUser}!" She always likes to run in the woods, especially with her best friends. One day, they go to the woods again, then just after they arrive there, they "${story.verbByUser}". Yes, you heard it right, they "${story.verbByUser}" "${story.adverbByUser}" altogether.`
// alert(storyText);



 // EXCERCISE 2- Exercise: Mad Lib
// ===================================

// Exercise: Fortune Teller
// Do the Fortune Teller again but this time with an object.
// Write a function named tellFortune that:

// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

// const partnersNames = ["Monica", "Eric", "Sharon", "George", ];
// const locations = ["Istanbul", "Bern", "Mars", "Paris"];
// const jobTitles = ["Begger", "Teacher", "IT Consultant", "Blogger"];
// const numChildren = [1, 2, 3, "more than 4"];

// function TellFortune(numChild, partnersName, location, jobTitle) {
//             this.numChild= generateRandomNumKids();
//             this.partnersName= generateRandomName();
//             this.location= generateRandomLocation();
//             this.jobTitle= generateRandomJob();
//          };



// function generateRandomName(){
//      return partnersNames[Math.floor(Math.random() * partnersNames.length)]
//  };
// function generateRandomLocation(){
//     return locations[Math.floor(Math.random() * locations.length)]
// };
// function generateRandomJob(){
//     return jobTitles[Math.floor(Math.random() * jobTitles.length)]
// };
// function generateRandomNumKids(){
//     return numChildren[Math.floor(Math.random() * numChildren.length)]
// };

// let fortune1 = new TellFortune(generateRandomNumKids(), generateRandomName(), generateRandomLocation(), generateRandomJob());

// let fortune = `You will be a/an ${fortune1.jobTitle} in ${fortune1.location}, and married to ${fortune1.partnersName} with ${fortune1.numChild} kids`;


// alert(fortune);

// EXCERCISE 3- Exercise: Your Top Choices
// ========================================
// const topColours = ["Blue", "Yellow", "Green"];
// const topSingers = ["Madonna", "Sting", "RHCP", "Metallica", "Dido"];
// topSingers.forEach(top);

// let top = function(){
//     return console.log(`My favorite is "Sting"`)

// }
// console.log(top());

//With Susanne


// favoriteAnimals.forEach(function(animal, index)
//     {
//     console.log(`My ${index+1} favorite animal is ${animal}`)
// };
// let favoriteAnimals = ['Monkey', 'Lion', 'Panda', 'Cat', 'Falcon'];
// for (const animal of favoriteAnimals) {
// //     console.log(animal);
// // }                               // ========>FOR OF LOOP


// // const = presidents = {                      //List OF OBJECTS
// //     names: ['Putin', 'Trump'],
// //     countries: ['Russia', 'USA']
// // }

// // let presidentList = [                          //Array of the Objects
// //     {
// //         lname: 'Putin'
// //         country: 'Russia'
// //     },
// //     {
// //         lname: 'Trump'
// //         country: 'USA'
// //     }
// // ]

// // presidentList.forEach(president,index)=> {
// //     console.log(`The president of ${country} is ${president.lname}`)

// // }

// /**
// Exercise: Your top choices
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
//  */

// const colors = ["red", "blue", "yellow", "black", "brown", "pink"];

// // colors.forEach((color, index) => {
// //     console.log(`My #${index + 1} color is ${color}`);
// // });

// colors.forEach((color, index) => {
//     if (index == 0) {
//         console.log(`My ${index + 1}st color is ${color}`);
//     }
//     else if (index == 1) {
//         console.log(`My ${index + 1}nd color is ${color}`);
//     }
//     else if (index == 2) {
//         console.log(`My ${index + 1}rd color is ${color}`);
//     }
//     else {
//         console.log(`My ${index + 1}th color is ${color}`);
//     }

// });



/*
Exercise: Recipe card
Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
On separate lines (one console.log statement for each), log the recipe information so it looks like:
Soup
Serves: 2
Ingredients: cinnamon, cumin, cocoa
 */

let recipe = {
    title: "Green Salad",
    servings: 5,
    ingredients: ["tomato", "carrot", "cucumber", "onion", "olive oil", "lemon", "salt"]
}

console.log(recipe.title);
console.log(`${Object.keys(recipe)[1]}: ${Object.values(recipe)[1]}`);
console.log(`${Object.keys(recipe)[2]}: ${Object.values(recipe)[2]}`);



