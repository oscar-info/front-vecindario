import React, { useEffect, useState } from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/images/vecindario-logo.svg";
import menu from "../assets/images/menu.svg";
import { Link, useHistory } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { currentUserState, projectsListState } from "../atoms/atoms";
import useAuth from "../hooks/useAuth";


const Header = ({ openModal }) => {
  return (
    <header>
      <Link to='/home' className="logo__header">
        <img src={logo} alt="Logo Vecindario" />
      </Link>
      <div className="nav__container">
        <Menu openModal={openModal} />
      </div>
    </header>
  );
};

function Menu({ openModal }) {
  const [currentUser] = useRecoilState(currentUserState);

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
  const setCurrentUser = useSetRecoilState(currentUserState);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const { deleteSession } = useAuth();
  const history = useHistory();

  useEffect(() => {
    setFilteredProjects(projects);
  }, [projects]);

  const logOut = () => {
    console.log("eliminando");
    deleteSession();
    setCurrentUser(null);
    history.push("/");
  };

  const filterProjects = (query) => {
 
    if (query === " ") setFilteredProjects(projects);

    let filtered = projects.filter((project) => {
      return project.name_project.toLowerCase().startsWith(query.toLowerCase());
    });
    setFilteredProjects(filtered);
  };

  return (
    <>
      <Link to="/cms/create_project" className="dropdown-content__title">
        + Crear nuevo proyecto
      </Link>
      <input
        type="search"
        id="site-search"
        placeholder="Buscar"
        onChange={(e) => {
          filterProjects(e.target.value);
        }}
        name="searchBar"
        aria-label="Search in my projects"
        autoFocus
      />
      <h3>Proyectos Activos</h3>
      <hr />
      <div className="listProyects">
        {projects.length === 0 && "No tiene projectos"}
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <Link to={`/cms/detail_project/${project.id}`} >
              {project.name_project}
            </Link>
            <br />
          </div>
        ))}
      </div>
      <hr />
      <h4 onClick={logOut}>Cerrar sesion</h4>
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
