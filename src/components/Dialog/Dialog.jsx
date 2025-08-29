import "./_dialog.scss"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

export function Dialog({
   isOpen, 
   onClose,
   closedBtn=false,
   className='',
   children
}){
   const dialogShadow = useRef(null)
   const dialog = useRef(null)

   useEffect(() => {
      if(isOpen){
         dialogShadow.current.addEventListener('click', (e) => {
            if(dialog.current && !dialog.current.contains(e.target)){
               onClose()
            }
         })
         //Désactive le scroll sur le body
         document.body.style.overflow = 'hidden';

         //Ajouter un padding pour evité le resize du body lorsque le scrollbar se masque
         if(document.body.clientWidth > 720 && window.innerHeight < document.body.scrollHeight){
            document.body.style.paddingRight = '15px';
         }
         
      }else{
         document.body.style.overflow = '';
         document.body.style.paddingRight = '';
      }

   }, [isOpen])

   return (
      <>
         {isOpen && createPortal(
            <div className="dialog-overlay" ref={dialogShadow}>
               <div className={`dialog ${className}`} ref={dialog}>
                  {closedBtn &&
                     <div className="dialog__closed" onClick={onClose}>X</div>
                  }
                  {children}
               </div>
            </div>,
            document.body
         )
      }
      </>
   )
}

export function DialogHeader({children}){

   return <div className="dialog__header">
            {children}
         </div>
}

export function DialogBody({children}){
   return <div className="dialog__body">
         {children}
      </div>
}

export function DialogFooter({children}){
   return <div className="dialog__footer">
            {children}
         </div>
}