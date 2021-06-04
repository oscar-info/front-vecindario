import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../assets/styles/components/Leads.scss";
import { useToasts } from "react-toast-notifications";
import useAPI from "services/APIServices";
import { useParams } from "react-router";
import LoadingSpinner from "components/LoadingSpinner";

const Leads = () => {
  const { addToast } = useToasts();
  const [leads, setLeads] = useState([]);
  const [project, setProject] = useState({});
  const { id } = useParams();
  const { getProject, getLeads } = useAPI();

  useEffect(() => {
    getProject(id).then(({ data }) => {
      setProject(data);
    });

    getLeads(id)
      .then(({ data }) => {
        setLeads(data);
      })
      .catch((error) => {
        if (error.response.status !== 404) {
          addToast("Los leads no pudiron ser cargados", {
            appearance: "error",
            autoDismiss: true,
          });
        }
      });
  }, [id, addToast, getLeads, getProject]);

  return (
    <>
      <Header />
      <LoadingSpinner/>
      <div className="container__cms--leads">
        {leads.length === 0 && <h2>Este proyecto no tiene leads</h2>}
        {leads.length > 0 && (
          <>
            <div>
              <h2>{project.name_project}</h2>
              <div className="resum__leads">
                <p>{leads.length}</p>
              </div>
            </div>
            <section className="table__leads">
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Email</th>
                    <th>Telefono</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => {
                    return (
                      <tr key={lead.id}>
                        <td>{lead.name}</td>
                        <td>
                          {new Date(lead.created_at).toLocaleDateString()}
                        </td>
                        <td>{lead.email}</td>
                        <td>{lead.phone}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Leads;
