import { useInView } from "react-intersection-observer"
import { observerOptions } from "../config"
import projectsData from "./../modules/Projects/projectsData.json";
import { ShowProjectAction } from "../modules/Projects/ShowProjectAction";
import type { Project } from "../modules/Projects/types";

export function Projects(){
   const {ref, inView} = useInView(observerOptions)
   const observerClass = inView ? 'in':''

   return (
      <div className="section" id="projects">
         <div className="section__header">
            <div className={`section__subtitle fade-bottom ${observerClass}`} ref={ref}>Projets marquants</div>
            <div className={`section__title fade-bottom ${observerClass}`} ref={ref} style={{transitionDelay: '.15s'}}>Mes réalisations</div>
         </div>
         <div className="section__body project__grid">
            {projectsData.map((project, index:number) => (
               <ProjectItem data={project} index={index}/>
            ))}
         </div>
      </div>
   )
}

interface projectItemProps{
   data: Partial<Project>,
   index: number
}
export function ProjectItem({data, index}:projectItemProps){
   const {ref, inView} = useInView(observerOptions)
   const observerClass = inView ? 'in':''
   const delay = ['0s', '.15s','.3s'];
   const transitionDelay = delay[index % 3]

   return <>
      <div key={`project-${data.id}`} className={`project__card fade-bottom ${observerClass}`} ref={ref} style={{transitionDelay: `${transitionDelay}`}}>
         <div className="project__images">
            <img src={`/images/projects/${data.coverImage}`} alt="image__project" />
         </div>
         <div className="project__card-body">
            <h5>{data.title}</h5>
            <div className=" hide-mobil text-small text-800 mb-1">Développeur fullstack</div>
            <div className="project__card-techno pt-1">
               {data?.technos?.map((techno:string) => (
                  <span key={`${techno}-${data.id}}`} className="badge badge-primary">{techno}</span>
               ))}
            </div>
            <div className="project__description">{data.description}</div>
            <ShowProjectAction project={data}/>
         </div>
      </div>
   </>
}
