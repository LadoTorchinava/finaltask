import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Box className="box">
      <Card>
        <CardMedia
          component={"img"}
          image={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt="movies poster"
        />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h6" component={"div"}>
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Release Date: {movie.release_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {movie.vote_average}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link to={`/product/${movie.id}`}>Learn more </Link>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default MovieCard;
