import React from 'react';
import './Footer.css';

const Footer = ()=>{
    return (
        <footer className='footer'>
            <p>&copy; {new Date().getFullYear()} Sistema de gerenciamento para academias. Todos os direitos reservados. </p>
        </footer>
    )
}

export default Footer;