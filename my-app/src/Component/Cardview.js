import React from 'react';

const Card = () => {
  const cardStyle = {
    width: '15rem',
    margin: '1rem',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    transition: '0.3s',
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
  };

  return (
    <div className="card" style={cardStyle}>
      <img src="physics.jpg" className="card-img-top" alt="Card Image" style={imageStyle} />
      <div className="card-body">
        <h5 className="card-title text-info">Solid State Physics 1st Edition</h5>
        <p className="card-text text-warning">by Neil W. Ashcroft (Author), N. David Mermin (Author)</p>
        <hr />
        <p className="card-text"></p>
        <a href="#" className="btn btn-primary ms-5">Learn More</a>
      </div>
    </div>
  );
};

export default Card;
