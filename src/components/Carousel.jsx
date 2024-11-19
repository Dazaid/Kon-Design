import React, { useState } from "react";
import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Carousel = ({ images, labelup = "", labeldown = "" }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Configuración de react-slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Alternar modo de pantalla completa
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <Box>
        <Box className={`${isFullscreen ? "fixed inset-0 bg-black z-50" : "relative"} flex items-center justify-center`}>
          <Box className="w-full max-w-4xl">
            {isFullscreen && (
              <IconButton
                className="absolute top-4 right-4 text-white bg-gray-700 hover:bg-gray-600"
                onClick={toggleFullscreen}
              >
                <CloseIcon />
              </IconButton>
            )}

            <Box className={`${isFullscreen ? "fixed inset-0 bg-black z-50" : "relative"} flex items-center justify-center`}>
              <Box className="w-full max-w-[400px] aspect-square">
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <Box key={index} className="flex justify-center items-center">
                      <Box className="relative w-full max-w-[400px] aspect-square overflow-hidden">
                        <img
                          src={image}
                          alt={`Slide ${index + 1}`}
                          className={`rounded-lg object-cover w-full h-full`}
                          onClick={toggleFullscreen}
                        />
                      </Box>
                    </Box>
                  ))}

                </Slider>
              </Box>
            </Box>
          </Box>

          {!isFullscreen && (
            <IconButton
              className="absolute bottom-4 right-4 text-white bg-gray-700 hover:bg-gray-600"
              onClick={toggleFullscreen}
            >
            </IconButton>
          )}
        </Box>
        <Box className="text-center" >
          <p className="text-white text-2xl font-semibold">{labelup}</p>
          <p className="text-white text-2xl">{labeldown}</p>

        </Box>
      </Box>
    </>
  );
};

export default Carousel;
