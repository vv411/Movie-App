import MoviePoster from "../components/MoviePoster/MoviePoster";
import { useState, useEffect } from "react";
import  { fetchPopularMovies } from "../apis/themoviedb/fetch_themoviedb";
import Banner from "../components/Banner/Banner";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [popularMovies, setPopularMoves] = useState([]);

  useEffect(() => {
    fetchPopularMovies()
      .then (response => setPopularMoves(response));

    setIsLoading(false);
  }, []);

  const LoadingIndicator = () => {
    return (
      <div className="LoadingIndicator">
        Loading Movies
      </div>
    )
  }

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <>
      <Banner colour="black" showHomeButton={false} text="Pop movies"></Banner>

      <div className="bg-black w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {popularMovies.map((movie: any, index: number) => (
          <>
            <MoviePoster
              key={index}
              posterUrl={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
              id={movie.id}
            ></MoviePoster>
          </>
        ))}
      </div>
    </>
  );
};  

export default Home;
