import {CellState} from './cellState'

export class Cell {
    constructor() {
        this.currentState = new CellState(false);
        this.nextState = new CellState(false);
    }

    applyRules(rows, cols, grid){
        const numberOfNeighbors = grid.countNeighborsForPosition(row, col);
        
        if(numberOfNeighbors === 2 || numberOfNeighbors === 3){
            return this.setNextState(true);
        }
        if(numberOfNeighbors < 2){
            return this.setNextState(false);
        }
        if(numberOfNeighbors > 3){
            return this.setNextState(false);
        }
        if(numberOfNeighbors === 3){
            return this.setNextState(true);
        }


    }
    toggleState(){
        this.currentState = JSON.parse(JSON.stringify(this.nextState))
    }
    setNextState(isAlive){
        this.nextState.isAlive = isAlive;
    }
    render(){
        let element = document.createElement(tagName: 'div');
        element.style.height = "20px";
        element.style.width = "20px";
        element.style.border = "1px solid black";
        element.style.backgroundcolor = this.currentState.isAlive ? 'green' : 'white';
        return element;

    }

}