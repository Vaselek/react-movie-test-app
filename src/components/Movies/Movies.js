import React from 'react';
import MovieCard from "../MovieCard/MovieCard";
import './Movies.css';
import {useHistory} from 'react-router-dom';
import FallbackComponent from "../FallbackComponent/FallbackComponent";

const Movies = ({ movies, error, status }) => {

  let history = useHistory();

  const movieList = movies.map(movie => <MovieCard key={movie.id} handleClick={()=>seeMovieDetails(movie.id)} movie={movie}/>);

  const seeMovieDetails = (id) => {
    history.push('/movies/' + id)
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (error) return <FallbackComponent/>;
  return (
    <div className='moviesContainer'>
      { movieList }
    </div>
  );
};

export default Movies;