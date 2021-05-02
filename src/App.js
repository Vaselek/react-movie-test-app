import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Switch, Route} from "react-router-dom";
import React from "react";
import MovieTabs from "./components/MovieTabs/MovieTabs";
import MoviesSearch from "./components/MoviesSearch/MoviesSearch";
import Movies from "./components/Movies/Movies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieTabs />
      <Switch>
        <Route
          path='/'
          exact={true}
          render={(props) => (
            <Movies {...props} trending={false} />
          )}
        />
        <Route
          path='/trending'
          render={(props) => (
            <Movies {...props} trending={true} />
          )}
        />
        <Route
          path='/search'
          render={(props) => (
            <MoviesSearch {...props} trending={false} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
