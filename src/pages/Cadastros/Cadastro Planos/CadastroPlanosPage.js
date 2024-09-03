import React, { useState } from 'react';
import './CadastroPlanosPage.css';
import { useNavigate } from 'react-router-dom';

const CadastroPlanosPage = () => {
  const navigate = useNavigate();

  const [plano, setPlano] = useState({
    valor: '',
    dataDeVencimento: '',
    periodicidade: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlano({ ...plano, [name]: value });
  };

  const handleCadastrar = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar os dados
    navigate('/planos');
  };

  const handleCancelar = () => {
    navigate('/planos');
  };

  return (
    <div className='container'>
      <div className="cadastro-page min-vh-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-10">
            <h2 className="text-center mb-4">Cadastro De Planos</h2>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="valor" className="form-label">Valor</label>
                <input
                  type="number"
                  id="valor"
                  name="valor"
                  value={plano.valor}
                  onChange={handleInputChange}
                  placeholder="Valor"
                  className="form-control"
                  step="0.01"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="dataDeVencimento" className="form-label">Data de Vencimento</label>
                <input
                  type="date"
                  id="dataDeVencimento"
                  name="dataDeVencimento"
                  value={plano.dataDeVencimento}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="periodicidade" className="form-label">Periodicidade</label>
                <select
                  id="periodicidade"
                  name="periodicidade"
                  value={plano.periodicidade}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Selecione</option>
                  <option value="mensal">Mensal</option>
                  <option value="semestral">Semestral</option>
                  <option value="anual">Anual</option>
                </select>
              </div>
              <div className="col-12 text-center mt-4 btns">
                <button onClick={handleCadastrar} className="btn-cadastrar">Cadastrar</button>
                <button onClick={handleCancelar} className="btn-cancelar">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroPlanosPage;
