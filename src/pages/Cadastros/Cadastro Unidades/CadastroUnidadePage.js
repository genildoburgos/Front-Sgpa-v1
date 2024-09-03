import React, { useState } from 'react';
import './CadastroUnidadePage.css';
import { useNavigate } from 'react-router-dom';

const CadastroUnidadePage = () => {

  const navigate = useNavigate();

  const [unidade, setUnidade] = useState({
    nome: '',
    cnpj: '',
    contato: '',
    email: '',
    segmento: '',
    local: { bloco: '', sala: '' },
    instrutores: [],
    planos: [],
    endereco: {
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: ''
    },
    horarios: {
      segunda: { abertura: '', fechamento: '' },
      terca: { abertura: '', fechamento: '' },
      quarta: { abertura: '', fechamento: '' },
      quinta: { abertura: '', fechamento: '' },
      sexta: { abertura: '', fechamento: '' },
      sabado: { abertura: '', fechamento: '' },
      domingo: { abertura: '', fechamento: '' }
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUnidade({ ...unidade, [name]: value });
  };

  const handleHorarioChange = (dia, tipo, value) => {
    setUnidade({
      ...unidade,
      horarios: {
        ...unidade.horarios,
        [dia]: { ...unidade.horarios[dia], [tipo]: value }
      }
    });
  };

  const handleLocalChange = (e) => {
    const { name, value } = e.target;
    setUnidade({
      ...unidade,
      local: { ...unidade.local, [name]: value }
    });
  };

  const handleEnderecoChange = (e) => {
    const { name, value } = e.target;
    setUnidade({
      ...unidade,
      endereco: { ...unidade.endereco, [name]: value }
    });
  };

  const handleCadastrar = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar os dados
    navigate('/unidades');
  };

  const handleCancelar = () => {
    navigate('/unidades');
  };

  return (
    <div className='container'>
      <div className="cadastro-page min-vh-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-10">
            <h2 className="text-center mb-4">Cadastro De Unidade</h2>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="nome" className="form-label">Nome da Unidade</label>
                <input 
                  type="text" 
                  id="nome" 
                  name="nome" 
                  value={unidade.nome} 
                  onChange={handleInputChange} 
                  placeholder="Nome da Unidade" 
                  className="form-control" 
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="cnpj" className="form-label">CNPJ</label>
                <input 
                  type="text" 
                  id="cnpj" 
                  name="cnpj" 
                  value={unidade.cnpj} 
                  onChange={handleInputChange} 
                  placeholder="CNPJ" 
                  className="form-control" 
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="contato" className="form-label">Contato</label>
                <input 
                  type="text" 
                  id="contato" 
                  name="contato" 
                  value={unidade.contato} 
                  onChange={handleInputChange} 
                  placeholder="Contato" 
                  className="form-control" 
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={unidade.email} 
                  onChange={handleInputChange} 
                  placeholder="Email" 
                  className="form-control" 
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="segmento" className="form-label">Segmento</label>
                <select 
                  id="segmento" 
                  name="segmento" 
                  value={unidade.segmento} 
                  onChange={handleInputChange} 
                  className="form-control"
                >
                  <option value="">Selecione</option>
                  <option value="Musculacao">Musculação</option>
                  <option value="StudioMusculacaoPersonal">Studio Musculação Personal</option>
                  <option value="CentroTreinamentoFuncional">Centro Treinamento Funcional</option>
                  <option value="EscolaLuta">Escola de Luta</option>
                  <option value="EscolaDanca">Escola de Dança</option>
                  <option value="EscolaNatacao">Escola de Natação</option>
                  <option value="EscolaGinastica">Escola de Ginástica</option>
                  <option value="StudioPilates">Studio de Pilates</option>
                  <option value="StudioYoga">Studio de Yoga</option>
                  <option value="BoxCrossFit">Box de CrossFit</option>
                  <option value="BoxCrossTraining">Box de CrossTraining</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div className="col-md-6">
                <label htmlFor="localBloco" className="form-label">Bloco</label>
                <input 
                  type="text" 
                  id="localBloco" 
                  name="bloco" 
                  value={unidade.local.bloco} 
                  onChange={handleLocalChange} 
                  placeholder="Bloco" 
                  className="form-control" 
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="localSala" className="form-label">Sala</label>
                <input 
                  type="text" 
                  id="localSala" 
                  name="sala" 
                  value={unidade.local.sala} 
                  onChange={handleLocalChange} 
                  placeholder="Sala" 
                  className="form-control" 
                />
              </div>

              {/* Interface de Horários */}
              <div className="col-12">
                <label className="form-label">Horário de Funcionamento</label>
                <div className="schedules-container">
                  {['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'].map((dia, index) => (
                    <div key={index} className="schedule-item">
                      <label>{dia.charAt(0).toUpperCase() + dia.slice(1)}</label>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Abre</label>
                          <input
                            type="time"
                            value={unidade.horarios[dia].abertura}
                            onChange={(e) => handleHorarioChange(dia, 'abertura', e.target.value)}
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6">
                          <label>Fecha</label>
                          <input
                            type="time"
                            value={unidade.horarios[dia].fechamento}
                            onChange={(e) => handleHorarioChange(dia, 'fechamento', e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Planos e Instrutores */}
              <div className="col-md-6">
                <label htmlFor="planos" className="form-label">Planos</label>
                <select 
                  id="planos" 
                  name="planos" 
                  value={unidade.planos} 
                  onChange={handleInputChange} 
                  className="form-control" 
                >
                  {/* Adicionar opções de planos já cadastrados */}
                  <option value="Plano1">Plano 1</option>
                </select>
              </div>

              <div className="col-md-6">
                <label htmlFor="instrutores" className="form-label">Instrutores</label>
                <select 
                  id="instrutores" 
                  name="instrutores" 
                  value={unidade.instrutores} 
                  onChange={handleInputChange} 
                  className="form-control" 
                >
                  {/* Adicionar opções de instrutores já cadastrados */}
                  <option value="Instrutor1">Instrutor 1</option>
                </select>
              </div>

              {/* Endereço */}
              <div className="col-12">
                <h5>Endereço</h5>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="rua" className="form-label">Rua</label>
                    <input 
                      type="text" 
                      id="rua" 
                      name="rua" 
                      value={unidade.endereco.rua} 
                      onChange={handleEnderecoChange} 
                      placeholder="Rua" 
                      className="form-control" 
                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="numero" className="form-label">Número</label>
                    <input 
                      type="text" 
                      id="numero" 
                      name="numero" 
                      value={unidade.endereco.numero} 
                      onChange={handleEnderecoChange} 
                      placeholder="Número" 
                      className="form-control" 
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="complemento" className="form-label">Complemento</label>
                    <input 
                      type="text" 
                      id="complemento" 
                      name="complemento" 
                      value={unidade.endereco.complemento} 
                      onChange={handleEnderecoChange} 
                      placeholder="Complemento" 
                      className="form-control" 
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="bairro" className="form-label">Bairro</label>
                    <input 
                      type="text" 
                      id="bairro" 
                      name="bairro" 
                      value={unidade.endereco.bairro} 
                      onChange={handleEnderecoChange} 
                      placeholder="Bairro" 
                      className="form-control" 
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="cidade" className="form-label">Cidade</label>
                    <input 
                      type="text" 
                      id="cidade" 
                      name="cidade" 
                      value={unidade.endereco.cidade} 
                      onChange={handleEnderecoChange} 
                      placeholder="Cidade" 
                      className="form-control" 
                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="estado" className="form-label">Estado</label>
                    <input 
                      type="text" 
                      id="estado" 
                      name="estado" 
                      value={unidade.endereco.estado} 
                      onChange={handleEnderecoChange} 
                      placeholder="Estado" 
                      className="form-control" 
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="cep" className="form-label">CEP</label>
                    <input 
                      type="text" 
                      id="cep" 
                      name="cep" 
                      value={unidade.endereco.cep} 
                      onChange={handleEnderecoChange} 
                      placeholder="CEP" 
                      className="form-control" 
                    />
                  </div>
                </div>
              </div>

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

export default CadastroUnidadePage;
