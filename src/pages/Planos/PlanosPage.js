import React from 'react';
import './PlanosPage.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MiniHeader from '../../components/MiniHeader/MiniHeader';

const PlanosPage = ()=> {
    return (
        <>
            <Header />
            <div className='container'>
                <MiniHeader 
                    cadastrarText="+ Cadastrar Plano" 
                    cadastrarRoute="/planos/cadastrar"
                    placeHolderPesquisar="Pesquisar Plano..."
                />
                 <div className='PlanosPage-container' >
                <h1>Bem vindo a pagina de gerenciamento de <b>Planos</b></h1>
                <p>Lista de <b>Planos</b></p>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default PlanosPage; 