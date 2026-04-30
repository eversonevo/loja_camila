import React from 'react';
import './CardPequeno.css';

const CardPequeno = ({ icone, titulo, interativo }) => {
  return (
    <div className={`card-base ${interativo ? 'is-hoverable' : ''}`}>
      <div className="card-wrapper">
        <img src={icone} alt={titulo} className="card-icon" />
        {interativo && <span className="card-text">{titulo}</span>}
      </div>
    </div>
  );
};

export default CardPequeno;