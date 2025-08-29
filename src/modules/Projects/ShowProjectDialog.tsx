import {Dialog} from "./../../components/Dialog/Dialog"

export function ShowProjectDialog({isOpen, onClose, project}){
 
   return (
      <Dialog 
         isOpen={isOpen} 
         onClose={onClose}
         closedBtn={true}
         className="dialog-full project-dialog"
      >
         <div className="project__detail">
            <div className="project__detail-header">
               <h1 className="section__title">{project.title}</h1>
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
   )
}