import React from 'react';
import {useParams} from 'react-router-dom';
import {StyledRating} from "../utils/StyledRating";
import FallbackComponent from "../FallbackComponent/FallbackComponent";
import useFetch from "../customHooks/useFetch";
import Cast from "../Cast/Cast";
import './Movie.css';
import {Card} from 'react-bootstrap';

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
    <div className="container-fluid movieWrapper">
      <div className="row pb-4">
        <div className="col-4">
          <img className='img-fluid' src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} />
        </div>
        <div className="col-8">
          <Card className='movieDetails bg-dark'>
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Subtitle className='pb-1'>{ listGenres(movie.genres) }</Card.Subtitle>
              <StyledRating max={10} name="read-only" value={movie.vote_average} readOnly />
              <Card.Text>{movie.overview}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='row castList border-top border-secondary'>
          <Card.Text className='pt-3'>Cast & crew</Card.Text>
          <div className='scrolling-wrapper row flex-row flex-nowrap pb-4'>
          <Cast cast={cast} />
          </div>
      </div>
    </div>
  );
};

export default Movie;