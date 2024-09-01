import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faCircleUser, faFontAwesome, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

const NavBar = ()=>{
    return (
        <nav className='navBar'>
            <div className='div'>
                <ul className='lista'>
                    <li>
                        <NavLink to="/unidades" className={({ isActive }) => isActive ? "active-link" : ""}>
                        <FontAwesomeIcon icon={faHome} className="navbar-icon" />Unidades
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/turmas" className={({ isActive }) => isActive ? "active-link" : ""}>
                        <FontAwesomeIcon icon={faFontAwesome} className="navbar-icon" />Turmas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/instrutores" className={({ isActive }) => isActive ? "active-link" : ""}>
                        <FontAwesomeIcon icon={faEnvelope} className="navbar-icon" />Instrutores
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/membros" className={({ isActive }) => isActive ? "active-link" : ""}>
                        <FontAwesomeIcon icon={faCircleUser} className="navbar-icon" />Membros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/planos" className={({ isActive }) => isActive ? "active-link" : ""}>
                        <FontAwesomeIcon icon={faCreditCard} className="navbar-icon" />Planos
                        </NavLink>
                    </li>
                </ul> 
            </div>
        </nav>
    )
}

export default NavBar;