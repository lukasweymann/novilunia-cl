import React from 'react';
import './First-Section-HomePage.css';
import Moon from '../images/moon-phase.png';
import CandleRm from '../images/vela-removed-min.png'

const FirstSection = () => {
    return(
        <section className="first-section">
        <img src={CandleRm} className="first-candle" alt="Candle"/>

<div className="container-first-section__homepage">
<div className="first-section-homepage__title">
<h2 className="first-section-homepage__h2">¿QUÉ ES NOVILUNIA?</h2>
<img src={Moon} className="moon-phase" alt="moon-phase-icon"></img>
</div>
<p className="first-paragraph__homepage">Novilunia viene de luna nueva. El florecer de cosas nuevas y reinventarse. Es una marca que propone encontrar la belleza volviendo a nuestros orígenes y fabricando productos de manera artesanal, natural y renovable. Creando así copias únicas con mucha más personalidad que un productode venta masiva. Asegurando un acabado al que se le ha dedicado especial tiempo y una pieza única para quien lo adquiera.</p>
</div>
</section>
    )
}

export default FirstSection;