import React from 'react';
import {useParams} from 'react-router-dom';
import {StyledRating} from "../utils/StyledRating";
import FallbackComponent from "../FallbackComponent/FallbackComponent";
import useFetch from "../customHooks/useFetch";

const Movie = () => {

  const { id } = useParams();

  const castPath = `/movie/${id}/credits`;
  const moviePath = `movie/${id}`;

  const { payload: movie, status: fetchMovieStatus, error: fetchMovieError } = useFetch(moviePath);
  const { payload: castPayload, status: fetchCastStatus, error: fetchCastError } = useFetch(castPath);

  const listGenres = (genres) => {
    return genres.map(genre => <span key={genre.id}>{genre.name} </span>);
  };

  if (fetchMovieStatus === 'loading' || fetchCastStatus === 'loading') return <div>Loading...</div>;
  if (fetchMovieError || fetchCastError) return <FallbackComponent />;

  const { cast } = castPayload;

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img className='img-fluid' src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} />
        </div>
        <div className="col-8">
          <h3>{movie.title}</h3>
          <div>{ listGenres(movie.genres) }</div>
          <StyledRating max={10} name="read-only" value={movie.vote_average} readOnly />
          <div>{movie.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default Movie;