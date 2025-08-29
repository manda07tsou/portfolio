import { useInView } from "react-intersection-observer"
import {Dialog} from "./../../components/Dialog/Dialog"
import {useDialog} from "./../../components/Dialog/hooks/hooks"
import { observerOptions } from "../../config"

export function ShowProjectAction({project}){
   const {isOpen, handleOpen, handleClose} = useDialog(false)
   const {ref:titleRef, inView: titleInView} = useInView(observerOptions)
   const observerClass = titleInView ? 'in':''

   return (
      <>
         <button className="btn btn-outlined-primary mt-3" onClick={handleOpen}>Details</button>
         <Dialog 
            isOpen={isOpen} 
            onClose={handleClose}
            closedBtn={true}
            className="dialog-full project-dialog"
         >
            <div className="project__detail">
               <div className="project__detail-header">
                  <h1 className={`section__title fade ${observerClass}`} ref={titleRef}>{project.title}</h1>
                  <div className="project__technos">
                     {project.technos.map(techno => (
                        <span className="badge badge-primary">{techno}</span>
                     ))}
                  </div>
                  <div className="project__images">
                     {project.images.map(img => (
                        <img src={`/src/assets/images/projects/${img}`} alt="project__image"/>
                     ))}
                  </div>
               </div>
            </div>
         </Dialog>
      </>
   )
}