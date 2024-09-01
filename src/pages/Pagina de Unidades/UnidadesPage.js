import React from 'react';
import './UnidadesPage.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MiniHeader from '../../components/MiniHeader/MiniHeader';

const UnidadesPage = ()=> {
    return (
        <>
            <Header />
            <div className='container'>
                <MiniHeader 
                    cadastrarText="+ Cadastrar Unidade" 
                    cadastrarRoute="/unidades/cadastrar"
                    placeHolderPesquisar="Pesquisar Unidade..."
                />
                <div className='UnidadesPage-container' >
                <h1>Bem vindo a pagina de gerenciamento de <b>Unidades</b></h1>
                <p>Lista de <b>Unidades</b></p>
            </div>
            </div>   
            <Footer />
        </>
    )
}

export default UnidadesPage; 