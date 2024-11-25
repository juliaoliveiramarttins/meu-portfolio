import React, { useState, useRef, useEffect } from 'react';
import './styles.css'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        menuIconRef.current && !menuIconRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src="./img/julia.svg" alt="Logo" className="logo" />
        <div className="menu-icon" onClick={toggleMenu} ref={menuIconRef}>
          &#9776; {/* Ícone do menu hamburguer */}
        </div>

        <ul className={`navbar-itens ${menuOpen ? 'show' : ''}`} ref={menuRef}>
          {menuOpen && (
            <li className="close-btn" onClick={closeMenu}>
              &#10005; {/* Ícone de fechar (X) */}
            </li>
          )}
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#tech">Tecnologias</a></li>
          <li><a href="#aboutme">Sobre mim</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
