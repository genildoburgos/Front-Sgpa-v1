import React, { useState } from 'react';
import VagaItem from '../../components/Itens/Vaga/VagaItem';
import { useNavigate } from 'react-router-dom';
import './GerenciarVagasPage.css';

const GerenciarVagasPage = () => {
  const [vagas, setVagas] = useState([
    { capacidade: 30, quantidade: 10 },
    { capacidade: 20, quantidade: 5 },
    // Mais vagas podem ser adicionadas aqui
  ]);

  const navigate = useNavigate();

  // Função para criar uma nova vaga
  const handleCriarVaga = () => {
    const novaVaga = { capacidade: 0, quantidade: 0 }; // Pode-se ajustar os valores padrão
    setVagas([...vagas, novaVaga]);
    navigate('/vagas/cadastrar');
  };

  // Função para remover uma vaga
  const handleRemoverVaga = (index) => {
    const novasVagas = vagas.filter((_, vagaIndex) => vagaIndex !== index);
    setVagas(novasVagas);
  };

  const handleCancelar = () => {
    navigate('/turmas');
  };

  return (
    <div className='container'>
      <div className="gerenciar-vagas-page">
        <h2>Gerenciar Vagas</h2>
        <div className="vaga-lista">
          {vagas.map((vaga, index) => (
            <VagaItem 
              key={index}
              capacidade={vaga.capacidade}
              quantidade={vaga.quantidade}
              onRemover={() => handleRemoverVaga(index)} // Passando a função de remover para o VagaItem
            />
          ))}
        </div>
        <button className="btn-criar-vaga" onClick={handleCriarVaga}>
          + Criar Nova Vaga
        </button>
        <button className="btn-voltar" onClick={handleCancelar}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default GerenciarVagasPage;
