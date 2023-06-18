import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const BASE_URL = "https://api.themoviedb.org/3";
const ROUTE_URL = "/search/movie";
const QUERY_PARAMS = "?query=terminator&page=1&api_key=" + API_KEY;
const fullURL = BASE_URL + ROUTE_URL + QUERY_PARAMS;

// https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1

const Dashboard = () => {
  const [movieList, setMovieList] = useState([]);
  async function getPosts() {
    try {
      const response = await fetch(fullURL);
      const data = await response.json();
      console.log(data);
      setMovieList(data.results);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>movies</h1>
      {movieList.map((movie) => {
        return <Card movie={movie} />;
      })}
    </>
  );
};

export default Dashboard;
