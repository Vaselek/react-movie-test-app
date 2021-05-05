import React from 'react';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import MovieSearchPage from './MovieSearchPage';
import { server } from '../../tests/mswServer';


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe('MovieSearchPage main functionality', () => {

  it('renders Search input', () => {
    render (<MovieSearchPage />);
    expect(screen.getByRole('textbox', {name: /search/i})).toBeInTheDocument()
  });

  it('launches search request when user hits Enter or stops typing ', async () => {
    const { getByAltText } = render (<MovieSearchPage />);
    const searchInput = screen.getByRole('textbox', {name: /search/i});
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'Croods' } });
    });
    await act(async () => {
      fireEvent.keyDown(searchInput, {key: 'Enter', code: 'Enter'})
    });
    await waitFor(() => expect(getByAltText('The Croods: A New Age')).toBeInTheDocument())
  });

});