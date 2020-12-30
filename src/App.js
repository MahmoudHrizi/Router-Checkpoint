import React from "react";
import MovieList from "./components/MovieList";
import MovieDescription from "./components/MovieDescription";
import "./App.css";
import { Route, Switch } from "react-router-dom";
//import NavBar from "./components/NavBar";
//import UsersList from "./components/UsersList";

function App() {
  return (

    //<Router>
    // <NavBar />
    <Switch>
      <Route path="/" exact component={MovieList} />

      {/*<Route path='/NavBar' component={NavBar} />
        <Route exact path="/" component={MovieList} />
        <Route exact path="/users" component={UsersList} />*/}
      <Route path="/movie/: id" exact component={MovieDescription} />


    </Switch>
    //</Router>

  );
}

export default App;
