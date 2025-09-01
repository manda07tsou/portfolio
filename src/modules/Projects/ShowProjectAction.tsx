import { useInView } from "react-intersection-observer"
import {Dialog} from "./../../components/Dialog/Dialog"
import {useDialog} from "./../../components/Dialog/hooks/hooks"
import { observerOptions } from "../../config"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
                     <button className="btn btn-primary mr-2">Code</button>
                     <button className="btn btn-primary mr-2">Voir le site</button>
                     {/* <button className="btn btn-primary">Photos</button> */}
                  </div>
               </div>
               <div className="project__detail-body">
                  <div className="project__description">
                     <h3>Rôle et responsabilités</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam eum a, tempore accusantium labore sit porro dolorem vero odit officiis accusamus, asperiores consectetur pariatur esse nostrum consequuntur quas quis.</p>
                     <ul>
                        <li>role 1</li>
                        <li>role 2</li>
                        <li>role 3</li>
                     </ul>

                     <h3>Technologies utilisées</h3>
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