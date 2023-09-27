import { Cell } from "./Cell";
// import { IHistory } from "./IavailableWays";

export class Board {
    cells:Cell[][] = []
    startPosition:Cell[][] = []
    inBackup:boolean = false
    history: Cell[] = []

    constructor(){
        let v = 0
        for (let i = 0; i < 4; i++) {
            let row:Cell[] = []
            for (let j = 0; j < 4; j++) {
                row.push(new Cell(this, i, j, v, 
                    // !!v
                    ))
                
                v += 1
            }
            
            this.startPosition.push(row)
            // console.log(this.cells)
        }
    }

    public initCells() {
        let v = 0
        for (let i = 0; i < 4; i++) {
            let row:Cell[] = []
            for (let j = 0; j < 4; j++) {
                row.push(new Cell(this, i, j, v, 
                    // !!v
                    ))
                
                v += 1
            }
            this.cells.push(row)
            
            // console.log(this.cells)
        }
        
    } 

    // getCells(x:number,y:number) {
        
    //     return this.cells[x][y]
    // }

    public changeHistory (target:Cell) {
        this.history?.push(target)
        // this.history?.this.push(start)
    }

    popHistory () {
        this.history.pop()
    }

    copyBoard() {
        const newBoard = new Board()
        newBoard.cells = this.cells
        newBoard.startPosition = this.startPosition
        newBoard.history = this.history
        // console.log(newBoard.history)
        return newBoard
    }

    // getHistoryLast() {
    //     return this.history.at(-1)
    // }

    randomize() {
        let realTarget:Cell | undefined
        let available:Cell[] | null = []  
           
        function randomNumber () {
            let range = 20 + Math.random()*10
            return Math.floor(range)
        }
        let size = randomNumber()


        while (size > 0) {
            for(let i = 0; i < 4; i++){
                for(let j = 0; j < 4; j++){
                    let target = this.cells[i][j]
                    if(target.findAvailable().length) {
                        const result = target.findAvailable()
                        realTarget = (result.pop()) 
                        available.push(result[0])
                    }
                }
            }
            // console.log(available, realTarget)
            let randomIndex = Math.floor(Math.random() * available.length)
            // console.log(available[randomIndex])
            if(realTarget) {
                // console.log('hello')
                available[randomIndex].moveChip(realTarget)
            }
            
            size--
        }
        

        

    }




}
    // public initCells() {
    //     let row:Cell[] = []
    //     for (let i = 0; i <= 15; i++) {
    //         row.push(new Cell(i + 1, i, i, !!i))
    //         // row.push(new Cell(i + 1, i, i + 1, true))
    //     }
    //     this.cells.push(row)
    //     console.log(this.cells)
    // 
