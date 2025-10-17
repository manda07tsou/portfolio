import "./_card.scss";

export function Card({children}){
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