import { Icon } from "../components/icons/icon";

export function Footer(){
   return <footer className="footer">
      <div className="contact__socio">
         <div className="mb-1">Réseau social</div>
         <div className="footer__contact">
            <a href="https://github.com/manda07tsou" target="_blank" className="footer__link"><Icon name={"icon-github"}/></a>
            <a href="mailto:rhjmanda@gmail.com" target="_blank" className="footer__link"><Icon name={"icon-mail"}/></a>
            <a href="https://www.facebook.com/bandy.msaina.1/" target="_blank" className="footer__link"><Icon name={"icon-facebook"}/></a>
            <a href="https://www.linkedin.com/in/vonintsoa-rahajanirina-a595a6379/" target="_blank" className="footer__link"><Icon name={"icon-linkedin"}/></a>
         </div>
      </div>
      <p>&copy; 2025 Vonintsoa. All rights reserved.</p>
   </footer>
}