import React from "react";
import "../assets/styles/components/Cms.scss";
import Header from "../components/Header";
import { useRecoilValue } from "recoil";
import { currentUserState } from "../atoms/atoms";
import LoadingSpinner from "components/LoadingSpinner";

function Cms() {

  const currentUser = useRecoilValue(currentUserState);

  return (
    <div className="cms">
      <Header />
      <LoadingSpinner/>
      <div className="container__cms">
        {currentUser && (
          <p>
            Bienvenido 
            <span>
               {currentUser.name} {currentUser.last_name} 
            </span>
             selecciona una acción en el menu de opciones
          </p>
        )}
      </div>
    </div>
  );
}

export default Cms;
