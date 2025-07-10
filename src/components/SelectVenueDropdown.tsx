import { useEffect, useState } from "react";

export default function SelectVenueDropdown() {
  const [venues, setVenues] = useState<{ title: string; uri: string }[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.flightclubdartsusa.com/api/collections/venues/entries")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          const sortedVenues = data.data
            .map((v: any) => ({ title: v.title, uri: v.uri }))
            .sort((a: { title: string }, b: { title: string }) => a.title.localeCompare(b.title));
          setVenues(sortedVenues);
        }
        setLoading(false);
      });
  }, []);

  const handleSelect = (uri: string) => {
    setOpen(false);
    if (uri) {
      window.location.href = `https://www.flightclubdartsusa.com/${uri}`;
    }
  };

  return (
    <div className="mt-[-90px]">
      <div className="relative flex flex-col items-center w-full">
        {/* Trigger */}
        <button
          className="relative flex items-center gap-2 px-12 py-3 bg-transparent text-white text-lg md:text-xl font-normal tracking-widest uppercase border-b border-white focus:outline-none select-none"
          style={{ letterSpacing: "0.2em" }}
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          SELECT YOUR VENUE
          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl">&#709;</span>
        </button>
        {/* Modal Dropdown */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white rounded-lg shadow-lg p-8 w-80 max-w-full relative animate-fade-in">
              <button
                className="absolute top-4 right-4 text-2xl font-bold text-black hover:text-brandGreen focus:outline-none"
                onClick={() => setOpen(false)}
                aria-label="Close venue menu"
              >
                &times;
              </button>
              <div className="text-center mb-6">
                <span className="block text-black text-2xl font-normal tracking-widest uppercase">
                  SELECT A LOCATION
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {loading ? (
                  <span className="text-center text-gray-500">Loading...</span>
                ) : (
                  venues.map((venue) => (
                    <button
                      key={venue.uri}
                      className="w-full py-3 border border-brown rounded text-lg font-bold uppercase tracking-widest hover:bg-brown hover:text-white transition-colors text-brown focus:outline-none"
                      onClick={() => handleSelect(venue.uri)}
                    >
                      {venue.title}
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
