import { useEffect, useState } from "react";
import ApiClient from "../Services/Api-Client";

export type seatParams = {
  movieId: string;
  theaterId: string;
  movieDate: string;
};

const useFetchSeat = () => {
  const [seatData, setSeatData] = useState<seatParams[]>([]);
  const [isSeatLoading, SetSeatLoading] = useState();
  const [isSeatError, setSeatError] = useState("");
  useEffect(() => {
    ApiClient.get("").then().catch();
  }, []);
};

export default useFetchSeat;
