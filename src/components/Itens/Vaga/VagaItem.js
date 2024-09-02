import React from 'react';
import './VagaItem.css';

const VagaItem = ({ capacidade, quantidade }) => {
  return (
    <div className="vaga-item">
      <p><strong>Capacidade:</strong> {capacidade}</p>
      <p><strong>Quantidade:</strong> {quantidade}</p>
    </div>
  );
};

export default VagaItem;
