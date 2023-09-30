import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const PictureCarousel = ({ images, landscape }) => {
  return (
    <Carousel
      className={`w-[100%] lg:w-[80%] ${
        landscape === "portrait" && "max-w-[500px]"
      } mx-auto my-10`}
    >
      {images &&
        images.length > 0 &&
        images.map((img, idx) => {
          return (
            <div key={idx}>
              <img src={img} alt="carousel image" />
            </div>
          );
        })}
    </Carousel>
  );
};

export default PictureCarousel;
