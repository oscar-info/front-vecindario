import axios from 'axios';
import React from 'react';
import "../assets/styles/components/Cms.scss";
import Header from "../components/Header";
import { useRecoilValue } from "recoil";
import { currentUserState } from "../atoms/atoms";


function Cms(){

    const currentUser = useRecoilValue(currentUserState);
    console.log("current user " + currentUser.name + " " + currentUser.last_name)
    console.log("local   " + localStorage.getItem('auth_token'))

    const showUserProjects = () => {
        // requiere token de autorizacion
        let headers = {
            headers: { 'Authorization': localStorage.getItem('auth_token') }
        };
        axios.get("http://localhost:3000/projects_by_user_id/", currentUser.id, headers)
    };

    return (
        <div className="cms">
            <Header/>
            <div className="container__cms">
                <CMSWelcome data={currentUser}/>
            </div>
        </div>
    )
}

const CMSWelcome = ({data}) => {
    return (
        <p>Bienvenido <span>{data.name}  {data.last_name}</span> selecciona una acción en el menu de opciones</p>
    )
};

export default Cms;