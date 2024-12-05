import React from 'react';
import './styles.css'; // Importando os estilos

const AboutMe = () => {
    return (
        <section className="about-me-container" id='aboutme'>
            <div className="about-me-inner">
                <div className="about-me-image">
                    <img src="./img/julia.png" alt="Sua Foto" />
                </div>
                <div className="about-me-text">
                    <h2>Sobre Mim</h2>
                    <p>
                        <p>
                            Olá! me chamo <strong>Júlia Martins</strong>, tenho 21 anos e estou trilhando meu caminho no universo tecnológico,
                            me formando em Desenvolvimento de Software Multiplataforma pela <strong>FATEC</strong>.
                        </p>
                        <p>
                            Atualmente, estou em busca de oportunidades nas áreas de <strong>Desenvolvimento Front-end</strong>, <strong>Web Design </strong>
                            e <strong>UI/UX</strong>. Tenho experiência com algumas ferramentas e Tecnologias que você pode conferir acima.
                        </p>
                        <p>
                            No meu tempo livre, sou apaixonada por música, especialmente Hip Hop e Rap, e sou fã da saga Harry Potter. Adoro animais e minha criatura favorita
                            é a raposa, o que inspirou o meu logo. A junção de "Júlia" e "Foxy" (que significa "raposa" em inglês) simboliza minha personalidade curiosa e
                            sempre disposta a aprender, assim como a raposa, que é conhecida por sua astúcia e adaptabilidade.
                        </p>
                        <p>
                            Essa sou eu! Caso queira entrar em contato, fique à vontade para conferir minhas informações logo abaixo.
                        </p>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
