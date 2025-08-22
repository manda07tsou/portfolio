import { useInView } from "react-intersection-observer"
import { observerOptions } from "../config"

export function Hero(){
   const {ref, inView}= useInView(observerOptions)
   const observerClass = inView ? "in":""

   return <section className="section hero" id="hero">
      <div className="hero__body">
         <div className={`hero__title`}>
            <p className={`uppercase fade ${observerClass}`} ref={ref}>RAHAJANIRINA</p> 
            <p className={`uppercase fade ${observerClass}`} ref={ref}  style={{transitionDelay: ".1s"}}> Mandaniaina<span className="text-warning"> Vonintsoa</span> Fitiavana</p>
         </div>
         <div className={`hero__subtitle fade ${observerClass}`} style={{transitionDelay: ".2s"}}>Développeur web fullstack</div>
      </div>
   </section>
}