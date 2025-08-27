import { useDialog } from './hooks/hooks';
import { Dialog, DialogBody, DialogFooter, DialogHeader } from './Dialog';

//Modal de confirmation d'une action
export function ConfirmDialog({
   title,
   message,
   onConfirm,
   onClosed = '',
   trigger,
}){
   const {isOpen, handleOpen, handleClose} = useDialog()

   const handleConfirm = () => {
      onConfirm()
      handleClose()
   }
   
   return (
      <>
         {trigger(handleOpen)}
         <Dialog
            isOpen={isOpen}
            onClose={handleClose}
         >
            <DialogHeader>
               <h5>
               {title}
               </h5>
            </DialogHeader>
            <DialogBody>
               <h6>{message}</h6>
            </DialogBody>
            <DialogFooter>
               <div className="form-action">
                  <button className='btn-primary btn-small' onClick={handleConfirm} autoFocus>
                     Confirmer
                  </button>
                  <button className='btn-secondary btn-small' onClick={handleClose}>Annuller</button>
               </div>
            </DialogFooter>
         </Dialog>
      </>
   );
}