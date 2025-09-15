import React from 'react'
import { navLinks } from '../../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger: 'nav',
                start: "bottom top"
            }
        })

        navTween.fromTo('nav', {backgroundColor: 'transparent'},{
            backgroundColor: "#00000050",
            backgroundFilter: "blur(10px)",
            duration:1,
            ease: 'power1.inOut'
        })
    })

  return (
    <nav className='m-0 py-5 px-20'>
        <div className='p-0'>
            <a href="#home" className='flex items-center gap-2'>
                <img src="./images/logo.png" alt="Imagem de uma taça de vinho" />
                <p>Velvet Pour</p>
            </a>

            <ul>
                {navLinks.map(item => (
                    <li key={item.id}>
                        <a href={item.id}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar