import { useInView } from "react-intersection-observer";
import { Icon } from "../components/icons/icon";
import { observerOptions } from "../config";
import skills from "../skillsData.json";

export function Skills(){
   const  { ref , inView }  =  useInView (observerOptions);
   const observerClass = inView ? "in":""

   return <section className="section skills">
      <div className="section__header text-center observe">
         <div className={`section__title fade ${observerClass}`} ref={ref}>Mes compétences</div>
      </div>
      <div className="section__body">
         <div className="skill__grid">
            <div ref={ref} className={`fade ${observerClass}`}>
               {skills?.frontend && <Skill title="Frontend" skills={skills?.frontend} delay={"0s"}/>}
            </div>
            <div ref={ref} className={`fade ${observerClass}`} style={{transitionDelay: '.1s'}}>
               {skills?.backend && <Skill title="Backend" skills={skills?.backend} delay={".1s"}/>}
            </div>
            <div ref={ref} className={`fade ${observerClass}`} style={{transitionDelay: '.1s'}}>
               {skills?.outils && <Skill title="Outils" skills={skills?.outils} delay={".2s"}/>}
            </div>
         </div>
      </div>
   </section>
}

export function Skill({title, skills, delay}){
   const  { ref , inView }  =  useInView (observerOptions);
   const observerClass = inView ? `rotate-in`:''
   
   return <div className="skill">
      <div className={`skill__title rotate ${observerClass}`} style={{transitionDelay: delay}} ref={ref}>
         {title}
      </div>
      <div className="skill__connector"></div>
      <div className={`skill__card`}>
         {skills.map(skill => (
            <div key={skill.id}>
               {skill.title}
               <Icon name={skill?.icon}/>
            </div>
         ))}
      </div>
   </div>
}