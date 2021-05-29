import React from "react";
import "../assets/styles/components/ProjectCard.scss";
import imgArea from "../assets/images/icon_area.svg";
import imgParking from "../assets/images/icon_car.svg";
import imgRestroom from "../assets/images/icon_toilet.svg";
import imgProject from "../assets/images/img_project.png";
import { Link } from "react-router-dom";

const CardProject = ({data}) => {

    return (
        <div className="container__card--project">
            <div className="card__project--header">
                <h2 className="name_project" id={data.id}>{data.name_project}</h2>
                <h3 className="type_project">{data.type_project}</h3>
                <div className="header--ubication">
                    <p className="city">{data.city}: </p>
                    <p className="address">   {data.address}</p>
                </div>
                <div>
                    <img src={imgProject} alt="project"/>
                </div>
            </div>
            <div className="card__project--body">
                <h2>Precio final desde:</h2>
                <p className="price">{data.price} millones*</p>
                <div className="body--aminities">
                    <div className="body--aminities-area">
                        <img src={imgArea} alt="" />
                        <p className="area">{data.area}mt<sup>2</sup></p>
                    </div>
                    <div className="body--aminities-parking">
                        <img src={imgParking} alt="" />
                        <p className="parking">{data.parking === false ? "No incluido" : "incluido"}</p>
                    </div>
                    <div className="body--aminities-restroom">
                        <img src={imgRestroom} alt="" />
                        <p className="restroom">{data.restroom} baños</p>
                    </div>
                </div>
                <p className="subsidy">{data.subsidy === false ? "No aplica subsidio" : "Aplica subsidio"}</p>
                <Link to={`/leads/${data.id}`} className="btn__lead">Estoy interesado</Link>
            </div>
        </div>
    );
}

export default CardProject;