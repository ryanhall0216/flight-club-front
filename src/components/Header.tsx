import { useState } from "react";

const navLinks = [
  { label: "BRUNCH", href: "#" },
  { label: "EVENTS & PARTIES", href: "#" },
  { label: "MENUS", href: "#" },
  { label: "HAPPENINGS", href: "#" },
];

export default function Header() {
  const [locations, setLocations] = useState(false);
  
  return (
    <header className="bg-nav_black px-2 sm:px-4 md:px-12 py-3 flex items-center justify-between max-w-full sticky top-0 z-50 shadow font-normal">
      <div className="flex w-full items-center justify-between lg:hidden">
        <button className="text-white text-3xl px-2" aria-label="Open menu">
          &#9776;
        </button>
        <a className="block flex-1 text-center" href="#">
          <img src="/images/logo-white.png" className="inline-block h-8 sm:h-10 md:h-12 max-w-[180px]" alt="Logo" />
        </a>
        <div className="flex gap-2">
          <button
            className="text-center flex flex-col gap-0 items-center px-2 py-1 bg-white font-semibold text-black uppercase text-xs sm:text-sm hover:bg-red hover:text-white"
            type="button"
          >
            <span>Book</span>
          </button>
          <button
            className="text-center flex flex-col gap-0 items-center px-2 py-1 bg-green font-semibold text-white uppercase text-xs sm:text-sm hover:bg-red hover:text-white"
            type="button"
          >
            <span>Event</span>
          </button>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-4 py-3 text-white w-full">
        <a className="block flex-shrink-0 mr-8" href="#">
          <img
            src="/images/logo-white.png"
            className="inline-block h-10 md:h-12 max-w-[180px]"
            alt="Logo"
          />
        </a>
        <div className="mx-2 px-4 flex items-center">
          <a
            href="#"
            className="flex items-center font-serif capitalize text-[1.125rem] text-white hover:text-red"
            onClick={e => e.preventDefault()}
            onMouseEnter={() => setLocations(true)}
            onMouseLeave={() => setLocations(false)}
          >
            <span className="flex-shrink-0 italic">
              locations&nbsp;
            </span>
            <span
              className="flex align-end relative w-4 h-4"
              onMouseEnter={() => setLocations(true)}
              onMouseLeave={() => setLocations(false)}
            >
              <span
                className={
                  `block absolute right-1/2 top-1/2 w-2 h-[2px] bg-white rounded-full origin-right
                  ${locations ? "-rotate-45 -translate-y-1" : "rotate-45"}`
                }
              />
              <span
                className={
                  `block absolute left-1/2 top-1/2 w-2 h-[2px] bg-white rounded-full origin-left
                  ${locations ? "rotate-45 -translate-y-1" : "-rotate-45"}`
                }
              />
            </span>
          </a>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white hover:text-red capitalize text-[1.125rem]"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-[16px] px-[16px]">
            <div className="uppercase text-[0.875rem] hover:text-red lg:leading-3">
              <button
                className="text-center flex flex-col gap-1 items-center pt-2 px-4 pb-1 bg-white font-semibold text-black uppercase hover:bg-red hover:text-white"
                type="button"
              >
                <span>Book now</span>
                <span className="text-[0.75rem]">2-12 Guests</span>
              </button>
            </div>
            <div className="uppercase text-[0.875rem] hover:text-red lg:leading-3">
              <button
                className="text-center flex flex-col gap-1 items-center px-4 pt-2 pb-1 bg-green font-semibold text-white uppercase hover:bg-red hover:text-white"
                type="button"
              >
                <span>Plan an event</span>
                <span className="text-[0.75rem]">13+ Guests</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

}
