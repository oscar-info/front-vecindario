import React from 'react';
import Header from '../components/Header';
import { Link } from "react-router-dom";
import '../assets/styles/components/DetailProject.scss';
import axios from 'axios';
// import CardProject from '../components/ProjectCard';

const DetailProject = () => {

    const updateProject = () => {
        // requiere token de autorizacion
        axios.put("http://localhost:3000/projects/6")
    };


    return (
        <>
            <Header/>
            {/* <CardProject/> */}
            <Link to='/cms/leads'>
                <button className="btn__leads">Leads</button>
            </Link>
        </>
    )
};

export default DetailProject