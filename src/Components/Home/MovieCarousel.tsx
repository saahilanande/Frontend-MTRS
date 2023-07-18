import React from "react";
import useFetchMovie from "../../Hooks/useFetchMovie";
import MovieCard from "./MovieCard";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

function MovieCarousel() {
  const { movieData, isLoading, isError } = useFetchMovie(0, 20);

  return (
    <Box>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Navigation, EffectCoverflow]}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 30,
          modifier: 4,
          slideShadows: false,
        }}
      >
        {movieData.map((data) => (
          <SwiperSlide>{<MovieCard data={data}></MovieCard>}</SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default MovieCarousel;
