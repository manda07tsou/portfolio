import "./_burger.scss";

interface BurgerProps{
   isOpen: boolean
   onOpen: () => void
}
export function Burger({isOpen, onOpen}:BurgerProps){
   const className = isOpen ? 'burger__open': 'burger__close'

   return <div className={`burger ${className}`} onClick={onOpen}>
      <span></span>
   </div>
}