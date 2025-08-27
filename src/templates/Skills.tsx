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
      <div className="section__body" style={{marginTop: "60px"}}>
         {/* <SkillTree/> */}
         <SkillCard/>
      </div>
   </section>
}

export function SkillTreeItem({title, skills, delay}){
   const  { ref , inView }  =  useInView (observerOptions);
   const observerClass = inView ? `rotate-in`:''
   
   return <div className="skill__tree">
      <div className={`skill__title rotate ${observerClass}`} style={{transitionDelay: delay}} ref={ref}>
         {title}
      </div>
      <div className="skill__connector"></div>
      <div className={`skill__card`}>
         {skills.map(skill => (
            <div key={skill.id} className="skill__item">
               <Icon name={skill?.icon}/>
               <div className="skill__item-title">{skill.title}</div>
            </div>
         ))}
      </div>
   </div>
}

export function SkillTree(){
   const  { ref , inView }  =  useInView (observerOptions);
   const observerClass = inView ? "in":""

   return (
      <div className="skill__grid">
         <div ref={ref} className={`fade ${observerClass}`}>
            {skills?.frontend && <SkillTreeItem title="Frontend" skills={skills?.frontend} delay={"0s"}/>}
         </div>
         <div ref={ref} className={`fade ${observerClass}`} style={{transitionDelay: '.1s'}}>
            {skills?.backend && <SkillTreeItem title="Backend" skills={skills?.backend} delay={".1s"}/>}
         </div>
         <div ref={ref} className={`fade ${observerClass}`} style={{transitionDelay: '.1s'}}>
            {skills?.outils && <SkillTreeItem title="Outils" skills={skills?.outils} delay={".2s"}/>}
         </div>
      </div>
   )
}

export function SkillCardItem({title, skills}){
   return (
      <div className="skill__card">
         <div className="skill__card-title">{title}</div>
         <div className="skill__card-body">
            {skills?.map(skill => (
               <div key={skill.id} className="skill__item">
                  <Icon name={skill?.icon}/>
                  <div className="skill__item-title">{skill.title}</div>
               </div>
            ))}
         </div>
      </div>
   )
}

export function SkillCard(){
   const  { ref , inView }  =  useInView (observerOptions);
   const observerClass = inView ? "in":""
   return (
      <div className="skill__grid">
            <div ref={ref} className={`fade ${observerClass}`}>
               {skills?.frontend && <SkillCardItem title="Frontend" skills={skills?.frontend}/>}
            </div>
            <div ref={ref} className={`fade ${observerClass}`} style={{transitionDelay: '.1s'}}>
               {skills?.frontend && <SkillCardItem title="Backend" skills={skills?.backend}/>}
            </div>
            <div ref={ref} className={`fade ${observerClass}`}  style={{transitionDelay: '.2s'}}>
               {skills?.frontend && <SkillCardItem title="Outils" skills={skills?.outils}/>}
            </div>
      </div>
   )
}