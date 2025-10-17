import type { ReactNode } from "react";
import "./_card.scss";


interface CardProps {
  children: ReactNode;
}

export function Card({children}:CardProps){
   return <div className="card">
      <div className="card__header">
         <div className="circle circle__yellow"></div>
         <div className="circle circle__green"></div>
         <div className="circle circle__red"></div>
      </div>
      <div className="card__body">
         {children}
      </div>
   </div>
}