import { Toaster } from "react-hot-toast";
import './_toast.scss';

export function ToastContainer(){
   return <Toaster
      position="top-right"
      toastOptions={{
         className: 'toast',
         duration: 2000,
         removeDelay: 200,
         success:{
            iconTheme: {
               primary: 'var(--success)',
               secondary: '#fff',
            },
         },

         error: {
            iconTheme: {
               primary: 'var(--danger)',
               secondary: '#fff'
            }
         },

      }}
   />
}