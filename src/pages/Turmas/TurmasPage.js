import React from 'react';
import './TurmasPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MiniHeader from '../../components/MiniHeader/MiniHeader';

const TurmasPage = () => {
    return (
        <>
        <Header />
        <div className='container'>
            <MiniHeader 
                cadastrarText="+ Cadastrar Turma" 
                cadastrarRoute="/turmas/cadastrar"
                placeHolderPesquisar="Pesquisar Turma..."
                gerenciarVagasRoute="/turmas/gerenciar-vagas"
                showGerenciarVagas={true} // Passa true apenas aqui
            />
            <div className='TurmasPage-container'>
                <h1>Bem vindo à página de gerenciamento de <b>Turmas</b></h1>
                <p>Lista de <b>Turmas</b></p>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default TurmasPage;
