import React from 'react';
import Star from '../images/star 1.svg';
import SecondCandle from '../images/second section img-min.png'
import './Second-Section-HomePage.css';

const SecondSection = () => {
    return(
        <section className="second-section__homepage">
<div className="left-block-second-section__homepage">
<div className="title-second-section__homepage">
<h2 className="second-section__homepage-h2">¿QUÉ HACEMOS EN NOVILUNIA?</h2>
<img src={Star} className="star-homepage" alt="star-homepage"/>
</div>
<p className="second-section__homepage-paragraph">En Novilunia fabricamos velas, runas y objetos decorativos con un acabado profesional, manteniendo un aspecto natural. Nuestro fin es crear un producto que cree una experiencia especial y que enriquezca la decoración del lugar al que se agrega. Asimismo distribuimos productos que complementan nuestro estilo como inciensos libres de parafina.</p>

</div>
<div className="right-block-second-section__homepage">
<img src={SecondCandle} className="second-candle" alt="second-candle" />
</div>
</section>
    )
}
export default SecondSection;