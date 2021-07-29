import React,{useState,useEffect} from 'react';
import Block from './rectange';
const Blocks=({blocks})=>{
    return(
        <div style={{display:'flex',justifyContent:'center',height:500}}>
     {
         blocks.map(block=><Block height={block.height} isSorted={block.isSorted} isSorting={block.isSorting}/>)
     }
     </div>
    );
}
export default Blocks;