import { Carousel } from "flowbite-react";
import React from "react";

function CarouselComponent({ images }) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-8" >
      <Carousel>
        {images.map((image, idx) => (
          <img src={image} key={idx} alt="carousel-image" />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
