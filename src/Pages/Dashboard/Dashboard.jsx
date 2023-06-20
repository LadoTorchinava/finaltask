import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styled from "@emotion/styled";
import "./Dashboard.css";

const Movies = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
`;

const Dashboard = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // setMovieList(getMovies());
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
