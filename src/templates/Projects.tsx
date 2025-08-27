import { useInView } from "react-intersection-observer"
import { observerOptions } from "../config"
import {useDialog} from "../components/Dialog/hooks/hooks"
import { ShowProjectDialog } from "../modules/Projects/ShowProjectDialog"

export function Projects(){
   const {ref, inView} = useInView(observerOptions)
   const observerClass = inView ? 'in':''
   
   return (
      <div className="section">
         <div className="section__header">
            <div className={`section__title fade ${observerClass}`} ref={ref}>Mes réalisations</div>
         </div>
         <div className="section__body">
            <ProjectItem/>
         </div>
      </div>
   )
}

export function ProjectItem(){
   const {isOpen, handleOpen, handleClose} = useDialog(false)

   return <>
      <button className="btn btn-primary" onClick={handleOpen}>Ouvrir</button>
      <ShowProjectDialog isOpen={isOpen} onClose={handleClose}/>
   </>
}