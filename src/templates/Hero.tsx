import { useInView } from "react-intersection-observer"
import { observerOptions } from "../config"

export function Hero(){
   const {ref, inView}= useInView(observerOptions)
   const observerClass = inView ? "in":""

   return <section className="section hero" id="hero">
      <div className="hero__body">
         <h6 className="text-warning">Bonjour, je suis</h6>
         <div className={`hero__title`}>
            <div className={`uppercase fade ${observerClass}`} ref={ref}>RAHAJANIRINA</div> 
            <div className={`uppercase fade ${observerClass}`} ref={ref}  style={{transitionDelay: ".1s"}}> Mandaniaina<span className="text-primary"> Vonintsoa</span></div>
         </div>
         <div className={`hero__subtitle fade ${observerClass}`} style={{transitionDelay: ".2s"}}>Développeur <u>Symfony</u> / <u>React</u></div>
         {/* <p className="mt-3">Développeur Symfony & React, passionné par la création d’applications<br></br> web modernes et performantes</p> */}
      </div>
   </section>
}