import { useInView } from "react-intersection-observer"
import { observerOptions } from "../config"

export function Projects(){
   const {ref, inView} = useInView(observerOptions)

   const observerClass = inView ? 'in':''
   return (
      <div className="section">
         <div className="section__header">
            <div className={`section__title fade ${observerClass}`} ref={ref}>Mes réalisations</div>
         </div>
      </div>
   )
}