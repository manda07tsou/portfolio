import { useInView } from "react-intersection-observer"
import {Dialog} from "../../components/Dialog/Dialog"
import {useDialog} from "../../components/Dialog/hooks/hooks"
import { observerOptions } from "../../config"
import { useEffect, useState } from "react"
import Markdown from "react-markdown"
import rehypeRaw from 'rehype-raw';
import type {Project} from "./types";
import { Icon } from "../../components/icons/icon"

interface ShowProjectActionProps{
   project: Partial<Project>
}
export function ShowProjectAction({project}:ShowProjectActionProps){
   const {isOpen, handleOpen, handleClose} = useDialog()
   const {ref:titleRef, inView: titleInView} = useInView(observerOptions)
   const observerClass = titleInView ? 'in':''
   const [content, setContent] = useState('')

   useEffect(() => {
      fetch(`/projects/descriptions/${project.content}`) // chemin relatif depuis /public
         .then((res) => res.text())
         .then(res => setContent(res))
         .catch(error => console.error('une erreur s\'est produit lors de la récupération du description projet', error))
   }, [])

   return (
      <>
         <a href="#" className="project__card-action" onClick={handleOpen}>
            Détail
            <Icon name="icon-arrowRight"></Icon>
         </a>
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
                        {project?.technos?.map(techno => (
                           <span className="badge badge-warning">{techno}</span>
                        ))}
                     </div>
                  </div>
                  <div className="flex mt-5">
                     {project?.links && <>
                        {project?.links?.code && <a href={project.links.code} target="blank" className="btn btn-primary mr-2">Code</a>}
                        {project?.links?.show && <a href="" target="blank" className="btn btn-primary mr-2">Voir le site</a>}
                     </>}
                  </div>
               </div>
               <div className="project__detail-body">
                  <div className="project__description">
                     <Markdown rehypePlugins={[rehypeRaw]}>{content}</Markdown>
                  </div>
                  <div className="project__images-grid">
                     {project?.images?.map(img => (
                        <a href={`/images/projects/${img}`} target="_blank">
                           <img src={`/images/projects/${img}`} alt="project__image"/>
                        </a>
                     ))}
                  </div>
               </div>
            </div>
         </Dialog>
      </>
   )
}