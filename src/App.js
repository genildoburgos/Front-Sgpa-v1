import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import LoginPage from './pages/Pagina de Login/LoginPage';
import UnidadesPage from './pages/Pagina de Unidades/UnidadesPage';
import InstrutoresPage from './pages/Paginda de Intrutores/InstrutoresPage';
import TurmasPage from './pages/Pagina de Turmas/TurmasPage';
import PlanosPage from './pages/Pagina de Planos/PlanosPage';
import MembrosPage from './pages/Pagina de Membros/MembrosPage';
import CadastroPage from './pages/Pagina de cadastro de conta/CadastroPage';
import EsqueciSenhaPage from './pages/Pagina de Esquecer Senha/EsqueciSenhaPage';
import CadastroMembroPage from './pages/Paginas De Cadastro/Cadastro Membros/CadastroMembroPage';
import CadastroUnidadePage from './pages/Paginas De Cadastro/Cadastro Unidades/CadastroUnidadePage';
import CadastroInstrutoresPage from './pages/Paginas De Cadastro/Cadastro Instrutores/CadastroInstrutoresPage';
import CadastroPlanosPage from './pages/Paginas De Cadastro/Cadastro Planos/CadastroPlanosPage';
import CadastroTurmasPage from './pages/Paginas De Cadastro/Cadastro Turmas/CadastroTurmasPage';
import GerenciarVagasPage from './pages/Gerenciamento de vagas/GerenciarVagasPage';
import CadastrarVagaPage from './pages/Gerenciamento de vagas/cadastrar vaga/CadastrarVagaPage';

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
