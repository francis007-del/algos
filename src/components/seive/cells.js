import React from 'react';
import Cell from './cell';
const Cells=({cells})=>{
    
        return(
            <div>
                {
                cells.map((cell)=><Cell cell={cell}/>)
                }
            </div>
        )
    
}
export default Cells;