import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Container } from "@mui/material";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

function Slideshow() {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={50}
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Box
            style={{
              width: "100%",
              height: 450,
              objectFit: "cover",
              objectPosition: "top",
            }}
            component="img"
            src={
              "https://images.hdqwalls.com/wallpapers/shazam-movie-imax-poster-2a.jpg"
            }
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            style={{ width: "100%", height: 450, objectFit: "cover" }}
            component="img"
            src={
              "https://wallpapercrafter.com/sizes/3840x2160/252933-cinema-theater-theatre-and-seat-hd.jpg"
            }
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            style={{
              width: "100%",
              height: 450,
              objectFit: "cover",
            }}
            component="img"
            src={"https://wallpapercave.com/wp/wp3184123.jpg"}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            style={{
              width: "100%",
              height: 450,
              objectFit: "cover",
              objectPosition: "top",
            }}
            component="img"
            src={"https://wallpaperaccess.com/full/1597763.jpg"}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            style={{ width: "100%", height: 450, objectFit: "cover" }}
            component="img"
            src={
              "https://images.hdqwalls.com/wallpapers/john-wick-chapter-4-dolby-cinema-3q.jpg"
            }
          ></Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slideshow;
