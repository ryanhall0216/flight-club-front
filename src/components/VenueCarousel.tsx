import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SelectVenueDropdown from "./SelectVenueDropdown";

const galleryValues = [
  "/images/top-image.jpg",
  // "/images/top-image.jpg",
  // "/images/top-image.jpg",
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Show 1 slide at a time for full width
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  className: "center",
  centerMode: true,
  centerPadding: "0px",
};

export default function VenueCarousel() {
  return (
    <div className="w-full h-[600px] overflow-hidden shadow-md">
      <Slider {...sliderSettings} className="w-full">
        {galleryValues.map((item, index) => (
          <img
            src={item}
            key={index}
            className="w-full h-full object-cover object-center"
            alt={`Venue ${index + 1}`}
          />
        ))}
      </Slider>
      <SelectVenueDropdown />
    </div>
  );
}
