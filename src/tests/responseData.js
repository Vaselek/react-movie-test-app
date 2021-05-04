export const responseDataForMovie = () => {
  return {
    id: 1,
    poster_path: 'poster_path.jpg',
    title: 'Croods',
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