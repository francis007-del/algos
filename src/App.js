import './App.css';
import Sieve from './components/seive/seive';
import BubbleSort from './components/sorting/bubblesort';
import QuickSort from './components/sorting/quicksort';
import MergeSort from './components/sorting/merge-sort';
import Homepage from './components/button/homepage/homepage';
import {Switch,Route,Redirect,withRouter,BrowserRouter} from 'react-router-dom';

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
  </Switch>
  </>
  );
}

export default App;
