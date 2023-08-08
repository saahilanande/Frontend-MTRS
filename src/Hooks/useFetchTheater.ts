import { useState, useEffect } from "react";
import ApiClient from "../Services/Api-Client";

export interface theaterShema {
  theaterId: String;
  name: String;
  address: String;
  city: String;
  state: String;
  capacity: String;
}

const useFetchTheater = (theaterId: number) => {
  const [theaterData, settheaterData] = useState<theaterShema[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsErrorr] = useState("");

  useEffect(() => {
    setisLoading(true);
    ApiClient.get("/theater/" + theaterId)
      .then((res) => {
        settheaterData(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        setIsErrorr(err.message);
        setisLoading(false);
      });
  }, []);
  return { theaterData, isLoading, isError };
};

export default useFetchTheater;
