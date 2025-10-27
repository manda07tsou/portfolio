import { useRef, useState, type ReactNode } from "react";
import { Icon } from "../components/icons/icon";
import emailjs from "@emailjs/browser";
import { Spinner } from "../components/spinner/spinner";
import toast from "react-hot-toast";

export function Contacts(){
   const formRef = useRef<HTMLFormElement>(null)
   const [isSubmitted, setIsSubmitted] = useState(false)

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsSubmitted(true)

      emailjs.sendForm('service_li0tc08','template_f52av0p', formRef.current!, {
         publicKey: 'MgVnw0CHmwQnVf4wd'
      }).then(
         () => {
            toast.success('Votre message a été envoyé avec succès.')
            setIsSubmitted(false)
         },
         (error) => {
            setIsSubmitted(false)
            console.log(error)
            toast.error('Une erreur est survenue lors de l’envoi de votre message. Veuillez réessayer plus tard.')
         },
      )
   };

   return <>
      <div className="section" id="contacts">
         <div className="section__header">
            <div className="section__title">Me contacter</div>
         </div>
         <div className="contact__box">
            <div className="contact__box-header">
               <ContactItemCard title="E-mail" icon="icon-mail">rhjmanda@gmail.com</ContactItemCard>
               <ContactItemCard title="Téléphone" icon="icon-phone">+261 38 71 697 95</ContactItemCard>
               <ContactItemCard title="Github" icon="icon-github"><a href="https://github.com/manda07tsou" target="blank">github.com/manda07tsou</a></ContactItemCard>
               <ContactItemCard title="Adresse" icon="icon-location">Tanjombato, Antananarivo, Madagascar</ContactItemCard>
            </div>
            <div className="contact__box-body">
               <div className="contact__form">
                  <h6 className="mb-3">M'envoyer un message</h6>
                  <form onSubmit={handleSubmit} ref={formRef}>
                     <div className="form__grid">
                        <div>
                           <div className="form-group">
                              <label htmlFor="">Nom</label>
                              <input name="nom" className="form-control" id="name" required placeholder="Votre nom"></input>
                           </div>
                           <div className="form-group">
                              <label htmlFor="">E-mail</label>
                              <input name="email" type="email" className="form-control" required id="name" placeholder="Votre e-mail"></input>
                           </div>

                        </div>
                        <div className="form-group">
                           <label htmlFor="">Messages</label>
                           <textarea name="message" className="form-control" required placeholder="Votre message"></textarea>
                        </div>

                     </div>
                     <button disabled={isSubmitted} type="submit" className="btn btn-primary">
                        {isSubmitted ?
                           <Spinner/>
                           :
                           <>Envoyer</>
                        }
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </>
}

interface ContactItemCardProps {
  title: string;
  icon: string;
  children: ReactNode;
}
export function ContactItemCard({
   title,
   icon,
   children
}: ContactItemCardProps){
   return (
      <div className="contact__item">
         <div className="contact__item-icon">
            <Icon name={icon}/>
         </div>
         <div>
            <div className="contact__item-title">{title}</div>
            <div className="contact__item-info">{children}</div>
         </div>
      </div>
   )
}