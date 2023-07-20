import useFetchMovie from "../../Hooks/useFetchMovie";
import MovieCard from "./MovieCard";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, EffectCoverflow } from "swiper/modules";
import SkeletonCard from "./SkeletonCard";

function MovieCarousel() {
  const { movieData, isLoading, isError } = useFetchMovie(0, 20);
  let skeletonArray = Array.from({ length: 20 });

  return (
    <Box>
      {isError ? (
        <Typography variant="h2" color={"error"}>
          Error:{isError}
        </Typography>
      ) : (
        <Swiper
          initialSlide={5}
          spaceBetween={50}
          loop={true}
          slidesPerView={5}
          navigation={true}
          modules={[Navigation, EffectCoverflow]}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 20,
            modifier: 4,
            slideShadows: false,
          }}
        >
          <span slot="container-start">
            <Box
              borderBottom={1}
              marginBottom={2}
              marginLeft={20}
              marginRight={15}
            >
              <Stack direction={"row"}>
                <Typography
                  variant="h2"
                  fontSize={"40px"}
                  fontWeight={800}
                  marginBottom={2}
                  marginTop={8}
                >
                  Movies at MTRS
                </Typography>
                <Button
                  sx={{ marginLeft: "auto", marginTop: 8 }}
                  color="secondary"
                >
                  Now Playing
                </Button>
                <Button sx={{ marginTop: 8 }}>Coming Soon</Button>
              </Stack>
            </Box>
          </span>
          {isLoading
            ? skeletonArray.map(() => (
                <SwiperSlide>{<SkeletonCard />}</SwiperSlide>
              ))
            : movieData.map((data) => (
                <SwiperSlide id={data.movie_id}>
                  {<MovieCard data={data}></MovieCard>}
                </SwiperSlide>
              ))}
          <SwiperSlide>
            <Stack spacing={3}>
              <Typography variant="h3">
                Not finding what you're looking for?
              </Typography>
              <Button variant="outlined">See All Movies</Button>
              <Button variant="outlined">Coming soon</Button>
            </Stack>
          </SwiperSlide>
        </Swiper>
      )}
    </Box>
  );
}

export default MovieCarousel;
