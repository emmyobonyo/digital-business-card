import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <img src="./obonyo.jpeg" alt="Emmanuel Obonyo" />
      <h2 className="name">Emmanuel Obonyo</h2>
      <h4 className="job">Software Engineer</h4>
      <a href="https://github.com/emmyobonyo" className="github">github.com/emmyobonyo</a>
      <div className="buttons">
        <button className="btn-1" type="button">
          <i className="fas fa-envelope fa-1x" />
          Mail
        </button>
        <button className="btn-2" type="button">
          <i className="fas fa-envelope fa-1x" />
          LinkedIn
        </button>
      </div>
    </header>
  );
}

export default Header;
