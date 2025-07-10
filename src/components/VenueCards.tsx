const venues = [
  {
    image: "/images/chicago_img_7443_sm.jpg",
    webp: "/images/chicago_img_7443.webp",
    city: "Chicago, IL",
  },
  {
    image: "/images/atlanta_star-metals-8_sm.jpg",
    webp: "/images/atlanta_star-metals-8.webp",
    city: "Atlanta, GA",
  },
  {
    image: "/images/boston_flight-club-boston_sm.jpg",
    webp: "/images/boston_flight-club-boston.webp",
    city: "Boston, MA",
  },
];

export default function VenueCards() {
  return (
    <section className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-4 grid grid-cols-1 md:grid-cols-4 gap-2 font-normal">
      {venues.map((venue, idx) => (
        <div
          key={venue.city}
          className={`relative flex flex-col ${
            idx === 1 ? "md:col-span-2" : "md:col-span-1"
          }`}
        >
          <picture>
            <source srcSet={venue.webp} type="image/webp" />
            <img
              src={venue.image}
              alt={venue.city}
              className="w-full h-48 sm:h-56 object-cover object-center"
            />
          </picture>
          <div
            className="absolute left-0 right-0 bottom-0 px-2 py-1 flex items-center bg-black bg-opacity-80"
          >
            <span className="text-white italic w-full text-left font-brandon_black text-xs sm:text-base">
              {venue.city}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
