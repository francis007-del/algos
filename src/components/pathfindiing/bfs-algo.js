let order=[];
const bfs=(grid,start)=>{
order=[];
let q=[];
start.visited=true;
q.push(start);
order.push(start);
while(q.length){
let curr=q.shift();
if(curr.isEnd)return order;
let neighbours=getneighbours(grid,curr);
for(let neighbour of neighbours){
    neighbour.visited=true;
    neighbour.previous=curr;
    order.push(neighbour);
    q.push(neighbour);
    if(neighbour.isEnd)return order;
    
}
}
return order;
}
const getneighbours=(grid,node)=>{
    let neighbours=[];
if(node.row>0)neighbours.push(grid[node.row-1][node.column]);
if(node.row<grid.length-1)neighbours.push(grid[node.row+1][node.column]);
if(node.column>0)neighbours.push(grid[node.row][node.column-1]);
if(node.column<grid[node.row].length-1)neighbours.push(grid[node.row][node.column+1]);
return neighbours.filter(neighbour=>!neighbour.visited&&!neighbour.isWall);
}
const getpath=()=>{
    let path=[];
    let  end=order[order.length-1];
    while(end.previous!=-1){
        path.push(end);
        end=end.previous;
    }
    return path;
}
export {bfs,getpath};