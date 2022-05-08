// About me
//==============
// Add a script tag to the bottom of the HTML body.
// (In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In the JavaScript) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "list-item".
// (In the HTML head) Add a style tag that sets a rule for .list-item to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

let body = document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

const person = {
    nickname : "Beyaz",
    favorites : "Basketball, Ice Hockey, Music",
    hometown : "Aydin",
};

document.getElementById("nickname").textContent = person.nickname;
document.getElementById("favorites").textContent = person.favorites;
document.getElementById("hometown").textContent = person.hometown;



li.className = 'list-item';

// let img = document.createElement("img");
// body.appendChild("img");
// img.src = 'https://www.kindpng.com/picc/m/483-4830395_300-300-pixel-hd-png-download.png';











// const listItem = document.getElementById("nickname");
// const newItem = document.createElement("p");
// newItem.innerText = `${person.nickname}`;
// listItem.parentNode.replaceChild(newItem, listItem);




// let span1 = parent.querySelector("#nickname");
// let span2 = document.getElementsById("favorites");
// let span3 = document.getElementsById("hometown");



// let par = document.createElement("p");
// let node = document.createTextNode(`${person.nickname}`);
// let parent = document.querySelector("#li1");
// par.appendChild(node);
// parent.replaceChild(par, span1);






// par.innerText(person.favorites);
// par.innerText(person.hometown);
// par.replaceChildren("span");
    










// let nickText = document.createTextNode(`${person.nickname}`);
// let nickname = document.getElementById("nickname");
// nickname.appendChild(nickText);









// let text1 = document.createTextNode(`${person.favorites}`);
// let span1 = document.getElementById("favorites");
// span1.appendChild(text1);
// let text2 = document.createTextNode(`${person.hometown}`);
// let span2 = document.getElementById("hometown");
// span2.appendChild(text2);





















// let h1 = document.querySelector("h1");

// let person = [
//     {nickname : "beyaz"},
//     {favorites : "basketball, ice-hockey"},
//     {hometown : "aydin"},
// ]
    // let li = document.getElementsByTagName("li");
    // let ul = document.getElementsByTagName("ul");
    // body.appendChild("ul");
    // ul.appendChild("li");
    // let nickname = document.createElement("p");
   
    // ul.appendChild(nickname);
    // nickname.innerText = "aa";
    

    

    

    



    
