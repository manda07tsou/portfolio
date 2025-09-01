import { useEffect, useState } from "react";
import "./_backtop.scss";

export function BackTop(){
   const [isVisible, setIsVisible] = useState(false)

   useEffect(() => {
      const toggleVisibility = () => {
         if (window.pageYOffset > 500) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
   },[])

   const handleBackToTop = () => {
      window.scrollTo({
         top:0,
         behavior: 'smooth'
      })
   }
   
   return (
      <>
         {isVisible &&
            <div className="backTop" onClick={handleBackToTop}>
               <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
            </div>
         }
      </>
   )
}