import { Board } from "./Board"
import { Chips } from "./Chips"

export class Cell {
    x:number
    y:number
    // value:number
    // isMoveAble:boolean = false
    board:Board
    chip:Chips | null
    id:number
    

    constructor(board: Board, x:number, y:number, id: number,
        //  moveable: boolean
         ) {
        // this.isMoveAble = moveable
        this.id = id
        this.x = x
        this.y = y
        this.board = board
        this.chip = this.id == 15 ? null : new Chips(this, id + 1)
        
    }

    // highLightNeighbours(target:Cell){
    //     const absX = Math.abs(this.x - target.x)
    //     const absY = Math.abs(this.y - target.y)
        
    //     if(
    //         (this.x == target.x && absY == 1) && !target.chip
    //         ||
    //         (this.y == target.y && absX == 1) && !target.chip
            
    //         ) {
    //         // console.log(target)
    //         this.moveChip(target)
    //         return
    //     }
        
    //     console.log(target, this)
    // }


    highLightNeighbours(target:Cell){
        const absX = Math.abs(this.x - target.x)
        const absY = Math.abs(this.y - target.y)
        
        if(
            (this.x == target.x && absY == 1) && !target.chip
            ||
            (this.y == target.y && absX == 1) && !target.chip
            
            ) {
            // console.log(target)
            this.moveChip(target)
            return
        }
        
        // console.log(target, this)
    }
    
    
    isEmptyNeighbours() {
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                this.highLightNeighbours(this.board.cells[i][j])
            }
        }

    }

    setChip(target:Cell) {
        target.chip = this.chip
        this.chip = null
        // console.log(this)
    }
    
    moveChip(target:Cell) {
            this.board.changeHistory(target)
            this.setChip(target)
            // console.log(this.board.history)
        
        
        // setTimeout(() => {
        //     history.target[0].moveChip(history.this[0])
        //     console.log('hello')
        // },2000)
        
        
    } 

    // moveChipBack(){
    //     this.setChip(target)
    // }

    findAvailable() {
        let available:Cell[] = []
        let topNeighbour = this.x > 0 ? this.board.cells[this.x - 1][this.y] : this
        let bottomNeighbour = this.x < 3 ? this.board.cells[this.x + 1][this.y] : this
        let leftNeighbour = this.y > 0 ? this.board.cells[this.x][this.y - 1] : this
        let rightNeighbour = this.y < 3 ? this.board.cells[this.x][this.y + 1] : this

        const neighbours = [
            topNeighbour,
            bottomNeighbour,
            leftNeighbour,
            rightNeighbour
        ]
        
        neighbours.forEach(neighbour => {
            if (!neighbour?.chip && this.chip) {
                // console.log(neighbour, this)
                available.push(this)
                available.push(neighbour)
            }
        })
        return available        
    }
}