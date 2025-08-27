import { useState } from "react";
import { useDialog } from "./hooks/hooks";
import { Dialog, DialogBody, DialogFooter, DialogHeader } from "./Dialog";
import { ExportExcelButton } from "../../modules/actionsButton";


export function FileUploadDialog({
   fichier,
   onConfirm,
   onReset
}){
   const [filename, setFilename] = useState(fichier)
   const {isOpen, handleOpen, handleClose} = useDialog(false)

   const handleReset = () => {
      handleClose()
      setFilename(fichier)
   }

   const handleConfirm = () => {
      onConfirm(filename)
      handleClose()
   }

   return <>
      <ExportExcelButton onClick={handleOpen}/>
      <Dialog
         isOpen={isOpen}
         onClose={handleReset}
      >
         <DialogHeader>
            <h5>Choisissez le nom du fichier à enregistrer</h5>
         </DialogHeader>
         <DialogBody>
            <input className="form-control" value={filename} onChange={(e) => setFilename(e.target.value)}/>
         </DialogBody>
         <DialogFooter>
            <button className="btn-primary btn-small" onClick={handleConfirm}>Enregistrer</button>
            <button className="btn-secondary btn-small ml-2" onClick={handleClose}>Annuler</button>
         </DialogFooter>
      </Dialog>
   </>
}