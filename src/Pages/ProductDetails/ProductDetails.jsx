import { useEffect, useState } from "react";
import { getMovieDetails } from "../../API/movies";

const ProductDetails = () => {
  const [movie, setMovie] = useState();

  async function setMovieDetails() {
    const movie = await getMovieDetails(385687);
    setMovie(movie);
  }

  useEffect(() => {
    setMovieDetails();
  }, []);

  return (
    <>
      <h1>Movie Details</h1>
      {movie.title}
    </>
  );
};

export default ProductDetails;
