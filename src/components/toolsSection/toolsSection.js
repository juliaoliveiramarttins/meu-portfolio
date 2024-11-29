import React from 'react';
import './styles.css';

const ToolsSection = () => {
    return (
        <div className="tools-section-container" id='tech'>
            <h2>Ferramentas e Tecnologias</h2>
            <ul className="tools-list">
                <li><img src="./img/html-5.png" alt="html" className="tools-icon" /> HTML</li>
                <li><img src="./img/css-3.png" alt="css" className="tools-icon" /> CSS</li>
                <li><img src="./img/js.png" alt="js" className="tools-icon" /> JS</li>
                <li><img src="./img/node-js.png" alt="node.js" className="tools-icon" /> Node.js</li>
                <li><img src="./img/react.png" alt="react" className="tools-icon" /> React</li>
                <li><img src="./img/mysql.png" alt="mysql" className="tools-icon" /> MySql</li>
                <li><img src="./img/mongodb.png" alt="mongo" className="tools-icon" /> MongoDB</li>
                <li><img src="./img/github.png" alt="git" className="tools-icon" /> GitHub</li>
                <li><img src="./img/canva.png" alt="canva" className="tools-icon" /> Canva</li>
                <li><img src="./img/figma.png" alt="figma" className="tools-icon" /> Figma</li>
            </ul>
        </div>
    );
};

export default ToolsSection;
