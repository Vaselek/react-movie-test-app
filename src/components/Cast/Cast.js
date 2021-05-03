import React, {Fragment} from 'react';
import CastCard from "../CastCard/CastCard";

const Cast = ({cast}) => {

  const castList = cast.map(item => <CastCard item={item}/>)

  return (
    <Fragment>
      {castList}
    </Fragment>
  );
};

export default Cast;