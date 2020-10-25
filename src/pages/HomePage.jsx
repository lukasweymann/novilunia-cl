import React from 'react';
import './HomePage.css'
import NavBar from '../components/NavBar';
import FirstSection from '../components/First-Section-Homepage';
import SecondSection from '../components/Second-Section-HomePage';
import ThirdSection from '../components/Third-Section-HomePage';
import FooterHomePage from '../components/Footer';

function HomePage() {
    return(
        <div>
        <div className="homepage">
        <div className="stars"></div>
<div className="twinkling"></div>
<div className="clouds"></div>
<NavBar/>
<div className="homepage-container">
<h1 className="h1-homepage">NOVILUNIA</h1>
<h3 className="h3-homepage">PRODUCTOS ARTESANALES HECHOS CON AMOR</h3>
<div className="buttons-homepage">
<button className="productos-button__homepage">PRODUCTOS</button>
<button className="quienes-button__homepage">QUIÉNES SOMOS</button>
</div>
</div>

        </div>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FooterHomePage/>
        </div>
        
    )
}

export default HomePage;