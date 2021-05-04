import React from 'react';
import MovieCard from "../MovieCard/MovieCard";
import './Movies.css';
import {useHistory} from 'react-router-dom';
import useFetch from "../customHooks/useFetch";
import FallbackComponent from "../FallbackComponent/FallbackComponent";

const Movies = ({ urlPath, trending, query }) => {

  let history = useHistory();

  const { payload: moviesPayload, status: fetchMoviesStatus, error: fetchMoviesError } = useFetch(urlPath, query);

  if (fetchMoviesStatus === 'loading') return <div>Loading...</div>;
  if (fetchMoviesError) return <FallbackComponent/>;

  const movies = moviesPayload.results || [];
  const movieList = movies.map(movie => <MovieCard key={movie.id} handleClick={()=>seeMovieDetails(movie.id)} movie={movie}/>);

  const seeMovieDetails = (id) => {
    history.push('/movies/' + id)
  };

  return (
    <div className='moviesContainer'>
      { movieList }
    </div>
  );
};

export default Movies;