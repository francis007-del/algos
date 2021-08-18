import reactDom from "react-dom";
import Navbar from "reactjs-navbar";
import { useEffect,useState } from "react";
import "reactjs-navbar/dist/index.css";
import Sieve from "../../seive/seive";
import MergeSort from "../../sorting/merge-sort";
import { Link,withRouter } from "react-router-dom";

const Homepage=({history})=>{
return(
    <div>
        <Navbar
        
        isLoading={true}
        helpCallback={() => {
          alert("I need help... and coffee...");
        }}
        menuItems={[
          {
            title:"Home",
            isAuth: true,
            onClick:()=>history.push('/')
          },
            {
                title: "Math",
                isAuth: true,
                subItems:[
                    {
                        title:"Sievie",
                        isAuth:true,
                        onClick:()=>history.push('/math/sieve')
                    }
                ]
              },
              {
                  title:"Sorting",
                  isAuth:true,
                  subItems:[
                      {
                          title:"BubbleSort",
                          isAuth:true,
                          onClick:()=>history.push('/sort/bubblesort')
                      },
                      {
                        title:"MergeSort",
                        isAuth:true,
                        onClick:()=>history.push('/sort/mergesort')
                    },
                    {
                        title:"QuickSort",
                        isAuth:true,
                        onClick:()=>history.push('/sort/quicksort')
                    }
                  ]
              },
              {
                title:"Graphs",
                isAuth:true,
                subItems:[
                    {title:"BFS",
                          isAuth:true,
                          onClick:()=>history.push('/graphs/bfs')},
                          {
                            title:"DFS",
                            isAuth:true,
                            onClick:()=>history.push('/graphs/dfs')
                          },
                          {
                            title:"Dijkstras",
                            isAuth:true,
                            onClick:()=>history.push('/graphs/dijkstras')
                          }
                ]
              }
              
        ]}
        />
    </div>
);
}
export default withRouter(Homepage);
