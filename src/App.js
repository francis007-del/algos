import './App.css';
import Sieve from './components/seive/seive';
import BubbleSort from './components/sorting/bubblesort';
import QuickSort from './components/sorting/quicksort';
import MergeSort from './components/sorting/merge-sort';
import Homepage from './components/button/homepage/homepage';
import {Switch,Route,Redirect,withRouter,BrowserRouter} from 'react-router-dom';
import BFS from './components/pathfindiing/bfs';
import DFS from './components/pathfindiing/dfs';
function App() {
  return (
    <>
    <Homepage/>
  <Switch>
  <Route exact path="/" component={MergeSort}/>
    <Route path="/math/sieve" component={Sieve}/>
    <Route path="/sort/mergesort" component={MergeSort}/>
    <Route path="/sort/quicksort" component={QuickSort}/>
    <Route path="/sort/bubblesort" component={BubbleSort}/>
    <Route path="/graphs/bfs" component={BFS}/>
    <Route path="/graphs/dfs" component={DFS}/>
    <Route path="/graphs/dijkstras" component={BFS}/>
  </Switch>
  </>
  );
}

export default App;
