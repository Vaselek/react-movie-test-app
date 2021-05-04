import React from 'react';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import MovieSearch from './MovieSearch';
import { server } from '../../tests/mswServer';


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe('MovieSearch main functionality', () => {

  it('renders Search input', () => {
    render (<MovieSearch />);
    expect(screen.getByRole('textbox', {name: /search/i})).toBeInTheDocument()
  });

  it('launches search request when user hits Enter or stops typing ', async () => {
    const { getByAltText } = render (<MovieSearch />);
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