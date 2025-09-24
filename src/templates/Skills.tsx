import { useInView } from "react-intersection-observer";
import { Icon } from "../components/icons/icon";
import { observerOptions } from "../config";
import skills from "./../modules/skills/skillsData.json";

interface Skill{
   id:number,
   title:string,
   icon:string
}
export function Skills(){
   const  { ref , inView }  =  useInView (observerOptions);
   const observerClass = inView ? "in":""

   return <section className="section skills" id="skills">
      <div className="section__header text-center observe">
         <p className="section__subtitle" style={{fontSize: "1.2em"}}>Frameworks & langages</p>
         <div className={`section__title fade ${observerClass}`} ref={ref}>Mes compétences</div>
      </div>
      <div className="section__body" style={{marginTop: "60px"}}>
         <SkillCard/>
      </div>
   </section>
}


interface SkillItemProps{
   title:string,
   skills: Skill[],
   delay: string
}
export function SkillCardItem({title, skills, delay}:SkillItemProps){
   const  { ref , inView }  =  useInView (observerOptions);
   const observerClass = inView ? "in":""
   const titleStyles = {
      frontend: "card-purple",
      backend: "card-orange",
      outils: "card-info"
   }

   const currentTitleStyle = titleStyles[title.toLowerCase() as keyof typeof titleStyles];

   return (
      <div ref={ref} className={`skill__card fade ${observerClass} ${currentTitleStyle}`} style={{transitionDelay: delay}}>
         <div className={`skill__card-title`}>{title}</div>
         <div className="skill__card-body">
            {skills?.map(skill => (
               <div key={skill.id} className="skill__item">
                  <div className="skill__icon">
                     <Icon name={skill?.icon}/>
                  </div>
                  <div className="skill__item-title">{skill.title}</div>
               </div>
            ))}
         </div>
      </div>
   )
}

export function SkillCard(){
   return (
      <div className="skill__grid">
         {skills?.frontend && <SkillCardItem title="Frontend" skills={skills?.frontend} delay="0s"/>}
         {skills?.frontend && <SkillCardItem title="Backend" skills={skills?.backend} delay=".1s"/>}
         {skills?.frontend && <SkillCardItem title="Outils" skills={skills?.outils} delay=".2s"/>}
      </div>
   )
}