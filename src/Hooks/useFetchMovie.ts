import { useEffect, useState } from "react";
import ApiClient from "../Services/Api-Client";

export interface MovieDataSchema {
  movieId: string;
  title: string;
  genre: string;
  duration: string;
  movieImg: string;
  releaseDate: string;
  rating: number;
  description: string;
  status: string;
}

const useFetchMovie = (pageNo: number, pageSize: number) => {
  const [movieData, setMovieData] = useState<MovieDataSchema[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setisLoading(true);
    ApiClient.get("/movie/", { params: { pageNo: pageNo, pageSize: pageSize } })
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
