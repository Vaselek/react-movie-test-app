import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Switch, Route} from "react-router-dom";
import React from "react";
import MovieTabs from "./components/MovieTabs/MovieTabs";
import MovieSearchPage from "./components/MovieSearchPage/MovieSearchPage";
import Container from "@material-ui/core/Container/Container";
import {ErrorBoundary} from 'react-error-boundary';
import FallbackComponent from "./components/FallbackComponent/FallbackComponent";
import TrendingMoviesPage from "./components/TrendingMoviesPage/TrendingMoviesPage";
import PopularMoviesPage from "./components/PopularMoviesPage/PopularMoviesPage";
import MoviePage from "./components/MoviePage/MoviePage";


function App() {
  return (
    <div className="App bg-dark min-vh-100 text-light">
      <Navbar />
      <Container maxWidth='lg'>
        <MovieTabs />
        <ErrorBoundary FallbackComponent={FallbackComponent}>
          <Switch>
            <Route
              path='/'
              exact={true}
              render={(props) => (
                <PopularMoviesPage {...props} />
              )}
            />
            <Route
              path='/trending'
              render={(props) => (
                <TrendingMoviesPage {...props} />
              )}
            />
            <Route
              path='/search'
              render={(props) => (
                <MovieSearchPage {...props} />
              )}
            />
            <Route
              path='/movies/:id'
              render={(props) => (
                <MoviePage {...props} />
              )}
            />
          </Switch>
        </ErrorBoundary>
      </Container>
    </div>
  );
}

export default App;
