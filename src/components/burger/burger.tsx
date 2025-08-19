import "./_burger.scss";

export function Burger({isOpen, onOpen}){
   const className = isOpen ? 'burger__open': 'burger__close'

   return <div className={`burger ${className}`} onClick={onOpen}>
      <span></span>
   </div>
}