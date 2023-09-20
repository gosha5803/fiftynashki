import { Cell } from "./Cell";

export class Chips {
    cell:Cell
    value:number
    isMovable:boolean = false

    constructor(cell:Cell, value:number) {
        this.cell = cell
        this.value = value
       
    }
}