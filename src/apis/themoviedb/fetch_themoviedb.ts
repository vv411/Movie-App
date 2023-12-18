import config from './config_themoviedb';

export const fetchPopularMovies = async () => {
   try {
        const response = await fetch(`${config.API_BASE_POPULAR_ROOT_URL}?api_key=${config.API_KEY}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        const result = await response.json();
        const results = result.results;
        return results;
    } catch (error) {
        console.error(error);
    }
}

export const fetchMovieById = async (id: string) => {
    try {
        const response = await fetch(`${config.API_BASE_MOVIE_ROOT_URL + id}?api_key=${config.API_KEY}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        const result = await response.json();

        return result;
    } catch (error) {
        console.error(error);
    }
}