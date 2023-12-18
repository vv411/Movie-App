const API_BASE_POPULAR_ROOT_URL = "https://api.themoviedb.org/3/movie/popular"
const API_BASE_POSTER_ROOT_URL = "https://image.tmdb.org/t/p/"
const API_BASE_MOVIE_ROOT_URL = "https://api.themoviedb.org/3/movie/"
const API_KEY = import.meta.env.VITE_THEMOVIEDB_API_KEY

//file for storing any api configuration or path data

export default {
    API_BASE_POPULAR_ROOT_URL,
    API_BASE_POSTER_ROOT_URL,
    API_BASE_MOVIE_ROOT_URL,
    API_KEY
};