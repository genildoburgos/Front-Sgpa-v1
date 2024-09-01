import React from 'react';
import './CadastroPage.css';
import { useNavigate } from 'react-router-dom';

const CadastroPage = () => {

  const navigate = useNavigate();

  const handleCadastrar = () => {
    navigate('/unidades');
  };

  const handleCancelar = () =>{
    navigate('/')
  };

  return (
    <div className="container-fluid cadastro-page min-vh-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Criar Conta</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="companyName" className="form-label">Nome da Empresa</label>
              <input type="text" id="companyName" placeholder="Nome da Empresa" className="form-control" />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" placeholder="Email" className="form-control" />
            </div>
            <div className="col-md-6">
              <label htmlFor="cpfCnpj" className="form-label">CPF/CNPJ</label>
              <input type="text" id="cpfCnpj" placeholder="CPF ou CNPJ" className="form-control" />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">Telefone</label>
              <input type="text" id="phone" placeholder="Telefone" className="form-control" />
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">Senha</label>
              <input type="password" id="password" placeholder="Senha" className="form-control" />
            </div>
            <div className="col-md-6">
              <label htmlFor="confirmPassword" className="form-label">Repetir Senha</label>
              <input type="password" id="confirmPassword" placeholder="Repetir Senha" className="form-control" />
            </div>
            <div className="col-12 text-center mt-4 btns">
              <button type="submit" onClick={handleCancelar} className="btn-cancelar">Cancelar</button>
              <button type="submit" onClick={handleCadastrar} className="btn-cadastrar">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroPage;
