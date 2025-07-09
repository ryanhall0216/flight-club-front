import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import VenueCards from './components/VenueCards'


function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-regular">
      <Header />
      <main className="flex-1 w-full">
        <HeroSection />
        <section className="w-full max-w-3xl mx-auto px-4 py-10 text-center">
          <h2 className="text-brandGreen text-2xl md:text-3xl font-black mb-4 tracking-wide">LET THE GAMES BEGIN — WELCOME TO FLIGHT CLUB.</h2>
          <p className="text-gray-700 text-base md:text-lg font-regular mb-2">
            Lorem ipsum dolor <span className="text-black font-bold">Craft Cocktails</span> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <span className="text-brandGreen font-bold underline">Darts Tracking Technology</span>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in <span className="text-brandGreen font-bold underline">Global Cuisine</span> dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </p>
        </section>
        <VenueCards />
      </main>
    </div>
  )
}

export default App
