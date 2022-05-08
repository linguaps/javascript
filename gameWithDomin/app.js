import { Game } from "./classes/game";

let game;
let ROW_NUMBER
let COL_NUMBER
function init(){
    const createButton = document.getElementById('createButton');
    const rowInput = document.getElementById('rowInput');
    const colInput = document.getElementById('colInput');

    createButton.onclick = () => {
        ROW_NUMBER = rowInput.value;
        COL_NUMBER = colInput.value;
        game = new Game(ROW_NUMBER, COL_NUMBER, rootElement);
        game.initialiseFrame();
    }
}
window.onclick = () => {
    init();
}


    







