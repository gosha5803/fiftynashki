import react, {FC, useEffect} from 'react'
import { Board } from '../models/Board'
import CellComponent from './CellComponent'
import { Cell } from '../models/Cell'
import _ from 'lodash'

const BoardComponent: react.FC = () => {
    const [board, setBoard] = react.useState<Board>(new Board())
    const [isStarted, setGameStarted] = react.useState<boolean>(false)
    // let emptyCell:Cell

    react.useEffect(() => {
        const board1 = new Board()
        board1.initCells()
        
        // setEmptyCell() 
        setBoard(board1)

    }, [])

    // useEffect(() => {
    //     console.log(board)
    // }, [board])

    const clickHandler = (cell:Cell) => {
        cell.isEmptyNeighbours()
        rerender()
        // console.log(board.history)
        // const index = board.history.target.length

        // setTimeout(() => {
        //     board.history.target[index - 1].isEmptyNeighbours()
        //     rerender()
        // }, 1000)
        
    }

    const rerender = () => {
        setBoard(board.copyBoard())
        
    }

    const randomizer = () => {
        board.randomize()
        rerender()
        setGameStarted(true)
        // console.log(board.history)
        // board.history.target.map(t => {
        //     console.log(t.chip?.value)
        // })
    }

    // const goBack = () => {
    //     const history = board.history.target
        

        
    //         console.log(history.at(-1))
    //         const backup = history.pop()
    //             console.log(backup)
 
    //         if(backup) {
    //             clickHandler(backup)
    //         }
        
                
        
    //     // while (history.length) {
    //     //     setTimeout(() => {
    //     //         history.pop()
    //     //         console.log(history)
    //     //     }, 1000)
    //     // }
    // }

    console.log(board.cells)
    console.log(board.startPosition)
    // console.log([[1,2], [3, 4]] == [[1, 2], [3, 4]])
    return(
        <>
        {_.isEqual(board.cells, board.startPosition) && isStarted && <h1
        style={{
            position:'fixed',

        }}
        >You Win!</h1>}
        <div 
        className='board'
        >
        {board.cells.map(row => row.map(cell =>
                {
                    if (!cell.chip) {
                        // setEmptyCell(cell)
                        // emptyCell = cell
                    }
                    return (
                        <CellComponent
                        // setEmptyCell={setEmptyCell}
                        clickHandler={clickHandler}
                        cell={cell}
                        key={cell.id}
                        />
                        )
                }
                )
                )}
        
        </div>
        <button
        onClick={() => {randomizer()}}
        >
            Старт
        </button>
        {/* <button
        onClick={() => goBack()}
        >
            BACK
        </button> */}
        </>
    )
}

export default BoardComponent