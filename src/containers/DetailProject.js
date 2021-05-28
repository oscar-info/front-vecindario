import React from 'react'
import Header from '../components/Header';
import { Link } from "react-router-dom";
import '../assets/styles/components/DetailProject.scss'
// import CardProject from '../components/ProjectCard';

const DetailProject = () => {
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