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
               <a href="#" className="nav__item"><img src="/src/assets/icons/home.svg" alt=""/>Home</a>
               <a href="#" className="nav__item"><img src="/src/assets/icons/skills.svg" alt=""/>Compétences</a>
               <a href="#" className="nav__item"><img src="/src/assets/icons/project.svg" alt=""/>Projets</a>
               <a href="#" className="nav__item"><img src="/src/assets/icons/contact.svg" alt=""/>Me retrouver</a>
            </nav>
            <Burger isOpen={isNavOpen} onOpen={() => {setIsNavOpen(!isNavOpen)}}/>
         </header>
         <Hero/>
      </div>
   )
}
