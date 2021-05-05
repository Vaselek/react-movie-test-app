import React from 'react';
import CastCard from "../CastCard/CastCard";
import Card from "react-bootstrap/Card";

const Cast = ({cast}) => {

  const castList = cast.map(item => <CastCard key={'cast_' + item.id} item={item}/>)

  return (
    <div className='row castList border-top border-secondary'>
      <Card.Text className='pt-3'>Cast & crew</Card.Text>
      <div className='scrolling-wrapper row flex-row flex-nowrap pb-4'>
      {castList}
      </div>
    </div>
  );
};

export default Cast;