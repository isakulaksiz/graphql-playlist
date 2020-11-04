import React,{Component} from 'react';
import BookList from "./components/BookList";

class App extends Component{
  render(){
    return(
      <div id="main">
        <h1>Application Reading List</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
