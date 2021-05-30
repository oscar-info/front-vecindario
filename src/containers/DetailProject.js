import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import useAPI from "services/APIServices";
import { useParams, Link } from "react-router-dom";
import "../assets/styles/components/DetailProject.scss";
import ProjectCard from "../components/ProjectCard";

const DetailProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const { getProject } = useAPI();
  


  useEffect(() => {
    getProject(id)
      .then(({ data }) => {
        setProject(data);
      })
      .catch(() => {
        //TODO handle errrors here
      });
  }, [id, getProject]);

  return (
    <>
      <Header />
      {project && (
        <div className="container__detail--project">
          <div className="container__projects">
            <ProjectCard data={project} />
          </div>
          <Link to={`/cms/leads/${project.id}`}>
            <button className="btn__leads">Leads</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default DetailProject;
