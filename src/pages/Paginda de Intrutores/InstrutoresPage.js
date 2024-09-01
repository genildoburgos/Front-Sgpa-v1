import React from 'react';
import './InstrutoresPage.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MiniHeader from '../../components/MiniHeader/MiniHeader';

const InstrutoresPage = ()=> {
    return (
        <>
        <Header />
        <div className='container'>
        <MiniHeader 
                    cadastrarText="+ Cadastrar Instrutor" 
                    cadastrarRoute="/instrutores/cadastrar"
                    placeHolderPesquisar="Pesquisar Instrutor..."
                />
        </div>
         <div className='InstrutoresPage-container' >
            <h1>Bem vindo a pagina de gerenciamento de <b>Instutore</b></h1>
            <p>Lista de <b>Instutore</b></p>
        </div>
        <Footer />
    </>
       
    )
}

export default InstrutoresPage; 