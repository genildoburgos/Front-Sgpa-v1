import React, { useState } from 'react';
import './CadastroTurmasPage.css';
import { useNavigate } from 'react-router-dom';

const CadastroTurmasPage = () => {

  const navigate = useNavigate();

  const [schedules, setSchedules] = useState({
    segunda: '',
    terca: '',
    quarta: '',
    quinta: '',
    sexta: '',
    sabado: '',
    domingo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSchedules({ ...schedules, [name]: value });
  };

  const handleCadastrar = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar os dados
    navigate('/turmas');
  };

  const handleCancelar = () => {
    navigate('/turmas');
  };

  return (
    <div className='container'>
      <div className="cadastro-page min-vh-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-10">
          <h2 className="text-center mb-4">Cadastro De Turmas</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="local" className="form-label">Local</label>
              <input type="text" id="local" placeholder="Local" className="form-control" />
            </div>
            <div className="col-md-6">
              <label htmlFor="modalidade" className="form-label">Modalidade</label>
              <select id="modalidade" className="form-control">
                <option>Musculação</option>
                <option>Funcional</option>
                <option>Muaythai</option>
                <option>Pilates</option>
                <option>Zumba</option>
                <option>CrossFit</option>
                <option>Boxe</option>
                <option>Taekwondo</option>
                <option>Capoeira</option>
                <option>JiuJitsu</option>
                <option>Balé</option>
                <option>Yoga</option>
                <option>Natação</option>
                <option>+ Outros</option>
              </select>
            </div>
            
            {/* Interface de Horários */}
            <div className="col-12">
              <label className="form-label">Horário</label>
              <div className="schedules-container">
                {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((dia, index) => (
                  <div key={index} className="schedule-item">
                    <label>{dia}</label>
                    <input
                      type="time"
                      name={dia.toLowerCase()}
                      value={schedules[dia.toLowerCase()]}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="vaga" className="form-label">Vaga</label>
              <input type="number" id="vaga" placeholder="Vaga" className="form-control" />
            </div>
            <div className="col-md-6">
              <label htmlFor="instrutor" className="form-label">Instrutor</label>
              <select id="instrutor" className="form-control">
                {/* Adicionar opções de instrutores já cadastrados */}
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="membro" className="form-label">Membro</label>
              <select id="membro" className="form-control">
                {/* Adicionar opções de membros já cadastrados */}
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="unidade" className="form-label">Unidade</label>
              <select id="unidade" className="form-control">
                {/* Adicionar opções de unidades já cadastradas */}
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

export default CadastroTurmasPage;
