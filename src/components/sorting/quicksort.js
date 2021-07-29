import React,{useState,useEffect} from 'react';
import Blocks from './rectangles';
import Menu from './menu';
import Sort from './quicksort-algo';
const QuickSort=()=>{
    const [number,setNumber]=useState(60);
    const [blocks,setBlocks]=useState([]);
    const [speed,setSpeed]=useState(5);
    useEffect(()=>{
        let blocks=[];
        for(let i=0;i<number;i++)blocks.push({height:Math.floor(Math.random() * 200)+250,isSorted:false,isSorting:false});
        setBlocks(blocks);
    },[]);
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const changeNumber=(e)=>{
        
        setNumber(e);
        let blocks=[];
        for(let i=0;i<e;i++)blocks.push({height:Math.floor(Math.random() * 200)+250,isSorted:false,isSorting:false});
        setBlocks(blocks);  
    }
    const changeSpeed=(e)=>{
        setSpeed(e);
    }
    
    const refresh=()=>{
    setNumber(60);
    let cells=[];
    for(let i=0;i<60;i++)cells.push({height:Math.floor(Math.random() * 200)+250,isSorted:false,isSorting:false});
    setBlocks(cells);
    }
    const quicksort=async ()=>{
        let val=Sort(blocks);
       let block=blocks.slice();
        for(let i=0;i<val.length;i++){
         block=toggleSorting(block,val[i].left,val[i].right);
         setBlocks(block);
         block=swap(block,val[i].left,val[i].right);
         setBlocks(block);
         await sleep(500-100*speed);
         block=toggleSorting(block,val[i].left,val[i].right);
         setBlocks(block);
        }
        for(let i=0;i<number;i++){
            block=toggleSorted(block,i);
            setBlocks(block);
            await sleep(30);
        }
    }
    const toggleSorted=(block,i)=>{
    let newblock=block.slice();
    newblock[i]={...newblock[i],isSorted:true};
    return newblock;
    }
    const swap=(block,i,j)=>{
    let newblock=block.slice();
    let x={...newblock[i]}
    let y={...newblock[j]}
    newblock[i]=y;
    newblock[j]=x;
    return newblock
    }
    const toggleSorting=(block,i,j)=>{
    let newblock=block.slice()
    newblock[i]={...newblock[i],isSorting:!newblock[i].isSorting};
    newblock[j]={...newblock[j],isSorting:!newblock[j].isSorting};
    return newblock;
    }
    return(
        <div>
            <Menu
             number={number}
             speed={speed}
             changeNumber={changeNumber}
             changeSpeed={changeSpeed}
             refresh={refresh}
             visualize={quicksort}
            />
            <div className='underline' style={{height:1,background:'black',width:'55%',marginBottom:10}}></div>
            <Blocks blocks={blocks}/>
        </div>
    );
}
export default QuickSort