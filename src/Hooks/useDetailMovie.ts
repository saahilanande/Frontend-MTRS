import { useEffect, useState } from "react";
import { MovieDataSchema } from "./useFetchMovie";
import ApiClient from "../Services/Api-Client";

export type MyParams = {
  id: string;
};

const useDetailMovie = (movieId: string) => {
  const [movieData, setMovieData] = useState<MovieDataSchema>();
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setisLoading(true);
    ApiClient.get("/movie/" + movieId)
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

export default useDetailMovie;
