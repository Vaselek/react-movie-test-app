import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import App from './App';
import { server } from './tests/mswServer';
import { responseDataForPopularMovie, responseDataForTrendingMovie, responseDataForMovie} from './tests/responseData';
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


const trendingMovie = responseDataForTrendingMovie();
const popularMovie = responseDataForPopularMovie();
const movieAtMoviePage = responseDataForMovie()


describe('App main functionality', () => {

  it('switch pages between Tabs on click', async () => {
    render (
      <BrowserRouter>
        <App />
      </BrowserRouter>);

    // default page is Trending
    await waitFor(()=> expect(screen.getByAltText(trendingMovie.title)).toBeInTheDocument());

    const popularTab = screen.getByRole('tab', {name: /popular/i});
    userEvent.click(popularTab);
    await waitFor(()=> expect(screen.getByAltText(popularMovie.title)).toBeInTheDocument());

    const searchTab = screen.getByRole('tab', {name: /search/i});
    userEvent.click(searchTab);
    await waitFor(() => expect(screen.getByRole('textbox', {name: /search/i})).toBeInTheDocument());

    const trendingTab = screen.getByRole('tab', {name: /trending/i});
    userEvent.click(trendingTab);
    await waitFor(()=> expect(screen.getByAltText(trendingMovie.title)).toBeInTheDocument());

  });

  it('redirect to MoviePage on View Details button click', async () => {
    render (
      <BrowserRouter>
        <App />
      </BrowserRouter>);

    await waitFor(()=> expect(screen.getByAltText(trendingMovie.title)).toBeInTheDocument());
    const movieCard = screen.getByRole('listitem');
    const viewDetailsButton = within(movieCard).getByRole('button');
    userEvent.click(viewDetailsButton);
    await waitFor(() => expect(screen.getByText(movieAtMoviePage.title)).toBeInTheDocument());
  });

});