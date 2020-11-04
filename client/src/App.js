import React,{Component} from 'react';
import BookList from "./components/BookList";
import ApolloClient from "apollo-boost";
import ApolloProvider from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql";
});

class App extends Component{
  render(){
    return(
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Application Reading List</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
