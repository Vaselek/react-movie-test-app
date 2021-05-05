import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MoviePage from './MoviePage';
import { server } from '../../tests/mswServer';
import {responseDataForMovie, responseDataForCast} from '../../tests/responseData';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 1,
  }),
}));


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe('MoviePage main functionality', () => {

  it('fetches movie and Movie component renders its image, rating and description', async () => {
    const movie = responseDataForMovie();
    const imageQuery = `poster for ${movie.title}`;
    const ratingQuery = `${movie.vote_average} Stars`;
    const descriptionQuery = movie.overview;
    render (<MoviePage />);
    await waitFor(()=> expect(screen.getByAltText(imageQuery)).toBeInTheDocument());
    expect(screen.getByLabelText(ratingQuery)).toBeInTheDocument();
    expect(screen.getByText(descriptionQuery)).toBeInTheDocument();
  });

  it('fetches cast and Cast component renders image for every cast item', async () => {
    const firstCastItem = responseDataForCast().cast[0];
    const castQuery = `image of ${firstCastItem.name}`;
    render (<MoviePage />);
    await waitFor(()=> expect(screen.getByAltText(castQuery)).toBeInTheDocument());
  });

});