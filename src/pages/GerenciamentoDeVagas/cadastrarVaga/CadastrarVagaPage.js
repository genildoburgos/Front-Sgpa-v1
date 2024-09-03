// src/pages/CadastrarVagaPage/CadastrarVagaPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastrarVagaPage.css';

const CadastrarVagaPage = () => {
  const [capacidade, setCapacidade] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const navigate = useNavigate();

  const handleCadastrar = () => {
    // Lógica para cadastrar a vaga
    navigate('/turmas/gerenciar-vagas'); // Redireciona para a página de gerenciamento de vagas
  };
  const handleCancelar = () => {
    // Lógica para cadastrar a vaga
    navigate('/turmas/gerenciar-vagas'); // Redireciona para a página de gerenciamento de vagas
  };

  return (
    <div className='container'>
      <div className="cadastrar-vaga-page">
      <h2>Cadastrar Vaga</h2>
      <form>
        <div className="form-group">
          <label htmlFor="capacidade">Capacidade:</label>
          <input
            type="number"
            id="capacidade"
            value={capacidade}
            onChange={(e) => setCapacidade(e.target.value)}
            placeholder="Capacidade da Vaga"
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantidade">Quantidade:</label>
          <input
            type="number"
            id="quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            placeholder="Quantidade de Vagas"
          />
        </div>
        <button type="button" className="btn-cadastrar" onClick={handleCadastrar}>
          Cadastrar
        </button>
        <button type="button" className="btn-cancelar" onClick={handleCancelar}>
          Cancelar
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default CadastrarVagaPage;
