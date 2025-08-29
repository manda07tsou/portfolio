import { useInView } from "react-intersection-observer"
import { observerOptions } from "../config"
import {useDialog} from "../components/Dialog/hooks/hooks"
import { ShowProjectDialog } from "../modules/Projects/ShowProjectDialog"
import projectsData from "../projectsData.json";
import { Icon } from "../components/icons/icon";
import { useRef } from "react";

export function Projects(){
   const {ref, inView} = useInView(observerOptions)
   const observerClass = inView ? 'in':''
   
   return (
      <div className="section">
         <div className="section__header">
            <div className={`section__title fade ${observerClass}`} ref={ref}>Mes réalisations</div>
         </div>
         <div className="section__body project__grid">
            {projectsData.map(project => (
               <ProjectItem data={project}/>
            ))}
         </div>
      </div>
   )
}

export function ProjectItem({data}){
   const {isOpen, handleOpen, handleClose} = useDialog(false)

   
   return <>
      <div className="project">
         <div className="project__image">
            <img src={`/src/assets/images/projects/${data.coverImage}`} alt="image__project" />
         </div>
         <div className="project__body">
            <div className="project__title">{data.title}</div>
            {/* <Icon name={"github"}/> */}
            <div className="project__technos">
               {data.technos.map(techno => (
                  <span className="badge badge-primary">{techno}</span>
               ))}
            </div>
            <div className="project__description">{data.description}</div>
            <button className="btn btn-outlined-primary mt-3" onClick={handleOpen}>Details</button>
         </div>
      </div>
      <ShowProjectDialog isOpen={isOpen} onClose={handleClose}/>
   </>
}