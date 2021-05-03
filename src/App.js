import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Switch, Route} from "react-router-dom";
import React from "react";
import MovieTabs from "./components/MovieTabs/MovieTabs";
import MoviesSearch from "./components/MoviesSearch/MoviesSearch";
import Movies from "./components/Movies/Movies";
import Container from "@material-ui/core/Container/Container";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <div className="App bg-dark min-vh-100 text-light">
      <Navbar />
      <Container maxWidth='lg'>
        <MovieTabs />
        <Switch>
          <Route
            path='/'
            exact={true}
            render={(props) => (
              <Movies {...props} urlPath={'/movie/popular'} trending={false} />
            )}
          />
          <Route
            path='/trending'
            render={(props) => (
              <Movies {...props} urlPath={'trending/all/day'} trending={true} />
            )}
          />
          <Route
            path='/search'
            render={(props) => (
              <MoviesSearch {...props} trending={false} />
            )}
          />
          <Route
            path='/movies/:id'
            render={(props) => (
              <Movie {...props} />
            )}
          />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
