import "./Card.css";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img
        className="pic"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.title}
      />
      <p>title:{movie.title}</p>
      <p>release_date:{movie.release_date}</p>
      <p>vote_average:{movie.vote_average}</p>
    </div>
  );
};
export default Card;
