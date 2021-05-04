import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Movie from './Movie';
import { server } from '../../tests/mswServer';
import {responseDataForMovie, responseDataForCast} from '../../tests/responseData';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: 1,
  }),
}));


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe('Movie main functionality', () => {

  it('fetches movie and renders its image, rating and description', async () => {
    const movie = responseDataForMovie();
    const imageQuery = `poster for ${movie.title}`;
    const ratingQuery = `${movie.vote_average} Stars`;
    const descriptionQuery = movie.overview;
    render (<Movie />);
    await waitFor(()=> expect(screen.getByAltText(imageQuery)).toBeInTheDocument());
    expect(screen.getByLabelText(ratingQuery)).toBeInTheDocument();
    expect(screen.getByText(descriptionQuery)).toBeInTheDocument();
  });

  it('fetches cast and renders image for every cast item', async () => {
    const firstCastItem = responseDataForCast().cast[0];
    const castQuery = `image of ${firstCastItem.name}`;
    render (<Movie />);
    await waitFor(()=> expect(screen.getByAltText(castQuery)).toBeInTheDocument());
  });

});