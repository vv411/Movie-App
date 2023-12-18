import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchMovieById } from "../apis/themoviedb/fetch_themoviedb";
import Banner from "../components/Banner/Banner";

type ResponseObject = Record<string, any>

const MovieDetails = () => {
    const [movie, setMovie] = useState<ResponseObject>({});
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            fetchMovieById(params.id)
            .then(response => setMovie(response));
        }
    }, [])

    return (
        <div>
            <Banner colour="black" showHomeButton={true} text={"Movie Details"}></Banner>
            <Banner colour="brown" showHomeButton={false} text={movie.title}></Banner>

            <div className="flex m-8">
                <div className="w-2/5">
                    <img className="rounded-md" src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}></img>
                </div>
                <div className="w-3/5 text-left mx-8 grid grid-rows-3">
                    <div className="font-normal text-2xl text-[#212121] md:text-4xl">
                        <span>{movie.release_date ? movie.release_date.split("-")[0] : ""}</span>
                        <span className= "italic font-normal text-xl block">{movie.runtime} mins</span>
                    </div>
                    <div className="my-auto font-bold text-xl">
                        {movie.vote_average ? Number(movie.vote_average).toFixed(1) : ""}/10
                    </div>
                    <button className="bg-[#746A64] w-full text-xl font-normal text-white font-bold py-2 px-4 border rounded-lg">
                        Add To Favorite
                    </button>
                </div>
            </div>
            <div className="flex text-xl m-8 text-[#757575] md:text-2xl">
                <p>{movie.overview}</p>
            </div>

        </div>
    )
}

export default MovieDetails