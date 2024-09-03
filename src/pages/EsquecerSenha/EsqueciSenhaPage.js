import React from 'react';
import './EsqueciSenhaPage.css';
import { useNavigate } from 'react-router-dom';

const EsqueciSenhaPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };
  return (
    <div className="container-fluid esqueci-senha-page min-vh-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-12">
          <h2 className="text-center mb-4">Esqueci Minha Senha</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" placeholder="Digite seu email" className="form-control" />
            </div>
            <div className="text-center">
              <button type="submit" onClick={handleLogin} className="btn-reset">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EsqueciSenhaPage;
