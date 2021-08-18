import axios from "axios";

const getCurrentlyPlayingMovies = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/movie/now_playing/?api_key=${process.env.REACT_APP_API_KEY}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const movieAPI = {
  getCurrentlyPlayingMovies,
};
