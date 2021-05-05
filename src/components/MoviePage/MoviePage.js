import React from 'react';
import {useParams} from 'react-router-dom';
import FallbackComponent from "../FallbackComponent/FallbackComponent";
import useFetch from "../customHooks/useFetch";
import Cast from "../Cast/Cast";
import './MoviePage.css';
import {generatePathForCast, generatePathForMovie} from "../../api/constants";
import Movie from "../Movie/Movie";

const MoviePage = () => {

  const { id } = useParams();

  const castPath = generatePathForCast(id);
  const moviePath = generatePathForMovie(id);

  const { payload: moviePayload, status: fetchMovieStatus, error: fetchMovieError } = useFetch(moviePath);
  const { payload: castPayload, status: fetchCastStatus, error: fetchCastError } = useFetch(castPath);

  if (fetchMovieStatus === 'loading' || fetchCastStatus === 'loading') return <div>Loading...</div>;
  if (fetchMovieError || fetchCastError) return <FallbackComponent />;

  const { cast } = castPayload || [];

  return (
    <div className="container-fluid movieWrapper">
      {moviePayload && <Movie movie={moviePayload} />}
      <Cast cast={cast} />
    </div>
  );
};

export default MoviePage;