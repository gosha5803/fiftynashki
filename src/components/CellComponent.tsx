import react, { useEffect } from 'react'
import { Cell } from '../models/Cell'

interface CellComponentProps {
    cell:Cell
    clickHandler: (cell:Cell) => void
    // setEmptyCell:(cell:Cell) => void
}

const CellComponent: react.FC <CellComponentProps> = ({cell, clickHandler}) => {
    
    
    // useEffect(() => {
    //     if (!cell.chip) {
    //         cell.board.highLightDisbled(cell)
    //         setEmptyCell(cell)
    //     }
    // },[])

    return(
        <div
        className='cell'
        onClick={() =>clickHandler(cell)}
        >
            {cell.chip 
            ? <div className={`chip ${cell.chip.isMovable ? 'movable' : ''}`}>
                {cell.chip.value}
                {/* x:{cell.x} y:{cell.y} */}
            
            </div>
            :''}
        </div>
        
    )
}

export default CellComponent