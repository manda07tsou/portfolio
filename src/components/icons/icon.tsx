interface IconProps{
   name: string
}
export function Icon({name}:IconProps){
   return (
      <svg className="icon">
         <use xlinkHref={`/sprite.svg#${name}`}></use>
      </svg>
   )
}