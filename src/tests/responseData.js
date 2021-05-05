export const responseDataForMovie = () => {
  return {
    id: 1,
    poster_path: 'poster_path.jpg',
    title: 'The Croods: A New Age',
    vote_average: 5,
    overview: 'This is movie description',
    genres: [{id: 1, name: 'Fantasy'}]
  }
};

export const responseDataForTrendingMovie = () => {
  return {
    id: 1,
    poster_path: 'poster_path.jpg',
    title: 'The trending movie',
    vote_average: 5,
    overview: 'This is movie description',
    genres: [{id: 1, name: 'Fantasy'}]
  }
};

export const responseDataForPopularMovie = () => {
  return {
    id: 1,
    poster_path: 'poster_path.jpg',
    title: 'The popular movie',
    vote_average: 5,
    overview: 'This is movie description',
    genres: [{id: 1, name: 'Fantasy'}]
  }
};

export const responseDataForCast = () => {
  return {
    id: 1,
    cast: [
      {
        cast_id: 1,
        profile_path: 'profile_path.jpg',
        name: 'John Doe'
      }
    ]
  }
};