export function Icon({name}){
   return (
      <svg className="icon">
         <use xlinkHref={`/sprite.svg#${name}`}></use>
      </svg>
   )
}