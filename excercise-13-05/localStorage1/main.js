const storeButton = document.getElementById("storeButton");
const dataParagraph = document.getElementById("dataParagraph");
const textInput = document.getElementById("textInput");
const clearButton = document.getElementById("clearButton");

const obj = {
    firstName: "Domi",
    lastName: "Jarr",
    age: 22.5,
    coolness : true,
}

storeButton.onclick = () => {
    localStorage.setItem("userInput", textInput.value);
    localStorage.setItem("test123", "someOtherValue");
    putTheDataIntoDom();
}
clearButton.onclick = () => {
    localStorage.removeItem("userInput");
    putTheDataIntoDom();

}

dataParagraph.innerText = `Your data was ${localStorage.getItem("userInput")}`;

function putTheDataIntoDom(){
    dataParagraph.innerText = `Your data was ${localStorage.getItem("userInput")}`;
}

putTheDataIntoDom();