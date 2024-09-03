import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import LoginPage from './pages/Login/LoginPage';
import UnidadesPage from './pages/Unidades/UnidadesPage';
import InstrutoresPage from './pages/Intrutores/InstrutoresPage';
import TurmasPage from './pages/Turmas/TurmasPage';
import PlanosPage from './pages/Planos/PlanosPage';
import MembrosPage from './pages/Membros/MembrosPage';
import CadastroPage from './pages/CadastroDeConta/CadastroPage';
import EsqueciSenhaPage from './pages/EsquecerSenha/EsqueciSenhaPage';
import CadastroMembroPage from './pages/Cadastros/Cadastro Membros/CadastroMembroPage';
import CadastroUnidadePage from './pages/PaginasDeCadastro/Cadastro Unidades/CadastroUnidadePage';
import CadastroInstrutoresPage from './pages/PaginasDeCadastro/Cadastro Instrutores/CadastroInstrutoresPage';
import CadastroPlanosPage from './pages/PaginasDeCadastro/Cadastro Planos/CadastroPlanosPage';
import CadastroTurmasPage from './pages/PaginasDeCadastro/Cadastro Turmas/CadastroTurmasPage';
import GerenciarVagasPage from './pages/GerenciamentoDeVagas/GerenciarVagasPage';
import CadastrarVagaPage from './pages/GerenciamentoDeVagas/cadastrarVaga/CadastrarVagaPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/unidades" element={<UnidadesPage />} />
        <Route path="/unidades/cadastrar" element={<CadastroUnidadePage />} />
        <Route path="/instrutores" element={<InstrutoresPage />} />
        <Route path="/instrutores/cadastrar" element={<CadastroInstrutoresPage />} />
        <Route path="/turmas" element={<TurmasPage />} />
        <Route path="/turmas/cadastrar" element={<CadastroTurmasPage />} />
        <Route path="/planos" element={<PlanosPage />} />
        <Route path="/planos/cadastrar" element={<CadastroPlanosPage />} />
        <Route path="/membros" element={<MembrosPage />} />
        <Route path="/membros/cadastrar" element={<CadastroMembroPage />} />
        <Route path="/criarConta" element={<CadastroPage />} />
        <Route path="/esqueciSenha" element={<EsqueciSenhaPage />} />
        <Route path="/turmas/gerenciar-vagas" element={<GerenciarVagasPage />} /> {/* Rota para gerenciar vagas */}
        <Route path="/vagas/cadastrar" element={<CadastrarVagaPage />} /> {/* Rota para cadastrar vagas */}
      </Routes>
    </Router>
  );
}

export default App;
