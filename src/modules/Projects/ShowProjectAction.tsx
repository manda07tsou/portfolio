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
                  <div>
                     <h1 className={`fade ${observerClass}`} ref={titleRef}>{project.title}</h1>
                     <div className="project__technos">
                        {project.technos.map(techno => (
                           <span className="badge badge-primary">{techno}</span>
                        ))}
                     </div>
                  </div>
                  <div className="flex mt-5">
                     {project?.links && <>
                        {project?.links?.code && <a href={project.links.code} target="blank" className="btn btn-primary mr-2">Code</a>}
                        {project?.links?.show && <a href="" target="blank" className="btn btn-primary mr-2">Voir le site</a>}
                     </>}
                     {/* <button className="btn btn-primary">Photos</button> */}
                  </div>
               </div>
               <div className="project__detail-body">
                  <div className="project__description">
                     {project?.roles &&
                        <div className="mb-5">
                           <h4>Rôle et responsabilités</h4>
                           <p>
                              {project?.roles}
                           </p>
                        </div>
                     }
                     <div>
                        <h3>Technologies utilisées</h3>
                     </div>
                     <h3>Fonctionnalités</h3>
                     <h3>Défis et solutions</h3>
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