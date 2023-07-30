import { useEffect, useState } from "react";
import ApiClient from "../Services/Api-Client";

interface showtimeShema{
    movieId:number,
    name:string,
    address:string,
    city:string,
    movieDate:string,
    startTimes:string
}


const useFetchShowtime = (movieId:String) => {

    const [showtimeData, setshowtimeData] = useState<showtimeShema[]>([]);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setIsError] = useState("");

    useEffect(() => {
        setisLoading(true);
        ApiClient.get("/showtime/"+movieId)
          .then((res) => {
            setshowtimeData(res.data);
            setisLoading(false);
          })
          .catch((err) => {
            setIsError(err.message);
            setisLoading(false);
          });
      }, []);
      return { showtimeData, isLoading, isError };

};
export default useFetchShowtime;
