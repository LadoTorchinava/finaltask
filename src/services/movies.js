import axios from "axios";

const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const BASE_URL = "https://api.themoviedb.org/3";
const BASE_QUERY = `?api_key=${API_KEY}`;

const client = axios.create({
  baseURL: BASE_URL,
});

export async function getRandomMovies() {
  try {
    const { data } = await client.get(`/discover/movie${BASE_QUERY}&page=1`);

    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getSearchMovies(query) {
  try {
    const { data } = await client.get(
      `/search/movie${BASE_QUERY}&query=${query}&page=1`
    );

    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getMovieDetails(id) {
  try {
    const { data } = await client.get(`/movie/${id}${BASE_QUERY}`);

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
