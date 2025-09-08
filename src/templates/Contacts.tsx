export function Contacts(){
   return <><Contact1/></>
}

export function Contact(){
      return <div className="section" id="contacts">
      <div className="section__header">
         <div className="section__title">Me contacter</div>
      </div>
      <div className="contact__box">
         <div className="contact__socio">
            <h5>Coodonnées</h5>
            <div className="mt-2">
               <p>E-mail</p>
               <h6>rhjmanda@gmail.com</h6>
            </div>
            <div className="mt-2">
               <p>Télephone</p>
               <h6>+261 38 71 697 95</h6>
            </div>
         </div>
         <div className="contact__form">
            <h6>M'envoyer un message</h6>
            <form action="">
               <div className="form-group">
                  <label htmlFor="">Nom</label>
                  <input className="form-control" id="name" placeholder="Votre nom"></input>
               </div>
               <div className="form-group">
                  <label htmlFor="">E-mail</label>
                  <input className="form-control" id="name" placeholder="Votre e-mail"></input>
               </div>
               <div className="form-group">
                  <label htmlFor="">Messages</label>
                  <textarea className="form-control" placeholder="Votre message"></textarea>
               </div>
               <button className="btn btn-primary">Envoyer</button>
            </form>
         </div>
      </div>
   </div>
}
export function Contact1(){
   return (
      <div className="section" id="contacts">
         <div className="section__header">
            <div className="section__title">Me contacter</div>
         </div>
         <div className="contact1__box">
            <div className="contact1__box-header">
               <div className="contact__item">
                  <p className="text-primary">E-mail</p>
                  <h6>rhjmanda@gmail.com</h6>
               </div>
               <div className="contact__item">
                  <p className="text-primary">Télephone</p>
                  <h6>+261 38 71 697 95</h6>
               </div>
            </div>
            <div className="contact__box-body">
               <div className="contact1__form">
                  <h6 className="mb-3">M'envoyer un message</h6>
                  <form action="">
                     <div className="form__grid">
                        <div>
                           <div className="form-group">
                              <label htmlFor="">Nom</label>
                              <input className="form-control" id="name" placeholder="Votre nom"></input>
                           </div>
                           <div className="form-group">
                              <label htmlFor="">E-mail</label>
                              <input className="form-control" id="name" placeholder="Votre e-mail"></input>
                           </div>

                        </div>
                        <div className="form-group">
                           <label htmlFor="">Messages</label>
                           <textarea className="form-control" placeholder="Votre message"></textarea>
                        </div>

                     </div>
                     <button className="btn btn-primary">Envoyer</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}