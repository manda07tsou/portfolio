import { useEffect, useState } from "react";
import { Burger } from "../components/burger/burger";
import { Hero } from "./Hero";

export function Header(){
   const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
   const [menuActive, setMenuActive] = useState<string>(window.location.hash.substring(1))

   const handleClickMenu = (menuKey:string) => {
      setMenuActive(menuKey)
      setIsNavOpen(false)
   }
   
   useEffect(() => {
      if(isNavOpen){
         document.body.classList.add('nav__open')
      }else{
         document.body.classList.remove('nav__open')
      }
   },[isNavOpen])

   return (
      <div className="header__container">
         <header className={`header`}>
            <div className="logo">Rhj</div>
            <div className="sidebar">
               <div className="mobil__sidebar">
                  <div className="logo">Rhj</div>
                  <Burger isOpen={isNavOpen} onOpen={() => {setIsNavOpen(!isNavOpen)}}/>
               </div>
               <nav className="header__nav">
                  <MenuItem itemKey="home" menuActive={menuActive} onClick={handleClickMenu}>Home</MenuItem>
                  <MenuItem itemKey="skills" menuActive={menuActive} onClick={handleClickMenu}>Compétences</MenuItem>
                  <MenuItem itemKey="projects" menuActive={menuActive} onClick={handleClickMenu}>Projets</MenuItem>
                  <MenuItem itemKey="contacts" menuActive={menuActive} onClick={handleClickMenu}>Me contacter</MenuItem>
               </nav>
            </div>
            <Burger isOpen={isNavOpen} onOpen={() => {setIsNavOpen(!isNavOpen)}}/>
         </header>
         <Hero/>
      </div>
   )
}


interface MenuItemProps {
   itemKey: string,
   menuActive: string,
   onClick: (itemKey: string) => void,
   children: React.ReactNode
}
function MenuItem({itemKey, menuActive, onClick, children}: MenuItemProps){
   const activeClass = itemKey.toLowerCase() == menuActive.toLowerCase() ? "active":""

   return <div onClick={() => onClick(itemKey)}>
         <a href={`#${itemKey}`}
            className={`nav__item ${activeClass}`}
            >{children}</a>
   </div>
}
