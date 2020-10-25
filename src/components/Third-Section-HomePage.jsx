import React from 'react';
import './Third-Section-HomePage.css';
import FirstProduct from '../images/product1.png';
import SecondProduct from '../images/product2.png';
import ThirdProduct from '../images/product3.png';
import Arrow from '../images/Arrow 1.svg';

const ThirdSection = () => {
    return(
        <section>
<div className="third-section__homepage">
<h2 className="h2-third-section__homepage">CONOCE NUESTROS PRODUCTOS</h2>
<div className="product-pics__homepage">
<img src={FirstProduct} className="first-product__homepage product"/>
<img src={SecondProduct} className="second-product__homepage product"/>
<img src={ThirdProduct} className="third-product__homepage product"/>
</div>
<div className="visita-arrow">
<h3 className="h3-products-section__homepage">VISITA NUESTRO CATÁLOGO</h3>
<img src={Arrow} className="arrow"/>
</div>
</div>
</section>
    )
};

export default ThirdSection;