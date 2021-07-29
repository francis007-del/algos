import React from 'react'
import Cells from './cells';
import { useState,useEffect } from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { withRouter } from 'react-router';
import Menu from './menu';
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const Sieve=()=>{
    const [number,setNumber]=useState(200);
    const [cells,setCells]=useState([]);
    const [speed,setSpeed]=useState(5)
    useEffect(()=>{
    let cells=[];
    for(let i=0;i<number;i++)cells.push({val:i,isPrime:false,visited:false});
    setCells(cells);
    },[]);
    const sevie=async ()=>{
        let primes=[];
        let newcells=cells.slice();
        for(let i=0;i<number;i++)primes.push(1);
        primes[0]=0;
        primes[1]=0;
        for(let i=2;i<number;i++){
            if(primes[i]){
                newcells=toggleprimes(newcells,i);
                setCells(newcells);
                for(let j=i*i;j<number;j+=i){
                   newcells=togglevis(newcells,j);
                   setCells(newcells);
                   primes[j]=0;
                   await sleep(500-100*speed)
                }
            }
        }
    }
    const toggleprimes=(cells,ind)=>{
     let newcells=cells.slice();
     let cell=newcells[ind];
     let newcell={...cell,isPrime:true};
     newcells[ind]=newcell;
     return newcells;
    }
    const togglevis=(cells,ind)=>{
        let newcells=cells.slice();
        let cell=newcells[ind];
        let newcell={...cell,visited:true};
        newcells[ind]=newcell;
        return newcells;
       }
    
       const changeNumber=async (e)=>{
           setNumber(e);
           let cells=[];
           for(let i=0;i<e;i++)cells.push({val:i,isPrime:false,visited:false});
           setCells(cells);  
       }
       const changeSpeed=(e)=>{
           setSpeed(e);
        }
       const refresh=()=>{
           setNumber(200);
           let cells=[];
           for(let i=0;i<200;i++)cells.push({val:i,isPrime:false,visited:false,visiting:false});
           setCells(cells);  
       }
        return(
            <div>
                <Menu
                number={number}
                speed={speed}
                changeNumber={changeNumber}
                changeSpeed={changeSpeed}
                refresh={refresh}
                visualize={sevie}
                />
                <div className='underline'></div>
               <Cells cells={cells}/>
               
                 
            </div>
        );
    

}
export default (Sieve);