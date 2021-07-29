import React,{useState,useEffect} from 'react';
import Blocks from './rectangles';
import Menu from './menu';
import MSort from './merge-sort-algo';
const MergeSort=()=>{
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
    const toggleSorted=(block,i)=>{
        let newblock=block.slice();
        newblock[i]={...newblock[i],isSorted:true};
        return newblock;
        }
    const toggleSorting=(block,i,j)=>{
            let newblock=block.slice()
            for(let x=i;x<=j;x++)newblock[x]={...newblock[x],isSorting:!newblock[x].isSorting};
            return newblock;
        }
    const mergesort=async()=>{
        let val=MSort(blocks);
        let newblock=blocks.slice();
        for(let i=0;i<val.length;i++){
        newblock=toggleSorting(newblock,val[i].left,val[i].right);
        setBlocks(newblock);
        newblock=handlesort(newblock,val[i].left,val[i].right,val[i].values);
        await sleep();
        await sleep(500-100*speed);
        }
        for(let i=0;i<number;i++){
            newblock=toggleSorted(newblock,i);
            setBlocks(newblock);
            await sleep();
        }
    }
    const handlesort=(blocks,left,right,blocks2)=>{
        let newblock=blocks.slice();
        let newblock2=blocks2.slice();
        for(let i=left;i<=right;i++)newblock[i]=newblock2[i-left];
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
             visualize={mergesort}
            />
            <div className='underline' style={{height:1,background:'black',width:'55%',marginBottom:10}}></div>
            <Blocks blocks={blocks}/>
            </div>
        );
}
export default MergeSort;