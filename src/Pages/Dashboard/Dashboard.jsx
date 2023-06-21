import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Dashboard.css";
import { getRandomMovies, getSearchMovies } from "../../API/movies";
import { Typography, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  width: 300,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

const Dashboard = () => {
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState("");

  async function getMovies(query) {
    if (query && query !== "") {
      const movies = await getSearchMovies(query);
      setMovieList(movies);
    } else {
      const movies = await getRandomMovies();
      setMovieList(movies);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Typography variant="h1">Movies</Typography>
      <div className="search">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            value={query}
            onChange={(e) => {
              setQuery(e.target.value.trim());
            }}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Button
          variant="contained"
          onClick={() => {
            getMovies(query);
          }}
        >
          Search
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            setQuery("");
            getMovies();
          }}
        >
          Clear
        </Button>
      </div>

      <div className="dashboard">
        {movieList.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </>
  );
};

export default Dashboard;
