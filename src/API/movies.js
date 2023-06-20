import axios from "axios";

const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const BASE_URL = "https://api.themoviedb.org/3";
const DISCOVER_ROUTE = "/discover/movie";
const SEARCH_ROUTE = "/search/movie";

const BASE_QUERY = `?api_key=${API_KEY}&page=1`;
const QUERY_PARAMS = BASE_QUERY + "&query=terminator";

// const fullURL = BASE_URL + SEARCH_ROUTE + QUERY_PARAMS;
const fullURL = BASE_URL + DISCOVER_ROUTE + BASE_QUERY;

const client = axios.create({
  baseURL: BASE_URL,
});

export async function getMovies() {
  try {
    const response = await fetch(fullURL);
    const data = await response.json();
    console.log(data);
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
