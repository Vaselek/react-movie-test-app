import React from 'react';
import {Card} from "react-bootstrap";

const CastCard = ({item}) => {

  return (
    <Card className='col-2 m-1 bg-dark'>
      <Card.Img alt={`image of ${item.name}`} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
    </Card>
  );
};

export default CastCard;