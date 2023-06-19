import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styled from "@emotion/styled";
import "./Dashboard.css";

const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const BASE_URL = "https://api.themoviedb.org/3";
const DISCOVER_ROUTE = "/discover/movie";
const SEARCH_ROUTE = "/search/movie";

const Movies = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
`;

const Dashboard = () => {
  const [movieList, setMovieList] = useState([]);
  async function getPosts() {
    const BASE_QUERY = `?api_key=${API_KEY}&page=1`;
    const QUERY_PARAMS = BASE_QUERY + "&query=terminator";

    // const fullURL = BASE_URL + SEARCH_ROUTE + QUERY_PARAMS;
    const fullURL = BASE_URL + DISCOVER_ROUTE + BASE_QUERY;

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
      <Movies>
        {movieList.map((movie) => {
          return <Card movie={movie} />;
        })}
      </Movies>
    </>
  );
};

export default Dashboard;
