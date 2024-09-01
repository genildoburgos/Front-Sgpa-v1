import React from "react";
import './Header.css'
import NavBar from "../NavBar/Navbar";

const Header = () => {
    return(
        <header className='header'>
            <div className="header-name">
                <h1>Health Hub Company</h1>
            </div>
            <NavBar />
        </header>
    )
}

export default Header;


