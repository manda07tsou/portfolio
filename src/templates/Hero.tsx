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
            <h6 className="text-primary">Bonjour, je suis</h6>
            <div className={`hero__title`}>
               <div className={`uppercase fade ${observerClass}`} ref={ref}>RAHAJANIRINA</div> 
               <div className={`fade ${observerClass}`} ref={ref}  style={{transitionDelay: ".1s"}}> Mandaniaina<span className="text"> Vonintsoa</span></div>
            </div>
            <div className={`hero__subtitle fade ${observerClass}`} style={{transitionDelay: ".2s"}}>Développeur Symfony / React</div>
            <a href="#contacts" className="btn btn-primary btn-test mt-3">Me contacter</a>
         {/* </Card> */}
      </div>
      <div className="code__highlight">
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