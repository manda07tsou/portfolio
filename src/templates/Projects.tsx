import { useInView } from "react-intersection-observer"
import { observerOptions } from "../config"
import projectsData from "../projectsData.json";
import { ShowProjectAction } from "../modules/Projects/ShowProjectAction";

export function Projects(){
   const {ref, inView} = useInView(observerOptions)
   const observerClass = inView ? 'in':''


   return (
      <div className="section">
         <div className="section__header">
            <div className={`section__title fade ${observerClass}`} ref={ref}>Mes réalisations</div>
         </div>
         <div className="section__body project__grid">
            {projectsData.map((project, index) => (
               <ProjectItem data={project} index={index}/>
            ))}
         </div>
      </div>
   )
}

export function ProjectItem({data, index}){
   const {ref, inView} = useInView(observerOptions)
   const observerClass = inView ? 'in':''

   return <>
      <div className={`project fade ${observerClass}`} ref={ref} style={{transitionDelay: `.${index - 1}s`}}>
         <div className="project__image">
            <img src={`/src/assets/images/projects/${data.coverImage}`} alt="image__project" />
         </div>
         <div className="project__body">
            <div className="project__title">{data.title}</div>
            <div className="project__technos">
               {data.technos.map(techno => (
                  <span className="badge badge-primary">{techno}</span>
               ))}
            </div>
            <div className="project__description">{data.description}</div>
            <ShowProjectAction project={data}/>
         </div>
      </div>
   </>
}
