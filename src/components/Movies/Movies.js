import React, {useEffect,useCallback, useState} from 'react';
import {get} from '../../api/httpRequests';

const Movies = ({ trending }) => {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

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
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchMovies();
    setLoading(false);
  }, [fetchMovies]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Sorry, something went wrong...</div>;

  return (
    <div>
      Movies
    </div>
  );
};

export default Movies;