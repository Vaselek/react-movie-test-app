import React from 'react';
import useFetch from "../customHooks/useFetch";
import Movies from "../Movies/Movies";
import {POPULAR_MOVIES_PATH} from "../../api/constants";

const PopularMoviesPage = () => {
  let movies = [];
  const { payload: moviesPayload, status: fetchMoviesStatus, error: fetchMoviesError } = useFetch(POPULAR_MOVIES_PATH);
  if (fetchMoviesStatus === 'success') movies = moviesPayload.results;

  return (
    <Movies movies={movies} error={fetchMoviesError} status={fetchMoviesStatus} />
  );
};

export default PopularMoviesPage;