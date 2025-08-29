import {Dialog, DialogHeader} from "./../../components/Dialog/Dialog"

export function ShowProjectDialog({isOpen, onClose}){
 
   return (
      <Dialog 
         isOpen={isOpen} 
         onClose={onClose}
         className="dialog-full"
      >
         <DialogHeader>Détails project</DialogHeader>
      </Dialog>
   )

}