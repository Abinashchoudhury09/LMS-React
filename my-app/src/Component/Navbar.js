import React from 'react'

export default function Navbar(props) {
  const maskStyle = {
    height: '60px',
    width: '100vw',
    background: 'black',
    overflow: 'hidden',
    background: 'linear-gradient(rgba(59, 78, 113, 0.8), rgba(65, 15, 100, 2)), url("https://bit.ly/38szWHt")',
    backgroundAttachment: 'fixed',
  };
  return (
    <div>
      <nav style={maskStyle} className="navbar ">
  <div className="container-fluid">
    <p className="navbar-brand " href="/">{props.title}
    </p>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
