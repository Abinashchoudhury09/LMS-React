import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbarhome() {
  const navdesign = {
    width: '100vw',
  };
  return (
    <>
      <nav style={navdesign} className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Library Management System
          </a>
          
          <div className="collapse navbar-collapse" id="navbarScroll">
           
            <ul className="navbar-nav ms-auto">
              {/* Moved the buttons to a new navbar-nav with ms-auto class for right alignment */}
              <div className="nav-item">
                <button className="btn btn-primary me-md-2" >
                  
                  Register
                </button>
              </div>
              <div className="nav-item">
             
                 
                <Link to="/Signin"><button className="btn btn-primary me-md-2">Login</button></Link>
                
                

              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
