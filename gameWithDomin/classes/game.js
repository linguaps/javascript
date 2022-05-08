import { Grid } from "./grid";

export class Game {
    construct(rows, cols, rootElementId){
        this.grid = new Grid(rows, cols);
        this.rootElement = document.getElementById(rootElementId);

    }
initialiseFrame(){
    if(this.rootElement.hasChildNodes()){
        throw Error('Root element is already initialised');
    }

    this.rootElement.style.display = 'grid';
    this.rootElement.style.gridTemplateRows = `repeat(${this.grid.rows}, 20px)`;
    this.rootElement.style.gridTemplateColumns = `repeat(${this.grid.cols}, 20px)`;

    for(let i = 0; i < this.grid.rows; i++){
        for(let j = 0; j < this.grid.cols; i++){
            const element = this.grid.matrix[i][j];
            this.rootElement.appendChild(element.render());
        }
    }

}
}