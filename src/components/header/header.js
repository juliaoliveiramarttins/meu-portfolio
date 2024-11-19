import React, { useState, useRef, useEffect } from 'react';
import './styles.css'; // Importando o CSS

const Navbar = () => {
  // Estado para controlar a visibilidade do menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Referências para o menu e o ícone do menu
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para fechar o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Se o clique não for dentro do menu nem no ícone do menu, fecha o menu
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        menuIconRef.current && !menuIconRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    // Adiciona o evento de clique fora
    document.addEventListener('click', handleClickOutside);

    // Limpeza do evento ao desmontar o componente
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src="./img/julia.svg" alt="Logo" className="logo" />
        
        {/* Menu hamburguer (ícone) */}
        <div className="menu-icon" onClick={toggleMenu} ref={menuIconRef}>
          &#9776; {/* Símbolo de menu hamburguer */}
        </div>

        {/* Menu de navegação (ul) com alternância visível quando menuOpen é true */}
        <ul 
          className={`navbar-itens ${menuOpen ? 'show' : ''}`} 
          ref={menuRef}
        >
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#aboutme">Sobre mim</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

