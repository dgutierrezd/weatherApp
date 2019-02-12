import React from "react";
import logo from '../images/logo-via-logohub.png';

const Header = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper light-green darken-2">
          <div className="brand-logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
