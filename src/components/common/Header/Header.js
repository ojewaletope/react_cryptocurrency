import React from "react";
import logo from './logo.png';
import './Header.css'

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} className="Header-logo" alt="Logo"/>
    </div>
  )
};

export default Header;
