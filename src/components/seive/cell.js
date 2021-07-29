import React from 'react';
import './cell.css' 
const Cell=(cell)=>{
    
    const getType=()=>{
        const {isPrime,visited}=cell.cell;
       
        if(isPrime){
            return "cell cell-prime m-2";
         }else if(visited){
             return "cell cell-visited m-2";
         }else{
             return "cell m-2";
         }
    }
    return(
            <div className={getType()}>
                <span>
                    {cell.cell.val}
                </span>
            </div>
        );
    
    
}
export default Cell;