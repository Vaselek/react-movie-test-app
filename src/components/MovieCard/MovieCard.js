import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './MovieCard.css';
import {StyledRating} from '../utils/StyledRating';

const MovieCard = ({movie, handleClick}) => {
  return (
    <Card key={movie.id} className='movieCard' style={{ width: '18%', marginBottom: '10px' }}>
      <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} />
      <div className='movieCardDetailsWrapper'>
        <div className='movieCardDetails'>
          <StyledRating max={10} name="read-only" size='small' value={movie.vote_average} readOnly />
          <h5>{movie.title}</h5>
          <Button onClick={handleClick} className="btn-success">View Details</Button>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;