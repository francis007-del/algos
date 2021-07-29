import React,{useState,useEffect} from 'react';
import Blocks from './rectangles';
import Menu from './menu';
const BubbleSort=()=>{
    const [number,setNumber]=useState(60);
    const [blocks,setBlocks]=useState([]);
    const [speed,setSpeed]=useState(5);
    useEffect(()=>{
        let blocks=[];
        for(let i=0;i<number;i++)blocks.push({height:Math.floor(Math.random() * 200)+250,isSorted:false,isSorting:false});
        setBlocks(blocks);
    },[]);
    const bubblesort=async()=>{
        let blocks1=blocks.slice();
        for(let i=1;i<number;i++){
            for(let j=0;j<number-i;j++){
                if(blocks1[j].height>blocks1[j+1].height){
                    await sleep(500-100*speed);
                    blocks1=toggleSorting(blocks1,j);
                    setBlocks(blocks1);
                    blocks1=swap(blocks1,j);
                    setBlocks(blocks1);
                    await sleep(500-100*speed);
                    blocks1=toggleSorting(blocks1,j);
                    setBlocks(blocks1);
                    }
                await sleep(500-100*speed);
            }
        }
        for(let i=0;i<number;i++){
        blocks1=toggleSorted(blocks1,i);
        setBlocks(blocks1);
        await sleep(30);
        }
    }
    const toggleSorted=(cell,j)=>{
        let newblock=cell.slice();
        newblock[j]={...newblock[j],isSorted:true};
        return newblock;
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const toggleSorting=(block,j)=>{
    let newblock=block.slice();
    newblock[j]={...newblock[j],isSorting:!newblock[j].isSorting};
    newblock[j+1]={...newblock[j+1],isSorting:!newblock[j+1].isSorting};
    return newblock;
    }
    const swap=(block,j)=>{
    let newblock=block.slice();
    let x=newblock[j];
    let y=newblock[j+1];
    newblock[j+1]=x;
    newblock[j]=y;
    console.log(block);
    return newblock;
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

    return(
        <div>
            <Menu
             number={number}
             speed={speed}
             changeNumber={changeNumber}
             changeSpeed={changeSpeed}
             refresh={refresh}
             visualize={bubblesort}
            />
            <div className='underline' style={{height:1,background:'black',width:'55%',marginBottom:10}}></div>
            <Blocks blocks={blocks}/>
        </div>
    );
}
export default BubbleSort;