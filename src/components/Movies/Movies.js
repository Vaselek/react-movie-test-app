import React, {useEffect,useCallback, useState} from 'react';
import {get} from '../../api/httpRequests';
import MovieCard from "../MovieCard/MovieCard";
import './Movies.css';
import {useHistory} from 'react-router-dom';

const Movies = ({ trending }) => {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  let history = useHistory();

  const path = trending ? 'trending/all/day' : '/movie/popular';

  const fetchMovies = useCallback(async() => {
    const response = await get(path);
    if (response.isSuccess) {
      const movies = response.payload.data.results;
      setMovies(movies);
      setError(null);
    } else {
      setError(response.payload)
    }
  }, [path]);

  useEffect(() => {
    setLoading(true);
    fetchMovies();
    setLoading(false);
  }, [fetchMovies]);

  const seeMovieDetails = (id) => {
    history.push('/movies/' + id)
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Sorry, something went wrong...</div>;

  const movieList = movies.map(movie => <MovieCard handleClick={()=>seeMovieDetails(movie.id)} movie={movie}/>);

  return (
    <div className='moviesContainer'>
      { movieList }
    </div>
  );
};

export default Movies;