import "./_dialog.scss"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

interface DialogProps{
   isOpen: boolean,
   onClose: () => void,
   closedBtn?: boolean,
   className?: string,
   children: React.ReactNode
}
export function Dialog({
   isOpen, 
   onClose,
   closedBtn=false,
   className='',
   children
}: DialogProps){
   const dialogShadow = useRef<HTMLDivElement|null>(null)
   const dialog = useRef<HTMLDivElement|null>(null)

   useEffect(() => {
      if(isOpen){
         if(dialogShadow.current){
            dialogShadow.current.addEventListener('click', (e:MouseEvent) => {
               if(dialog.current){
                  if (!dialog.current.contains(e.target as Node)) {
                     onClose();
                  }
               }
            })
         }
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

interface ChildrenProps{
   children: React.ReactNode
}
export function DialogHeader({children}:ChildrenProps){
   return <div className="dialog__header">
            {children}
         </div>
}

export function DialogBody({children}:ChildrenProps){
   return <div className="dialog__body">
         {children}
      </div>
}

export function DialogFooter({children}:ChildrenProps){
   return <div className="dialog__footer">
            {children}
         </div>
}