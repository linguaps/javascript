// Create a "close" button and append it to each list item

var listItems = document.getElementsByTagName("li");
var i;
for (i = 0; i < listItems.length; i++) {
    var xbutton = document.createElement("span");  
    var txt = document.createTextNode("\u00D7");
    xbutton.className = "close";
    xbutton.appendChild(txt);
    listItems[i].appendChild(xbutton);
};

// Click on a close button to hide the current list item

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
};

// Add a "checked" symbol when clicking on a list item

var list = document.querySelector("ul");
var li = document.getElementsByClassName("li");
list.addEventListener("click", function() {
    if (li.tagName === 'li') {
        li.classList.toggle('checked');
    }
}, false);

// // Create a new list item when clicking on the "Add" button
function newElement(){
var li = document.createElement('li');
var inputValue = document.getElementById("myInput").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
    alert("You must write something!");
} else {
    document.getElementById("myUl").appendChild(li);
}
document.getElementById("myInput").value = "";

    var xbutton = document.createElement("span");  
    var txt = document.createTextNode("\u00D7");
    xbutton.className = "close";
    xbutton.appendChild(txt);
    li.appendChild(xbutton);

    for(i = 0; i < close.length; i++) {
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

};