import React, {useState} from 'react';
import Movies from "../Movies/Movies";
import MovieSearchInput from "../MovieSearchInput/MovieSearchInput";


const MovieSearch = () => {

  const [query, setQuery] = useState('');

  const path = '/search/movie';

  const onChange = (value) => {
    setQuery(value);
  };

  return (
    <div>
      <MovieSearchInput onChange={onChange} />
      { query && <Movies urlPath={path} query={query} />}
    </div>
  );
};

export default MovieSearch;