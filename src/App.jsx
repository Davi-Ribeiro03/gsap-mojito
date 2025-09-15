import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import Cocktails from './components/Cocktails'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main >
        <Navbar/>
        <HeroSection/>
        <Cocktails/>
    </main>
  )
}

export default App;
