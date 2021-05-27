import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/images/vecindario-logo.svg";
import menu from "../assets/images/menu.svg"
import { Link } from "react-router-dom";


const Header = ({openModal}) => {
    return(
        <header>
            <div className="logo__header">
                <img src={logo} alt="Logo Vecindario"/>
            </div>
            <div className="nav__container">
                <Menu openModal={openModal}/>
            </div>
        </header>
    );
}

function Menu({openModal}) {
    return (
        <div className="dropdown">
            <label htmlFor="prueba" className="menu__button">
                <img src={menu} alt="Hamburger menu" />
            </label>
            <input type="checkbox" id="prueba"></input>
            <div className="dropdown-content">
                <h4 className="dropdown-content__title">Zona Administradores</h4>
                <hr/>
                <Link to="/ingresar" className="menu-item">Ingresar</Link>
                <br />
                <Link to="/registrarse" className="menu-item">Registrarse</Link>
                <br />
            </div>
    </div>
    );
}

export default Header;