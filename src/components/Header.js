import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/images/vecindario-logo.svg";
import menu from "../assets/images/menu.svg";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentUserState, projectsListState } from "../atoms/atoms";

const Header = ({ openModal }) => {
  return (
    <header>
      <div className="logo__header">
        <img src={logo} alt="Logo Vecindario" />
      </div>
      <div className="nav__container">
        <Menu openModal={openModal} />
      </div>
    </header>
  );
};

function Menu({ openModal }) {
  const currentUser = useRecoilValue(currentUserState);

  return (
    <div className="dropdown">
      <label htmlFor="prueba" className="menu__button">
        <img src={menu} alt="Hamburger menu" />
      </label>
      <input type="checkbox" id="prueba"></input>
      <div className="dropdown-content">
        {currentUser && <DropDownCms />}
        {!currentUser && <DropDownHome />}
      </div>
    </div>
  );
}

const DropDownCms = () => {
  const projects = useRecoilValue(projectsListState);

  return (
    <>
      <Link to="/cms/create_project" className="dropdown-content__title">
        + Crear nuevo proyecto
      </Link>
      <input
        type="search"
        id="site-search"
        placeholder="Buscar"
        name="searchBar"
        aria-label="Search in my projects"
        autoFocus
      />
      <h3>Proyectos Activos</h3>
      <hr />
      <div className="listProyects">
        {projects.map((project) => (
          <Link to={`/detail_project/${project.id}`}>{project.name_project}</Link>
        ))}
      </div>
    </>
  );
};

const DropDownHome = () => {
  return (
    <>
      <h4 className="dropdown-content__title">Zona Administradores</h4>
      <hr />
      <Link to="/auth/login" className="menu-item">
        Ingresar
      </Link>
      <br />
      <Link to="/registrarse" className="menu-item">
        Registrarse
      </Link>
      <br />
    </>
  );
};

export default Header;
