import { Contacts } from "./templates/Contacts"
import { Footer } from "./templates/Footer"
import { Header } from "./templates/Header"
import { Projects } from "./templates/Projects"
import { Skills } from "./templates/Skills"

export function Home(){
   return <>
      <Header/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
   </>
}