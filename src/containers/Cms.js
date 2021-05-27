import React from 'react'
import "../assets/styles/components/Cms.scss"
import Header from "../components/Header"
import CmsLeads from "../components/CmsLeads"

function Cms(){
    return (
        <div className="cms">
            <Header/>
            <div className="container__cms">
                {/* <CMSWelcome /> */}
                <CmsLeads />
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