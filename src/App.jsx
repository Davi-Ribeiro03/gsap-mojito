import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main >
        <Navbar/>
        <HeroSection/>
    </main>
  )
}

export default App;
