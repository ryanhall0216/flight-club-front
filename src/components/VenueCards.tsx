import React from "react";

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
    <section className="w-full max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 font-regular">
      {venues.map((venue) => (
        <div key={venue.city} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
          <picture>
            <source srcSet={venue.webp} type="image/webp" />
            <img
              src={venue.image}
              alt={venue.city}
              className="w-full h-56 object-cover object-center"
            />
          </picture>
          <div className="p-4 flex-1 flex flex-col justify-end">
            <span className="block text-gray-700 text-base font-bold italic mt-2 font-bold">{venue.city}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
