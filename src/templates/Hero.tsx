import { useInView } from "react-intersection-observer"
import { observerOptions } from "../config"
import { Card } from "../components/Card/Card"
import { useEffect, useRef } from "react"
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { Icon } from "../components/icons/icon";

export function Hero(){
   const {ref, inView}= useInView(observerOptions)
   const codeRef = useRef<HTMLElement>(null);
   const observerClass = inView ? "in":""

  useEffect(() => {
    // Accédez à l'objet global hljs depuis la CDN
    if (hljs) {
      if (codeRef.current) {
         hljs.highlightElement(codeRef.current);
      }
    }
  }, []);
   return <section className="section hero" id="hero">
      <div className="hero__body">
         {/* <Card> */}
            <h6 className={`text-primary fade-bottom ${observerClass}`}>Bonjour, je suis</h6>
            <div className={`hero__title`}>
               <div className={`uppercase fade-bottom ${observerClass}`} ref={ref} style={{transitionDelay: ".1s"}}>RAHAJANIRINA</div> 
               <div className={`fade-bottom ${observerClass}`} ref={ref}  style={{transitionDelay: ".2s"}}> Mandaniaina<span className="text"> Vonintsoa</span></div>
            </div>
            <div className={`hero__subtitle fade-bottom ${observerClass}`} style={{transitionDelay: ".3s"}}>Développeur Symfony / React</div>
            <a href="#contacts" className={`btn btn-primary btn-test mt-3 fade-bottom ${observerClass}`} style={{transitionDelay: ".4s"}}>Me contacter</a>
         {/* </Card> */}
      </div>
      <div className={`code__highlight fade-right ${observerClass}`} style={{transitionDelay: ".4s"}}>
         <div className="hero__icon hero__icon-1">
            <Icon name="icon-symfony"></Icon>
         </div>
         <div className="hero__icon hero__icon-2">
            <Icon name="icon-react"></Icon>
         </div>
         <div className="hero__icon hero__icon-3">
            <Icon name="icon-javascript"></Icon>
         </div>
         <Card>
            <pre>
               <code ref={codeRef}>
            
            {`const about = {
      name: "Rahajanirina Mandaniaina Vonintsoa Fitiavana",
      job: "Web developer",
      skills: "React, Symfony"
   }
console.log(\`A propos de moi : + \${about}\`)
`}
               </code>
            </pre>
         </Card>

      </div>
   </section>
}