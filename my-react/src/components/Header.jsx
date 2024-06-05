import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
function Header() {
   const [toggelemenu,settoggelemenu]= useState(false);
   
  
    return (
      <>
       <header className="he">
        <a className="font-bold text-white" href="" > SIVA </a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
           <li><a href="/">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#projects">project</a></li>
           <li><a href="#resume">Resume</a></li>
           <li><a href="#contacts">contact</a></li>

        </ul>
        </nav>
        {toggelemenu &&<nav className="block md:hidden py-5 ">
        <ul onClick={() => settoggelemenu(!toggelemenu)}  className="flex flex-col  mobile-nav">
           <li><a href="/">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#projects">project</a></li>
           <li><a href="#resume">Resume</a></li>
           <li><a href="#contacts">contact</a></li>

        </ul>
        </nav>}
        <button onClick={() => settoggelemenu(!toggelemenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
       </header>
      </>
    )
  }
  
  export default Header
  