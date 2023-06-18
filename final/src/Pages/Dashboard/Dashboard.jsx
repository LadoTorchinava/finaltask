import { useEffect } from "react";

const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const BASE_URL = "https://api.themoviedb.org/3";
const ROUTE_URL = "/discover/movie";
const QUERY_PARAMS = "?sort_by=popularity.desc&page=1&api_key=" + API_KEY;
const fullURL = BASE_URL + ROUTE_URL + QUERY_PARAMS;

const Dashboard = () => {
  async function getPosts() {
    try {
      const response = await fetch(fullURL);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>something</h1>
    </>
  );
};

export default Dashboard;
