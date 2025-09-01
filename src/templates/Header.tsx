import { useState } from "react";
import { Burger } from "../components/burger/burger";
import { Hero } from "./Hero";

export function Header(){
   const [isNavOpen, setIsNavOpen] = useState(false)

   const headerClass = isNavOpen ? 'nav__open':""
   return (
      <div className="header__container">
         <header className={`header ${headerClass}`}>
            <div className="logo">RHj</div>
            <nav className="header__nav">
               <a href="#home" className="nav__item">Home</a>
               <a href="#skills" className="nav__item">Compétences</a>
               <a href="#projects" className="nav__item">Projets</a>
               <a href="#contacts" className="nav__item">Me retrouver</a>
            </nav>
            <Burger isOpen={isNavOpen} onOpen={() => {setIsNavOpen(!isNavOpen)}}/>
         </header>
         <Hero/>
      </div>
   )
}
