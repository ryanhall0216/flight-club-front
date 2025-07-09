import React, { useEffect, useState } from "react";

export default function SelectVenueDropdown({ onSelect }: { onSelect: (uri: string) => void }) {
  const [venues, setVenues] = useState<{ title: string; uri: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.flightclubdartsusa.com/api/collections/venues/entries")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.entries) {
          setVenues(data.entries.map((v: any) => ({ title: v.title, uri: v.uri })));
        }
        setLoading(false);
      });
  }, []);

  return (
    <select
      className="appearance-none bg-white text-black text-base font-regular pr-6 pl-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brandGreen min-w-[160px]"
      aria-label="Select location"
      defaultValue="Location"
      onChange={(e) => {
        if (e.target.value !== "Location") onSelect(e.target.value);
      }}
      disabled={loading}
    >
      <option disabled value="Location">
        Select a location
      </option>
      {venues.map((venue) => (
        <option key={venue.uri} value={venue.uri} className="font-regular">
          {venue.title}
        </option>
      ))}
    </select>
  );
}
