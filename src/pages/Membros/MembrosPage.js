import React from 'react';
import './MembrosPage.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MiniHeader from '../../components/MiniHeader/MiniHeader';

const MembrosPage = ()=> {
    return (
        <>
            <Header />
            <div className='container'>
                <MiniHeader 
                    cadastrarText="+ Cadastrar Membro" 
                    cadastrarRoute="/membros/cadastrar"
                    placeHolderPesquisar="Pesquisar Membro..."
                />
                <div className='MembrosPage-container' >
                <h1>Bem vindo a pagina de gerenciamento de <b>Membros</b></h1>
                <p>Lista de <b>Membros</b></p>
                </div>
                </div>
            <Footer />
        </>
    )
}

export default MembrosPage; 