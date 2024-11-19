// src/components/LogoSection/LogoSection.js
import React from 'react';
import './styles.css';

const LogoSection = () => {
    return (
        <div className="logo-section-container">
            <h2 className='title-logo'>Meus Logos</h2>
            <p className="section-description">
                Aqui estão alguns dos logos que criei. Eles refletem minha criatividade e habilidades no design.
            </p>
            <div className="logo-container">
                <div className="logo-item">
                    <img src="./img/juliaa.png" alt="Logo 1" className="logo-img" />
                    <p className="logo-description" >Um design minimalista, porém único, que transmite uma identidade visual fora do convencional. A raposa, é um símbolo de inovação e criatividade. Já o círculo representa um universo de possibilidades infinitas, trazendo autenticidade. </p>
                </div>
                <div className="logo-item">
                    <img src="./img/lg-blz.png" alt="Logo 2" className="logo-img" />
                    <p className="logo-description">Um logotipo curvilíneo e feminino, com uma tipografia delicada e uma onda estilizada para representar o mar, que transmite a sensação de leveza, frescor e bem-estar, associados ao universo da beleza.</p>
                </div>
                <div className="logo-item">
                    <img src="./img/gbe.png" alt="Logo 3" className="logo-img" />
                    <p className="logo-description">Um logotipo vibrante e dinâmico, com formas abstratas que remetem a asas e estrelas, transmitindo a ideia de proteção, cuidado, conforto e energia positiva, associados ao conceito de bem-estar.</p>
                </div>
            </div>
        </div>
    );
};

export default LogoSection;
