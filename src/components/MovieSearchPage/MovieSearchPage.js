import React, {useState} from 'react';
import Movies from "../Movies/Movies";
import MovieSearchInput from "../MovieSearchInput/MovieSearchInput";
import useFetch from "../customHooks/useFetch";
import {SEARCH_MOVIE_PATH} from "../../api/constants";


const MovieSearchPage = () => {

  const [query, setQuery] = useState('');

  let movies = [];
  const { payload: moviesPayload, status: fetchMoviesStatus, error: fetchMoviesError } = useFetch(SEARCH_MOVIE_PATH, query);
  if (fetchMoviesStatus === 'success') movies = moviesPayload.results;

  const onChange = (value) => {
    setQuery(value);
  };

  return (
    <div>
      <MovieSearchInput onChange={onChange} />
      { query && <Movies movies={movies} error={fetchMoviesError} status={fetchMoviesStatus} />}
    </div>
  );
};

export default MovieSearchPage;