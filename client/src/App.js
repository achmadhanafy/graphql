import React from "react";
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import { ScBookMain } from "./module/Book/screen";

export const getScreenHeight = () =>{
  return window?.innerHeight
}

export const getScreenWidth = () =>{
  return window?.innerWidth
}

// apollo client setup
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) => {
      console.log(graphQLErrors)
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

// class App extends Component {
//   render() {
//     return (
//         <ApolloProvider client={client}>
//             <div id="main">
//                 <h1>Your's library</h1>
//                 <BookList />
//                 <AddBook />
//             </div>
//         </ApolloProvider>
//     );
//   }
// }

function App() {
  return (
  <ApolloProvider client={client}>
    <div style={{position:'absolute', backgroundColor:'#E5E5CB'}} id='main'>
      <div style={{height: 50, fontSize: 32, textAlign:'right'}}>Your's library</div>
      <ScBookMain/>
    </div>
  </ApolloProvider>
  );
}

export default App;
