import { node } from 'prop-types';
import react from 'react';
import './node.css';
import { useEffect,setState } from 'react';
const Node=({node,onMouseEnter,onMouseDown})=>{
    const {isWall,isStart,isEnd,visited,row,column,ispathNode}=node;
    const getClassName=()=>{
        if(isWall === true){
            return "node node-wall";
        } else if(isStart === true ){
            return "node  node-start";
        } else if(isEnd === true ){
            return "node  node-end";
        } else if(ispathNode){
            return 'node node-shortest-path';
        }else if(visited === true ){
            return "node  node-visited";
        } else{
            return "node";
        }
    }
    return(
        <div className={getClassName()} id={`node-${row}-${column}`} onMouseEnter={()=>onMouseEnter(row,column)} onMouseDown={()=>onMouseDown(row,column)}>

        </div>
    );
}
export default Node;