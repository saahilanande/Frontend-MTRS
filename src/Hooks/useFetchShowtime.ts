import { useEffect, useState } from "react";
import ApiClient from "../Services/Api-Client";

export interface showtimeShema{
    movieId:number,
    theaterId:number,
    name:string,
    address:string,
    city:string,
    movieDate:string,
    startTimes:string
}


const useFetchShowtime = (movieId:String) => {

    const [showtimeData, setshowtimeData] = useState<showtimeShema[]>([]);
    const [isTimeLoading, setisTimeLoading] = useState(false);
    const [isTimeError, setIsTimeErrorr] = useState("");

    useEffect(() => {
      setisTimeLoading(true);
        ApiClient.get("/showtime/"+movieId)
          .then((res) => {
            setshowtimeData(res.data);
            setisTimeLoading(false);
          })
          .catch((err) => {
            setIsTimeErrorr(err.message);
            setisTimeLoading(false);
          });
      }, []);
      return { showtimeData, isTimeLoading, isTimeError };

};
export default useFetchShowtime;
