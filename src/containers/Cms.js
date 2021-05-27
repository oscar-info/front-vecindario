import React from 'react'
import "../assets/styles/components/Cms.scss"
import Header from "../components/Header"


function Cms(){
    return (
        <div className="cms">
            <Header/>
            <div className="container__cms">
                <CMSWelcome />
            </div>
        </div>
    )
}

const CMSWelcome = () => {
    return (
        <p>Bienvenido <span>Oscar Eduardo</span> selecciona una acción en el menu de opciones</p>
    )
};

export default Cms;