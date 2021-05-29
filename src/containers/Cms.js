import React from "react";
import "../assets/styles/components/Cms.scss";
import Header from "../components/Header";
import { useRecoilValue } from "recoil";
import { currentUserState } from "../atoms/atoms";

function Cms() {
    
  const currentUser = useRecoilValue(currentUserState);

  return (
    <div className="cms">
      <Header />
      <div className="container__cms">
        <p>
          Bienvenido
          <span>
            {currentUser.name} {currentUser.last_name}
          </span>
          selecciona una acción en el menu de opciones
        </p>
      </div>
    </div>
  );
}

export default Cms;
