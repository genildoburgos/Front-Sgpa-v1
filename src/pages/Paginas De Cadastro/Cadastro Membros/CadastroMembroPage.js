import React, { useState } from 'react';
import './CadastroMembroPage.css';
import { useNavigate } from 'react-router-dom';

const CadastroMembroPage = () => {
  const navigate = useNavigate();

  const [membro, setMembro] = useState({
    nome: '',
    cpf: '',
    sexo: '',
    dataNascimento: '',
    telefone: '',
    contatoEmergencia: '',
    email: '',
    responsavel: {
      nome: '',
      grauParentesco: '',
      telefone: '',
    },
    endereco: {
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: ''
    },
    statusPagamento: 'nao efetuado',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('responsavel')) {
      const responsavelName = name.split('.')[1];
      setMembro({
        ...membro,
        responsavel: { ...membro.responsavel, [responsavelName]: value },
      });
    } else if (name.includes('endereco')) {
      const enderecoName = name.split('.')[1];
      setMembro({
        ...membro,
        endereco: { ...membro.endereco, [enderecoName]: value },
      });
    } else {
      setMembro({ ...membro, [name]: value });
    }
  };

  const handleResponsavelChange = (e) => {
    const { name, value } = e.target;
    setMembro({ 
      ...membro, 
      responsavel: { 
        ...membro.responsavel, 
        [name]: value 
      } 
    });
  };

  const togglePrecisaResponsavel = () => {
    setMembro({ 
      ...membro, 
      precisaResponsavel: !membro.precisaResponsavel 
    });
  };

  const handleCadastrar = (e) => {
    e.preventDefault();
    // Lógica para salvar os dados
    navigate('/membros');
  };

  const handleCancelar = () => {
    navigate('/membros');
  };

  return (
    <div className='container'>
      <div className="cadastro-page min-vh-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-10">
            <h2 className="text-center mb-4">Cadastro De Membros</h2>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" id="nome" name="nome" value={membro.nome} onChange={handleInputChange} placeholder="Nome" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="cpf" className="form-label">CPF</label>
                <input type="text" id="cpf" name="cpf" value={membro.cpf} onChange={handleInputChange} placeholder="CPF" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="sexo" className="form-label">Sexo</label>
                <select id="sexo" name="sexo" value={membro.sexo} onChange={handleInputChange} className="form-control">
                  <option value="">Selecione</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                <input type="date" id="dataNascimento" name="dataNascimento" value={membro.dataNascimento} onChange={handleInputChange} className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="telefone" className="form-label">Telefone</label>
                <input type="text" id="telefone" name="telefone" value={membro.telefone} onChange={handleInputChange} placeholder="Telefone" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="contatoEmergencia" className="form-label">Contato de Emergência</label>
                <input type="text" id="contatoEmergencia" name="contatoEmergencia" value={membro.contatoEmergencia} onChange={handleInputChange} placeholder="Contato de Emergência" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" value={membro.email} onChange={handleInputChange} placeholder="Email" className="form-control" />
              </div>
              <div className="col-md-6">
              <label htmlFor="statusPagamento" className="form-label">Status de Pagamento</label>
              <select id="statusPagamento" name="statusPagamento" className="form-control" onChange={handleInputChange}>
                <option value="efetuado">Efetuado</option>
                <option value="não efetuado">Não Efetuado</option>
                <option value="inadimplente">Inadimplente</option>
              </select>
              </div>

              {/* Campos de Endereço */}

              <div className='col-12'>
              <label htmlFor="endereco" className="form-label mt-3 text-decoration-underline">Endereço</label>
              </div>

              <div className="col-md-6">
                <label htmlFor="rua" className="form-label">Rua</label>
                <input type="text" id="rua" name="endereco.rua" value={membro.endereco.rua} onChange={handleInputChange} placeholder="Rua" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="numero" className="form-label">Número</label>
                <input type="text" id="numero" name="endereco.numero" value={membro.endereco.numero} onChange={handleInputChange} placeholder="Número" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="complemento" className="form-label">Complemento</label>
                <input type="text" id="complemento" name="endereco.complemento" value={membro.endereco.complemento} onChange={handleInputChange} placeholder="Complemento" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="bairro" className="form-label">Bairro</label>
                <input type="text" id="bairro" name="endereco.bairro" value={membro.endereco.bairro} onChange={handleInputChange} placeholder="Bairro" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="cidade" className="form-label">Cidade</label>
                <input type="text" id="cidade" name="endereco.cidade" value={membro.endereco.cidade} onChange={handleInputChange} placeholder="Cidade" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="estado" className="form-label">Estado</label>
                <input type="text" id="estado" name="endereco.estado" value={membro.endereco.estado} onChange={handleInputChange} placeholder="Estado" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="cep" className="form-label">CEP</label>
                <input type="text" id="cep" name="endereco.cep" value={membro.endereco.cep} onChange={handleInputChange} placeholder="CEP" className="form-control" />
              </div>


              
              {/* Lógica para Responsável */}
              <div className="col-12">
                <label htmlFor="precisaResponsavel" className="form-label mt-3 text-decoration-underline">Precisa de Responsável?</label>
                <div>
                  <input type="checkbox" id="precisaResponsavel" checked={membro.precisaResponsavel} onChange={togglePrecisaResponsavel} />
                  <label htmlFor="precisaResponsavel" className="ms-2">Sim</label>
                </div>
              </div>

              {membro.precisaResponsavel && (
                <div className="responsavel-form col-12 mt-4">
                  <div className='row'>
                     <div className="col-md-4">
                    <label htmlFor="grauParentesco" className="form-label">Grau de Parentesco</label>
                    <input type="text" id="grauParentesco" name="grauParentesco" value={membro.responsavel.grauParentesco} onChange={handleResponsavelChange} placeholder="Grau de Parentesco" className="form-control" />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="nomeResponsavel" className="form-label">Nome do Responsável</label>
                    <input type="text" id="nomeResponsavel" name="nome" value={membro.responsavel.nome} onChange={handleResponsavelChange} placeholder="Nome do Responsável" className="form-control" />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="telefoneResponsavel" className="form-label">Telefone do Responsável</label>
                    <input type="text" id="telefoneResponsavel" name="telefone" value={membro.responsavel.telefone} onChange={handleResponsavelChange} placeholder="Telefone do Responsável" className="form-control" />
                  </div>
                  </div>
                </div>
              )}
              
              <div className="col-12 text-center mt-4 mb-5 btns">
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

export default CadastroMembroPage;
