import { Link } from "react-router-dom";

type MoviePosterProps = {
    posterUrl: string,
    id: number
}

const MoviePoster : React.FC<MoviePosterProps> = ({ posterUrl, id }) => {
    return (
      <div className="">
        <Link to={`/movies/${id}`}>
            <img className="" src={posterUrl}></img>
        </Link>
      </div>
    );
  };
  
  export default MoviePoster;
  