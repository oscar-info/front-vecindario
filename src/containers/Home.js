import React, { useState, useEffect } from "react";
import { Route, useHistory, useParams } from 'react-router-dom'
import "../assets/styles/components/Home.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardProject from "../components/ProjectCard";
import axios from "axios";
import FormModal from "../components/FormModal";
import { useToasts } from 'react-toast-notifications'

function Home() {
  const history = useHistory();
  const { projectId } = useParams()
  const [projects, setProjects] = useState([]);
  const [setModalType] = useState(" ");
  const [setModalIsOpen] = useState(false);
  const [leads] = useState([]);
  const { addToast } = useToasts()

  console.log(projectId)

  function openModal(type) {
    setModalType(type);
    setModalIsOpen(true);
  }

  const getProjects = () => {
    axios.get("http://localhost:3000/projects").then((response) => {
      setProjects(response.data);
    });
  };


  const createLead = (data) => {
    axios.post("http://localhost:3000/leads", {...data, project_id: projectId})
    .then((response) => {
      leads.push(response.data);
      addToast("Su informacion fue enviada exitosamente", {
        appearance: 'success',
        autoDismiss: true,
    })
    history.push('/')
    })
    .catch(() => {
      addToast("Su informacion no pudo ser enviada", {
        appearance: 'error',
        autoDismiss: true,
    })})
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="home">
      <Header openModal={openModal} />
      <div className="container__projects">
        {projects.map((project) => {
          return <CardProject data={project} key={project.id} openModal={openModal} />;
        })}
      </div>
      <Footer />
      <Route
        exact
        path="/ingresar"
        component={() => (
          <FormModal
            type={'login'}
            isOpen={true}
            onRequestClose={()=> history.push('/')}
          />
        )}
      />
      <Route
        exact
        path="/registrarse"
        component={() => (
          <FormModal
            type={'register'}
            isOpen={true}
            onRequestClose={()=> history.push('/')}
          />
        )}
      />
      <Route
        exact
        path="/leads/:projectId"
        component={() => (
          <FormModal
            type={'lead'}
            isOpen={true}
            onSubmit={(data) => {
              createLead(data);
            }}
            onRequestClose={()=> history.push('/')}
          />
        )}
      />
    </div>
  );
}

export default Home;
