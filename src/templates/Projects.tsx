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
            <p className="section__subtitle">Projets marquants</p>
            <div className={`section__title fade ${observerClass}`} ref={ref}>Mes réalisations</div>
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

   return <>
      <div key={`project-${data.id}`} className={`project__card fade ${observerClass}`} ref={ref} style={{transitionDelay: `.${index - 1}s`}}>
         <h5>{data.title}</h5>
         <div className="project__images">
            <img src={`/images/projects/${data.coverImage}`} alt="image__project" />
         </div>
         <div className="project__card-body mt-2">
            <div className="flex space-between">
               <div className="text-primary hide-mobil">Développeur fullstack</div>
               <div className="project__card-techno">
                  {data?.technos?.map((techno:string) => (
                     <span key={`${techno}-${data.id}}`} className="">{techno}</span>
                  ))}
               </div>
            </div>
            <div className="project__description">{data.description}</div>
            <ShowProjectAction project={data}/>
         </div>
      </div>
   </>
}

export function ProjectCard(){
   return (
   <div className="project__card">
      <div>
         <h5 className="">GMAO</h5>
      </div>

      <div className="project__image">
         <img src={`/images/projects/gmao1.png`} alt="image__project" />
      </div>
      <div className="project__card-body mt-2">
         <p className="flex space-between  text-small">
            <div className="hide-mobil">Développeur fullstack</div>
            <div className="text-primary">Symfony | React</div>
         </p>
         <p className="mt-4">Application complète pour optimiser les processus de maintenance avec Symfony et React.</p>
         <ShowProjectAction project={{}}/>
      </div>
   </div>
   )
}
