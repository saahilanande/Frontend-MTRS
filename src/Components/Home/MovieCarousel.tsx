import React from "react";
import { MovieDataSchema } from "../../Hooks/useFetchMovie";
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

interface props {
  items: MovieDataSchema[];
}

function MovieCarousel({ items }: props) {
  return (
    <Box>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        centeredSlides={true}
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
        {items.map((data) => (
          <SwiperSlide>{<MovieCard data={data}></MovieCard>}</SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default MovieCarousel;
