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
    <div className="mt-[-60px] sm:mt-[-90px] w-full">
      <div className="relative flex flex-col items-center w-full">
        <button
          className="relative flex justify-center gap-2 w-full max-w-xs sm:max-w-md md:max-w-lg px-4 sm:px-12 py-3 bg-transparent text-white text-base sm:text-lg md:text-xl font-normal tracking-widest uppercase border-b border-white focus:outline-none select-none"
          style={{ letterSpacing: "0.2em" }}
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          SELECT YOUR VENUE
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl sm:text-2xl">&#709;</span>
        </button>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-2">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-xs sm:max-w-md md:max-w-lg relative animate-fade-in">
              <button
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-xl sm:text-2xl font-bold text-black hover:text-brandGreen focus:outline-none"
                onClick={() => setOpen(false)}
                aria-label="Close venue menu"
              >
                &times;
              </button>
              <div className="text-center mb-4 sm:mb-6">
                <span className="block text-black text-lg sm:text-2xl font-normal tracking-widest uppercase">
                  SELECT A LOCATION
                </span>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                {loading ? (
                  <span className="text-center text-gray-500">Loading...</span>
                ) : (
                  venues.map((venue) => (
                    <button
                      key={venue.uri}
                      className="w-full py-2 sm:py-3 border border-brown rounded text-base sm:text-lg font-bold uppercase tracking-widest hover:bg-brown hover:text-white transition-colors text-brown focus:outline-none"
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
