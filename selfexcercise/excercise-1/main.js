let heading1 = document.getElementById("h1");
let anchor = document.getElementById("a");
let par = document.getElementById("p");
let text = "";
let text1 = "";
let text2 = "";


for(i = 1; i <= 2; i++){
    text += heading1.textContent + [i] + "<br>"
}
heading1.innerHTML = text;

for(i = 1; i <= 4; i++){
    text1 += [i] + par.textContent + "<br>"
}
par.innerHTML = text1;

for(i = 1; i <= 7; i++){
    text2 += [i] + "<br>"
}

anchor.innerHTML = text2;








