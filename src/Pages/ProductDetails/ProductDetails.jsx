import { useEffect, useState } from "react";
import { getMovieDetails } from "../../services/movies";
import { useParams } from "react-router-dom";
import { CardMedia } from "@mui/material";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [movie, setMovie] = useState();

  const params = useParams();

  async function setMovieDetails(params) {
    const movie = await getMovieDetails(params.id);
    setMovie(movie);
  }

  useEffect(() => {
    setMovieDetails(params);
  }, [params]);

  return (
    <>
      <h1>Movie Details</h1>
      {movie && (
        <div className="container">
          <CardMedia
            className="pic"
            component={"img"}
            image={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt="movies poster"
          />

          <div className="details">
            <h2>{movie.title}</h2>
            <p className="rating">vote: {movie.vote_average}</p>
            <p className="status">status: {movie.status}</p>
            <p className="overview">{movie.overview}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
