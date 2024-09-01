import React, { useState } from 'react';
import './CadastroInstrutoresPage.css';
import { useNavigate } from 'react-router-dom';

const CadastroInstrutoresPage = () => {
  const navigate = useNavigate();

  const [instrutor, setInstrutor] = useState({
    nome: '',
    cpf: '',
    clt: '',
    sexo: '',
    dataNascimento: '',
    telefone: '',
    contatoEmergencia: '',
    email: '',
    endereco: {
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: ''
    },
    unidade: '',
    turmas: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('endereco')) {
      const enderecoName = name.split('.')[1];
      setInstrutor({
        ...instrutor,
        endereco: { ...instrutor.endereco, [enderecoName]: value },
      });
    } else {
      setInstrutor({ ...instrutor, [name]: value });
    }
  };

  const handleCadastrar = (e) => {
    e.preventDefault();
    // Lógica para salvar os dados
    navigate('/instrutores');
  };

  const handleCancelar = () => {
    navigate('/instrutores');
  };

  return (
    <div className='container'>
      <div className="cadastro-page min-vh-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-10">
            <h2 className="text-center mb-4">Cadastro De Instrutor</h2>
            <form className="row g-3">

              {/* Dados Pessoais */}
              <div className="col-md-6">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" id="nome" name="nome" value={instrutor.nome} onChange={handleInputChange} placeholder="Nome" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="cpf" className="form-label">CPF</label>
                <input type="text" id="cpf" name="cpf" value={instrutor.cpf} onChange={handleInputChange} placeholder="CPF" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="clt" className="form-label">CLT</label>
                <input type="text" id="clt" name="clt" value={instrutor.clt} onChange={handleInputChange} placeholder="CLT" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="sexo" className="form-label">Sexo</label>
                <select id="sexo" name="sexo" value={instrutor.sexo} onChange={handleInputChange} className="form-control">
                  <option value="">Selecione</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                <input type="date" id="dataNascimento" name="dataNascimento" value={instrutor.dataNascimento} onChange={handleInputChange} className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="telefone" className="form-label">Telefone</label>
                <input type="text" id="telefone" name="telefone" value={instrutor.telefone} onChange={handleInputChange} placeholder="Telefone" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="contatoEmergencia" className="form-label">Contato de Emergência</label>
                <input type="text" id="contatoEmergencia" name="contatoEmergencia" value={instrutor.contatoEmergencia} onChange={handleInputChange} placeholder="Contato de Emergência" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" value={instrutor.email} onChange={handleInputChange} placeholder="Email" className="form-control" />
              </div>

              {/* Campos de Endereço */}
              <div className='col-12'>
                <label htmlFor="endereco" className="form-label mt-3 text-decoration-underline">Endereço</label>
              </div>
              <div className="col-md-6">
                <label htmlFor="rua" className="form-label">Rua</label>
                <input type="text" id="rua" name="endereco.rua" value={instrutor.endereco.rua} onChange={handleInputChange} placeholder="Rua" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="numero" className="form-label">Número</label>
                <input type="text" id="numero" name="endereco.numero" value={instrutor.endereco.numero} onChange={handleInputChange} placeholder="Número" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="complemento" className="form-label">Complemento</label>
                <input type="text" id="complemento" name="endereco.complemento" value={instrutor.endereco.complemento} onChange={handleInputChange} placeholder="Complemento" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="bairro" className="form-label">Bairro</label>
                <input type="text" id="bairro" name="endereco.bairro" value={instrutor.endereco.bairro} onChange={handleInputChange} placeholder="Bairro" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="cidade" className="form-label">Cidade</label>
                <input type="text" id="cidade" name="endereco.cidade" value={instrutor.endereco.cidade} onChange={handleInputChange} placeholder="Cidade" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="estado" className="form-label">Estado</label>
                <input type="text" id="estado" name="endereco.estado" value={instrutor.endereco.estado} onChange={handleInputChange} placeholder="Estado" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="cep" className="form-label">CEP</label>
                <input type="text" id="cep" name="endereco.cep" value={instrutor.endereco.cep} onChange={handleInputChange} placeholder="CEP" className="form-control" />
              </div>

              {/* Unidade */}
              <div className="col-md-12">
                <label htmlFor="unidade" className="form-label">Unidade</label>
                <select id="unidade" name="unidade" value={instrutor.unidade} onChange={handleInputChange} className="form-control">
                  {/* Adicionar opções de unidades já cadastradas */}
                  <option>Health Hub Company</option>
                </select>
              </div>


              {/* Botões de Ação */}
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

export default CadastroInstrutoresPage;

