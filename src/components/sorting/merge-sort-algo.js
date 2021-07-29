let val=[]
const MSort=(blocks)=>{
    val=[];
    let blocks2=blocks.slice();
    MergeSort(blocks2,0,blocks2.length-1);
    return val;
}
const MergeSort=(blocks,begin,end)=>{
 if(end>begin){
     let mid=begin+Math.floor((end-begin)/2);
     MergeSort(blocks,begin,mid);
     MergeSort(blocks,mid+1,end);
     Merge(blocks,begin,mid,end);
     let newblock=blocks.slice(begin,end+1);
     val.push({left:begin,right:end,values:newblock})
 }
}
const Merge=(blocks,begin,mid,end)=>{
let left=mid-begin+1;
let right=end-mid;
let arrL=blocks.slice(begin,mid+1);let arrR=blocks.slice(mid+1,end+1);
let i=0,j=0,k=begin;
while(left>i&&right>j){
    if(arrR[j].height>=arrL[i].height){
        blocks[k]=arrL[i];
        k++;i++;
    }
    else{
        blocks[k]=arrR[j];
        j++;k++;
    }
}
while(j<right){
    blocks[k]=arrR[j];
    j++;k++;
}
while(i<left){
    blocks[k]=arrL[i];
    i++;k++;
}
}
export default MSort;