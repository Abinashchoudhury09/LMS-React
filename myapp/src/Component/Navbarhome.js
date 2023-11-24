import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbarhome({ title, registerLink,showRegisterButton, loginLink ,button}) {
  const navDesign = {
    width: '100vw',
  };

  return (
    <>
      <nav style={navDesign} className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
          {/* Use the title prop for the brand */}
          <a className="navbar-brand" href="/">
            {title}
          </a>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto">
              {/* Moved the buttons to a new navbar-nav with ms-auto class for right alignment */}
              {showRegisterButton && (
                <div className="nav-item">
                  {/* Use the registerLink prop for the Register button */}
                  <Link to={registerLink}>
                    <button className="btn btn-primary me-md-2">Register</button>
                  </Link>
                </div>
              )}
              <div className="nav-item">
                {/* Use the loginLink prop for the Login button */}
                <Link to={loginLink}>
                  <button className="btn btn-primary me-md-2">{button}</button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
