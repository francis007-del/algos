import react from 'react';
import { useEffect,useState } from "react";
import { fireEvent } from "@testing-library/dom";
import Grid from "./grid";
import {bfs,getpath} from './bfs-algo';
import Menu from '../graph/menu';
import './bfs.css';
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const BFS=()=>{
    const [grid,setGrid]=useState([]);
    const [width,setWidth]=useState(Math.floor(window.innerWidth*(90)/2500));
    const [height,setHeight]=useState(Math.floor(600/25));
    const [speed,setSpeed]=useState(5);
    const [mousedown,setMousedown]=useState(false);
    const [changeStartEnd,setStartChange]=useState(false);
    const [changesEnd,setEndChange]=useState(false);
    const [start,setStart]=useState({isWall:false,visited:false,row:3,column:3,isStart:true,isEnd:false,ispathNode:false,previous:-1})
    const [end,setEnd]=useState({isWall:false,visited:false,row:Math.floor(height*3/4),column:Math.floor(width*3/4),isStart:false,isEnd:true,ispathNode:false,previous:-1})
   
    useEffect(()=>{
    let cells=[];
    for(let i=0;i<height;i++){
      let row=[];
      for(let j=0;j<width;j++)row.push({isWall:false,visited:false,row:i,column:j,isStart:false,isEnd:false,ispathNode:false,previous:-1});
      cells.push(row);  
    }
    cells[3][3].isStart=true;
    cells[Math.floor(height*3/4)][Math.floor(width*3/4)].isEnd=true;
    setGrid(cells);
    },[])
    const runbfs=async()=>{
      let order=bfs(grid,start);
      console.log(start);
      for(let node of order){
        await sleep(500-speed*100);
        document.getElementById(`node-${node.row}-${node.column}`).className="node node-visited"
      }
    let path=getpath();
     for(let node of path){
       await sleep();
       grid[node.row][node.column].ispathNode=true;
       document.getElementById(`node-${node.row}-${node.column}`).className="node node-shortest-path"
     }
     
    }
    const refresh=()=>{

     let grid2=[];
     for(let i=0;i<height;i++){
       let r=[];
       for(let j=0;j<width;j++){
         document.getElementById(`node-${i}-${j}`).className="node";
         r.push({isWall:false,visited:false,row:i,column:j,isStart:false,isEnd:false,ispathNode:false,previous:-1});}
       grid2.push(r);
     }
     grid2[3][3].isStart=true;
     grid2[Math.floor(height*3/4)][Math.floor(width*3/4)].isEnd=true;
     setGrid(grid2);
     document.getElementById(`node-${start.row}-${start.column}`).className='node node-start';
     document.getElementById(`node-${end.row}-${end.column}`).className='node node-end'
     setStart({isWall:false,visited:false,row:3,column:3,isStart:true,isEnd:false,ispathNode:false,previous:-1});
     setEnd({isWall:false,visited:false,row:Math.floor(height*3/4),column:Math.floor(width*3/4),isStart:false,isEnd:true,ispathNode:false,previous:-1});
    }
    const changeSpeed=(event)=>{
     setSpeed(event)
    }
    const createmaze=()=>{
      let cells=[];
     for(let i=0;i<height;i++){
       let row=[];
       for(let j=0;j<width;j++){
       if(i===start.row&&j===start.column)row.push({isWall:false,visited:false,row:i,column:j,isStart:true,isEnd:false,ispathNode:false,previous:-1});
       else if(i===end.row&&j===end.column)row.push({isWall:false,visited:false,row:i,column:j,isStart:false,isEnd:true,ispathNode:false,previous:-1});
       else{
         let x=Math.round(Math.random()*100);
         if(x%3==0)row.push({isWall:true,visited:false,row:i,column:j,isStart:false,isEnd:false,ispathNode:false,previous:-1});
         else row.push({isWall:false,visited:false,row:i,column:j,isStart:false,isEnd:false,ispathNode:false,previous:-1});
       }
     }
     cells.push(row);
    }
    
    setGrid(cells);
    }
    const handleMousedown=(row,column)=>{
     if(row===start.row&&column===start.column){setStartChange(!changeStartEnd);}
     if(row===end.row&&column===end.column){setEndChange(!changesEnd);}
     setMousedown(!mousedown);
    }
    
    const onMouseEnter=(row,column)=>{
     let cells=grid.slice();
     
     if(mousedown){
       if(changeStartEnd){
       {
          cells[start.row][start.column]={...cells[start.row][start.column],isStart:false}
          cells[row][column]={...cells[row][column],isStart:true}
          let begin=cells[row][column];
          setStart(begin);
          setGrid(cells);
        }
       }
       else if(changesEnd){
        cells[end.row][end.column]={...cells[end.row][end.column],isEnd:false}
        cells[row][column]={...cells[row][column],isEnd:true}
        let close=cells[row][column];
        setEnd(close);
        setGrid(cells);
       }
       else{
       cells[row][column]={...cells[row][column],isWall:true};
       setGrid(cells);
      }
     }
    }
    return(
        <div>
          <Menu refresh={refresh} changeSpeed={changeSpeed} speed={speed} visualize={runbfs} createmaze={createmaze}/>
          <div className='underline'></div>
          <div className="grid">
           <Grid grid={grid} onMouseEnter={onMouseEnter} onMouseDown={handleMousedown}/>
           </div>
           
        </div>
    );
}
export default BFS;