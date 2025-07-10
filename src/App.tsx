import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import VenueCards from './components/VenueCards'
import VenueCarousel from './components/VenueCarousel'
import SelectVenueDropdown from './components/SelectVenueDropdown'


function App() {

  return (
    <div className="bg-white min-h-screen flex flex-col font-brandon_regular">
      <Header />
      <main className="flex-1 w-full">
        <VenueCarousel />
        <SelectVenueDropdown />
        <HeroSection />
        <VenueCards />
      </main>
    </div>
  )
}

export default App
