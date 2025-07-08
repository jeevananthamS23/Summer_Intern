import React from 'react';
import './Exco.css';

const Exco = ({ img, title, paragraphs = [], reverse = false }) => {
  return (
    <div className={`explore-container ${reverse ? 'reverse' : ''}`}>
      <div className="explore-image">
        <img src={img} alt="Explore visual" />
      </div>
      <div className="explore-text">
        <h2>{title}</h2>
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default Exco;
