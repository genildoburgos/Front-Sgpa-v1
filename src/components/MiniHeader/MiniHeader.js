import React from 'react';
import './MiniHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MiniHeader = ({ cadastrarText, cadastrarRoute, onSearch, placeHolderPesquisar, gerenciarVagasRoute, showGerenciarVagas }) => {
  return (
    <div className="mini-header">
      <div className="mini-header-button">
        <a href={cadastrarRoute} className='text-link'>{cadastrarText}</a>
        {showGerenciarVagas && ( 
          <a href={gerenciarVagasRoute} className='text-link'>+ Gerenciar Vagas</a>
        )}
        <div className="search-container">
          <input 
            type="text" 
            placeholder={placeHolderPesquisar} 
            className="mini-header-search" 
            onChange={onSearch} 
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default MiniHeader;
