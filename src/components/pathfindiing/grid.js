import react from 'react';
import Node from './node';
const Grid=({grid,onMouseEnter,onMouseDown})=>{
    return(
<div>
    {grid.map(row=>row.map(node=><Node node={node} onMouseEnter={onMouseEnter} onMouseDown={onMouseDown}/>))}
</div>
    );
}
export default Grid;