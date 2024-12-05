import React from 'react';
import './styles.css';

const ContactInfo = () => {
    return (
        <div className="contact-info-container" id='contact'>
            <h2>Fale Comigo:</h2>
            <div className="contact-info-links">
                <a href="https://www.linkedin.com/in/juliaoliveiramarttins/" target="_blank" rel="noopener noreferrer">
                    <img src="./img/linkedin.png" alt="LinkedIn" className="contact-info-icon" />
                    <p>LinkedIn</p>
                </a>
                <a href="https://github.com/juliaoliveiramarttins" target="_blank" rel="noopener noreferrer">
                    <img src="./img/github.png" alt="GitHub" className="contact-info-icon" />
                    <p>GitHub</p>
                </a>
                <a>
                    <img src="./img/gmail.png" alt="GitHub" className="contact-info-icon" />
                    <p>contact.jumartins@gmail.com</p>
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;
