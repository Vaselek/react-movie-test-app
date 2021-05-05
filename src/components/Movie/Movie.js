import React from 'react';
import {StyledRating} from "../utils/StyledRating";
import {Card} from 'react-bootstrap';

const Movie = ({movie}) => {

  const listGenres = (genres) => {
    return genres.map(genre => <span key={genre.id}>{genre.name} </span>);
  };

  return (
      <div className="row pb-4">
        <div className="col-4">
          <img alt={`poster for ${movie.title}`} className='img-fluid' src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} />
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
  );
};

export default Movie;