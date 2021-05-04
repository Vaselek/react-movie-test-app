import React from 'react';
import { render, screen, within, waitFor } from '@testing-library/react';
import MovieCard from './MovieCard';
import { server } from '../../tests/mswServer';
import userEvent from '@testing-library/user-event';
import {responseDataForMovie} from '../../tests/responseData';


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe('MovieCard main functionality', () => {

  it('renders MovieCard', () => {
    const movie = responseDataForMovie();
    const handleClick = jest.fn();
    render(<MovieCard movie={movie} handleClick={handleClick}/>);
    const newMovieCardElement = screen.getByRole('listitem');
    expect(newMovieCardElement).toBeInTheDocument();
  });

  it('renders MovieCard image', () => {
    const movie = responseDataForMovie();
    const handleClick = jest.fn();
    render(<MovieCard movie={movie} handleClick={handleClick}/>);
    const newMovieCardElement = screen.getByRole('listitem');
    const movieImg= within(newMovieCardElement).getByAltText(movie.title);
    expect(movieImg).toBeInTheDocument();
  });

  it('fetches movie to get names of genres on hover', async () => {
    const movie = responseDataForMovie();
    const handleClick = jest.fn();
    render(<MovieCard movie={movie} handleClick={handleClick}/>);
    userEvent.hover(screen.getByRole('listitem'));
    await waitFor(() => screen.getByText(movie.genres[0].name));
    expect(screen.getByText(movie.genres[0].name)).toBeInTheDocument();
  });

  it('fire handler on "View details" button click', async () => {
    const movie = responseDataForMovie();
    const handleClick = jest.fn();
    render(<MovieCard movie={movie} handleClick={handleClick}/>);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

});