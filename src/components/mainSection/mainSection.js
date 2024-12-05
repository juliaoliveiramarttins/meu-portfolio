import React from 'react';
import './styles.css';

const MainSection = () => {
    return (
        <>
            <div className='projects' id='projects' >
                <h1>Meus projetos</h1>
            </div>

            <div className='projects-container' >
                <div className='project'>
                    <h3 className='title'>Gringotts</h3>
                    <a href="https://gringotts.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src='./img/gringotts1.png' alt="Gringotts Project" />
                    </a>

                    <div className='description'>
                        <p>
                            Este foi o meu primeiro projeto. Na época, participei de uma hackathon em uma empresa onde eu estava como menor aprendiz. O vencedor da competição
                            ganharia a oportunidade de aprender mais sobre a área de TI da empresa. Fui a vencedora por entender bem o propósito do desafio: focar na parte de validação.
                        </p>
                        <p>
                            Com base nisso, criei uma nova tela de <strong>login</strong>, onde o usuário precisa preencher os campos corretamente para ser redirecionado à página principal.
                            Embora esse projeto não tenha um back-end para validação completa, ele verifica se os campos foram preenchidos corretamente antes de permitir o acesso.
                        </p>
                        <p>
                            O design foi inspirado na minha saga favorita: <strong>Harry Potter.</strong> Você pode explorar mais sobre a história do projeto e seu universo visitando o site.
                        </p>

                        
                    </div>
                    <div className='tools'>
                    <h4>Ferramentas e Tecnologias utilizadas:</h4>
                        <ul className='tools-list'>
                            <li>
                                <img src='./img/html-5.png' alt='HTML5' />
                            </li>
                            <li>
                                <img src='./img/css-3.png' alt='CSS3' />
                            </li>
                            <li>
                                <img src='./img/js.png' alt='JavaScript' />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='project'>
                    <h3 className='title'>Mar de Beleza</h3>
                    <a href="https://mar-de-beleza.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src='./img/mardeblz2.png' alt="Mar de Beleza Project" />
                    </a>

                    <div className='description'>
                        <p>
                            É uma marca de produtos de beleza, e seu site foi desenvolvido para proporcionar uma experiência intuitiva e fluida, com um design moderno inspirado no tema praiano.
                            O projeto foi construído utilizando <strong>React</strong>, <strong>HTML5</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>.
                        </p>
                        <p>
                            Esse site foi desenvolvido em um curto período de tempo como parte de uma atividade acadêmica, e foi onde tive a oportunidade de me aprofundar
                            no desenvolvimento com React, JavaScript e design web.
                        </p>
                        <p>
                            Eu estive envolvida em todos os detalhes do projeto, desde a escolha do nome e a criação do logo, até o design dos produtos personalizados exibidos no site.
                            Também participei ativamente da definição da tipografia e, claro, no desenvolvimento da programação.
                        </p>
                    </div>
                    <div className='tools'>
                    <h4>Ferramentas e Tecnologias utilizadas:</h4>
                        <ul className='tools-list'>
                            <li>
                                <img src='./img/react.png' alt='React' />
                            </li>
                            <li>
                                <img src='./img/html-5.png' alt='HTML5' />
                            </li>
                            <li>
                                <img src='./img/css-3.png' alt='CSS3' />
                            </li>
                            <li>
                                <img src='./img/js.png' alt='JavaScript' />
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div className='project'>
                    <h3 className='title'>Van Gogh - Tributo</h3>
                    <a href="https://van-gogh-tribute.vercel.app" target="_blank" rel="noopener noreferrer">
                        <img src='./img/vangogh.png' alt="Van Gogh Tribute Project" />
                    </a>

                    <div className='description'>
                        <p>
                            O <strong>Tributo Van Gogh</strong> é um projeto desenvolvido para praticar e aprimorar habilidades em <strong>HTML</strong> e <strong>CSS</strong>.
                            Com uma estrutura simples, o site é uma homenagem ao renomado pintor <strong>Vincent van Gogh</strong>, apresentando informações sobre sua vida
                            e obra de forma visualmente atraente.
                        </p>
                        <p>
                            Utilizando apenas <strong>HTML</strong> e <strong>CSS</strong>, o design busca refletir a estética única de Van Gogh, com cores contidas em suas
                            obras e um layout inspirado em uma tela de pintura.
                        </p>
                        <p>
                            Este projeto foi criado com o objetivo de conhecer novas funcionalidades e tags do <strong>HTML</strong> e <strong>CSS</strong>.
                        </p>
                    </div>

                    <div className='tools'>
                        <h4>Ferramentas e Tecnologias utilizadas:</h4>
                        <ul className='tools-list'>
                            <li>
                                <img src='./img/html-5.png' alt='HTML5' />
                            </li>
                            <li>
                                <img src='./img/css-3.png' alt='CSS3' />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="project">
                    <h3 className="title">VOID - Protótipo</h3>
                    <a href="https://www.figma.com/design/eKB42She31w0Rp7ySLwWR9/void-portifolio?t=qauMLHpFPVbRyic9-1" target="_blank" rel="noopener noreferrer">
                        <img src="./img/void2.png" alt="Protótipo do jogo VOID" />
                    </a>

                    <div className="description">
                        <p>
                            O <strong>VOID</strong> é um jogo de cartas com tema espacial, cujo objetivo é vencer o jogador que restar com cartas na mão.
                            Este projeto está sendo desenvolvido para fins acadêmicos, e eu fui responsável pela criação do design da interface do jogo.
                        </p>
                        <p>
                            Atualmente, o projeto encontra-se em fase de desenvolvimento, com novas telas sendo criadas para aprimorar a experiência do usuário.
                            Todas as interfaces estão sendo projetadas no <strong>Figma</strong>, o que garante um processo de desenvolvimento ágil e colaborativo,
                            permitindo que a equipe trabalhe de forma integrada e sem complicações.
                        </p>
                    </div>
                    <div className='tools'>
                    <h4>Ferramentas e Tecnologias utilizadas:</h4>
                        <ul className='tools-list'>
                            <li>
                                <img src='./img/figma.png' alt='figma' />
                            </li>
                            <li>
                                <img src='./img/canva.png' alt='canva' />
                            </li>
                          
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
};
export default MainSection;
