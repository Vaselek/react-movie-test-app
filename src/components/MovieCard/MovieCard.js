import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import './MovieCard.css';
import {StyledRating} from '../utils/StyledRating';
import {get} from '../../api/httpRequests';

const MovieCard = ({movie, handleClick}) => {

  const moviePath = `movie/${movie.id}`;

  const [genres, setGenres] = useState([]);

  const fetchGenreNames = async() => {
    const { isSuccess, payload } = await get(moviePath);
    if (isSuccess) {
      const newGenres = payload.data.genres.map(genre => { return { ...genre }});
      setGenres(newGenres);
    }
  };

  const listGenres = genres.length === 0 ? 'N/A' : genres.map(genre => <div key={genre.id}>{genre.name}</div>);

  return (
    <Card key={movie.id} role='listitem' onMouseEnter={fetchGenreNames} className='movieCard' style={{ width: '18%', marginBottom: '10px' }}>
      <Card.Img alt={movie.title} variant="top" src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} />
      <div className='movieCardDetailsWrapper'>
        <div className='movieCardDetails'>
          <StyledRating max={10} name="read-only" size='small' value={movie.vote_average} readOnly />
          <div>{listGenres}</div>
          <Button onClick={handleClick} className="btn-success">View Details</Button>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;