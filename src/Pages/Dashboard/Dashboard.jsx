import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styled from "@emotion/styled";
import "./Dashboard.css";
import { getRandomMovies } from "../../API/movies";

const Movies = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
`;

const Dashboard = () => {
  const [movieList, setMovieList] = useState([]);

  async function getMovies() {
    const movies = await getRandomMovies();
    setMovieList(movies);
    console.log(movies);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1>movies</h1>
      <Movies>
        {movieList.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </Movies>
    </>
  );
};

export default Dashboard;
