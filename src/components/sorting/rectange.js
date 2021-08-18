import React,{useState,useEffect} from 'react';
import './block.css';
const Block=({height,isSorted,isSorting})=>{
    const getColor=()=>{
        if( isSorted ){
            return "rgb(22, 165, 150)";
        } else if( isSorting ){
            return "red";
        } else{
            return "rgb(115, 153, 209)"
        }
    }
    return(
        <div className='block'
        style={{height:height,backgroundColor:getColor(),margin:1}}>
        </div>
    );
    }
export default Block;