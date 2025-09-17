import { useInView } from "react-intersection-observer"
import { observerOptions } from "../config"
import projectsData from "./../modules/Projects/projectsData.json";
import { ShowProjectAction } from "../modules/Projects/ShowProjectAction";

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
      <div key={`project-${data.id}`} className={`project fade ${observerClass}`} ref={ref} style={{transitionDelay: `.${index - 1}s`}}>
         <div className="project__images">
            <img src={`/images/projects/${data.coverImage}`} alt="image__project" />
         </div>
         <div className="project__body">
            <p className="text-primary hide-mobil">Développeur fullstack</p>
            <div className="project__title">{data.title}</div>
            <div className="project__technos">
               {data.technos.map(techno => (
                  <span key={`${techno}-${data.id}}`} className="badge badge-warning">{techno}</span>
               ))}
            </div>
            <div className="project__description">{data.description}</div>
            <ShowProjectAction project={data}/>
         </div>
      </div>
   </>
}
