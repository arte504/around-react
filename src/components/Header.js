import React from 'react';
import logo from '../images/logo.svg';

export default function Header() {
    return (
      <header className="header">
        <a
            href="#"
            target="_self"
            rel="noopener noreferrer"
        >
            <img src={logo} className="header__logo" alt="logo" />
        </a>
        <br></br>
      </header>
    );
}