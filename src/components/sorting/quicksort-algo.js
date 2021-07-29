let val=[];
const Sort=(blocks)=>{
    val=[]
let blocks2=blocks.slice();
QuickSort(blocks2,0,blocks2.length-1);
return val;
}
const QuickSort=(blocks,low,high)=>{
if(high>low){
    let pi=partition(blocks,low,high);
    QuickSort(blocks,low,pi-1);
    QuickSort(blocks,pi+1,high);
}
}
const partition=(blocks,low,high)=>{
    let pivot=blocks[high];
    let i=low-1;
    for(let j=low;j<high;j++)if(pivot.height>=blocks[j].height){
        i++;
        
        if(i!==j)val.push({left:i,right:j});
        let x={...blocks[i]};
        let y={...blocks[j]};
        blocks[i]=y;
        blocks[j]=x;
    
    }
    
    if(i+1!==high)val.push({left:i+1,right:high});
        let x={...blocks[i+1]};
        let y={...blocks[high]};
        blocks[i+1]=y;
        blocks[high]=x;
        return i+1;
}
export default Sort;