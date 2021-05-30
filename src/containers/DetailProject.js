import React from "react";
import Header from "../components/Header";
import { Link, useHistory } from "react-router-dom";
import "../assets/styles/components/DetailProject.scss";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

const DetailProject = () => {

  const history = useHistory();
  const goLeads = () => {
    history.push('/cms/leads')
  }

  return (
    <>
      <Header />
      <div className="container__detail--project">
        <div className="container__projects">
          <ProjectCard data />
        </div>
        <button className="btn__leads" onClick={goLeads}>Leads</button>
      </div>
    </>
  );
};

export default DetailProject;
