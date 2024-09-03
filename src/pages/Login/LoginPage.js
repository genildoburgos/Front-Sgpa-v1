
import React from 'react';
import './LoginPage.css';
import logIma from '../../assets/Logo Minimalista Personal Trainer Branco e Verde.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/unidades');
  };

  const handleSignUp = () => {
    navigate('/criarconta')
  };

  return (
    <div className="row login-page min-vh-100 ">
        <div className="col-md-6 d-flex justify-content-center align-items-center bg-01 min-vh-100">
            <div>
                <img src={logIma} alt="Logo" className="logo-img" />
            </div>
    
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <form className="login-form text-center">
            <input type="text" placeholder="Email" className="form-control my-3" />
            <input type="password" placeholder="Senha" className="form-control my-3" />
            <button type="button" onClick={handleLogin} className="btn-login">Login</button>
            <button type="button" onClick={handleSignUp} className="btn-signup">Criar Conta</button>
            <a href='esqueciSenha' className="forgot-password mt-3 d-block">Esqueci minha senha</a>
          </form>
        </div>
    </div>
  );
};




export default LoginPage;
