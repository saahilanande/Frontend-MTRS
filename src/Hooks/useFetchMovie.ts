import { useEffect, useState } from "react";
import ApiClient from "../Services/Api-Client";

export interface MovieDataSchema {
  movie_id: string;
  title: string;
  genre: string;
  duration: string;
  movieImg: string;
  releaseDate: string;
  rating: number;
}

const useFetchMovie = () => {
  const [movieData, setMovieData] = useState<MovieDataSchema[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    ApiClient.get("/movie/")
      .then((res) => {
        setMovieData(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        setIsError(err.message);
        setisLoading(false);
      });
  }, []);
  return { movieData, isLoading, isError };
};

export default useFetchMovie;
