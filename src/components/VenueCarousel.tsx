import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const galleryValues = [
  "/images/top-image.jpg",
  "/images/boston_flight-club-boston_sm.jpg",
  "/images/chicago_img_7443_sm.jpg",
  "/images/atlanta_star-metals-8_sm.jpg",
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  className: "center",
  centerMode: true,
  centerPadding: "0px",
};

export default function VenueCarousel() {
  const sliderRef = useRef<any>(null);

  return (
    <div className="w-full h-[300px] md:h-[500px] lg:h-[650px] overflow-hidden shadow-md relative">
      <Slider ref={sliderRef} {...sliderSettings} className="w-full">
        {galleryValues.map((item, index) => (
          <img
            src={item}
            key={index}
            className="w-full h-[300px] md:h-[500px] lg:h-[650px] object-cover object-center"
            alt={`Venue ${index + 1}`}
          />
        ))}
      </Slider>
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="hidden sm:flex text-white absolute top-1/2 left-2 md:left-8 -translate-y-1/2 text-3xl md:text-5xl z-10 p-2 hover:bg-opacity-70 transition"
        aria-label="Previous"
      >
        <span>&lt;</span>
      </button>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="hidden sm:flex text-white absolute top-1/2 right-2 md:right-8 -translate-y-1/2 text-3xl md:text-5xl z-10 p-2 hover:bg-opacity-70 transition"
        aria-label="Next"
      >
        <span>&gt;</span>
      </button>
    </div>
  );
}
