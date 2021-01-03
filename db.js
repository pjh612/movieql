import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json?";

export const getSuggestions = async (id) => {
  const movies = await fetch(
    `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`
  )
    .then((res) => res.json())
    .then((json) => json.data.movies);

  return movies;
};

export const getMovie = async (id) => {
  const movie = await fetch(
    `https://yts.am/api/v2/movie_details.json?movie_id=${id}`
  )
    .then((res) => res.json())
    .then((json) => json.data.movie);
  //console.log(movie);
  return movie;
};

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
