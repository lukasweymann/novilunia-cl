import React from  'react';
import './Footer.css';
import FooterLogo from '../images/footer-logo.png';
import WhatsApp from '../images/whatsapp 1.svg';
import Instagram from '../images/instagram.svg';
import Mail from '../images/mail.svg';

const FooterHomePage = () => {
    return(
        <footer>
<div className="footer-column">
<img src={FooterLogo} className="footer-logo"/>
<p className="footer-paragraph">Productos artesanales hechos con amor ♡</p>
<p className="copyright">© Novilunia - Todos los derechos reservados.</p>
</div>
<div className="socials">

<img src={WhatsApp} className="whatsapp-icon social-icon"/>

<img src={Instagram} className="instagram-icon social-icon"/>
<img src={Mail} className="mail-icon social-icon"/>
</div>
</footer>
    )
}

export default FooterHomePage;