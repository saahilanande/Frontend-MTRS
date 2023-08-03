import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Stack, Typography } from "@mui/material";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

function Slideshow() {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={50}
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 8000,
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
              opacity: 0.8,
            }}
            component="img"
            src={
              "https://images.hdqwalls.com/wallpapers/shazam-movie-imax-poster-2a.jpg"
            }
          ></Box>
          <Stack
            sx={{
              position: "absolute",
              bottom: "8px",
              left: "15px",
            }}
            padding={2}
          >
            <Typography variant="h2" fontWeight={600}>
              Cinema Reimagined
            </Typography>
            <Typography>
              Prepare to be transported into new worlds with IMAX, the immersive
              movie-going experience. Every element in a premium IMAX theatre is
              specially designed to create an intense experience, ensuring movie
              magic each time the lights go down
            </Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            style={{
              width: "100%",
              height: 450,
              objectFit: "cover",
              opacity: 0.8,
            }}
            component="img"
            src={
              "https://wallpapercrafter.com/sizes/3840x2160/252933-cinema-theater-theatre-and-seat-hd.jpg"
            }
          ></Box>
          <Stack
            sx={{
              position: "absolute",
              bottom: "8px",
              left: "15px",
            }}
            padding={2}
          >
            <Typography variant="h2" fontWeight={600}>
              Just kick back and enjoy the show!
            </Typography>
            <Typography>
              The power to relax is in your hands in our Signature Recliners.
              Seat warmers make it cozy, MTRS makes comfort easy! Take your
              movie experience to the max when you tilt back & sink in to the
              comfort now reclining near you!
            </Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            style={{
              width: "100%",
              height: 450,
              objectFit: "cover",
              opacity: 0.8,
            }}
            component="img"
            src={"https://wallpapercave.com/wp/wp3184123.jpg"}
          ></Box>
          <Stack
            sx={{
              position: "absolute",
              bottom: "8px",
              left: "15px",
            }}
            padding={2}
          >
            <Typography variant="h2" fontWeight={600}>
              Crunch, Munch, and Sip
            </Typography>
            <Typography>
              Explore the possibilities with 100+ drink choices with Coca-Cola
              Freestyle®. Try your favorite with a twist. Whether you're craving
              Fanta® Orange, Coke Zero Sugar® Cherry or AHA Blueberry
              Pomegranate, the choice is yours. Choose your drink and enjoy only
              with Freestyle
            </Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            style={{
              width: "100%",
              height: 450,
              objectFit: "cover",
              objectPosition: "top",
              opacity: 0.8,
            }}
            component="img"
            src={"https://wallpaperaccess.com/full/1597763.jpg"}
          ></Box>
          <Stack
            sx={{
              position: "absolute",
              bottom: "8px",
              left: "15px",
            }}
            padding={2}
          >
            <Typography variant="h2" fontWeight={600}>
              Get It Poppin’
            </Typography>
            <Typography>
              Go far beyond classic concessions like popcorn and fountain drinks
              to give you an absolutely appetizing experience. We're always
              innovating and exploring new ways to bring the best food and
              drinks to our theatres. Select from the options below to learn
              more about the menu selections, locations and special offers
            </Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            style={{
              width: "100%",
              height: 450,
              objectFit: "cover",
              opacity: 0.8,
            }}
            component="img"
            src={
              "https://images.hdqwalls.com/wallpapers/john-wick-chapter-4-dolby-cinema-3q.jpg"
            }
          ></Box>
          <Stack
            sx={{
              position: "absolute",
              bottom: "8px",
              left: "15px",
            }}
            padding={2}
          >
            <Typography variant="h2" fontWeight={600}>
              Don't just watch a movie, feel it
            </Typography>
            <Typography>
              Dolby Cinema unlocks the emotional impact of every film, allowing
              you to see the subtle details and ultravivid colors of Dolby
              Vision© and hear the immersive sound of Dolby Atmos© while seated
              in cutting-edge, reservable, spacious recliners. This unmatched
              combination is so lifelike - you'll forget you're at the movies
            </Typography>
          </Stack>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slideshow;
