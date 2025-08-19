import { Header } from "./templates/Header"
import { Hero } from "./templates/Hero"
import { Skills } from "./templates/Skills"

export function Home(){
   return <>
      <Header/>
      <Hero/>
      <Skills/>
   </>
}