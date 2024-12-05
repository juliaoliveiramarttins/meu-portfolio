import React from 'react';
import './styles.css';

const LogoSection = () => {
    return (
        <div className="logo-section-container"id='logos'>
            <h2 className='title-logo'> Meus Logos</h2>
            <p className="section-description">
                Aqui estão alguns dos logos que criei. Eles refletem minha criatividade e habilidades no design.
            </p>
            <div className="logo-container">
                <div className="logo-item">
                    <img src="./img/juxy.png" alt="Logo 1" className="logo-img" />
                    <p className="logo-description" ><strong>Juxy</strong>: Um logotipo simples e elegante, com o contorno minimalista de uma raposa, simbolizando inteligência, astúcia e agilidade. O círculo suave ao fundo traz harmonia e suavidade, complementando a figura. A tipografia clean e moderna transmite sofisticação e modernidade, refletindo uma marca com valores de inovação e leveza.</p>
                </div>
                <div className="logo-item">
                    <div className='teste'>
                        <img src="./img/JA-makeup.png" alt="Logo 2" className="logo-img" />
                        <p className="logo-description"><strong>JA (Júlia A)</strong>: Um logotipo elegante e criativo, com iniciais harmoniosas e um pincel que simboliza o 
                            universo da maquiagem. As estrelas e a tipografia fluida transmitem feminilidade, magia e sofisticação, enquanto o roxo evoca criatividade e 
                            delicadeza, refletindo os valores da marca de beleza.
                        </p>
                    </div>
                </div>
                <div className="logo-item">
                    <img src="./img/gbe.png" alt="Logo 3" className="logo-img" />
                    <p className="logo-description"><strong>Guardiãs do Bem-Estar</strong>: Logotipo elegante com asas estilizadas que representam proteção e leveza. As estrelas centralizadas simbolizam equilíbrio, enquanto o rosa transmite vitalidade e feminilidade, refletindo acolhimento, cuidado e transformação relacionados ao bem-estar.
                    </p> 
                </div>
            </div>
        </div>
    );
};

export default LogoSection;
