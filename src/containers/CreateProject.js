import React from "react";
import "../assets/styles/components/CreateProject.scss";
import { Link, useHistory } from "react-router-dom";
import imgBack from "../assets/images/arrow-left-circle.svg";
import { useForm } from "react-hook-form";
import useAPI from "services/APIServices";
import { useToasts } from "react-toast-notifications";
import { useSetRecoilState } from "recoil";
import { projectsListState } from "../atoms/atoms";

const CreateProject = () => {
  const { addToast } = useToasts();
  const history = useHistory();
  const setProjectListState = useSetRecoilState(projectsListState);
  const { createProject } = useAPI();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const list_emails = data.list_emails.split(" ");
    createProject({ ...data, list_emails: list_emails })
      .then((response) => {
        setProjectListState((projects) => {
          return [...projects, response.data];
        });
        addToast("Su informacion fue enviada exitosamente", {
          appearance: "success",
          autoDismiss: true,
        });
        history.push("/cms");
      })
      .catch(() => {
        addToast("Su informacion no pudo ser enviada", {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };

  return (
    <div className="container_newProject">
      <Link to="/cms" className="btn_back">
        <img src={imgBack} alt="return cms page"></img>
      </Link>
      <div className="container__form--project">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="name_project"
            placeholder={"Nombre Proyecto"}
            className="input-txt"
            autoFocus
            {...register("name_project", { required: true })}
          />
          {errors.name_project?.type === "required" && (
            <span className="errors">Este campo es requerido</span>
          )}
          <hr />

          <span>Tipo Projecto:</span>
          <select {...register("type_project", { required: true })}>
            <option value="residencial">Residencial</option>
            <option value="comercial">Comercial</option>
            <option value="industrial">Industrial</option>
            <option value="lotes">Lotes</option>
          </select>
          {errors.type_project?.type === "required" && (
            <span className="errors">Debe seleccionar una opción</span>
          )}

          <input
            type="text"
            name="ciudad"
            placeholder={"Ciudad"}
            className="input-txt"
            {...register("city", { required: true })}
          />
          {errors.city?.type === "required" && (
            <span className="errors">Este campo es requerido</span>
          )}
          <hr />

          <input
            type="text"
            name="direccion"
            placeholder={"Dirección"}
            className="input-txt"
            {...register("address", { required: true })}
          />
          {errors.address?.type === "required" && (
            <span className="errors">Este campo es requerido</span>
          )}
          <hr />

          <input
            type="text"
            name="precio"
            placeholder={"Precio"}
            className="input-txt"
            {...register("price", { required: true })}
          />
          {errors.price?.type === "required" && (
            <span className="errors">Este campo es requerido</span>
          )}
          <hr />

          <input
            type="text"
            name="area"
            placeholder={"Area"}
            className="input-txt"
            {...register("area", { required: true })}
          />
          {errors.area?.type === "required" && (
            <span className="errors">Este campo es requerido</span>
          )}
          <hr />

          <span>Aplica subsidio VIS?:</span>
          <select {...register("subsidy", { required: true })}>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
          {errors.subsidy?.type === "required" && (
            <span className="errors">Debe seleccionar una opción</span>
          )}

          <input
            type="text"
            name="restroom"
            placeholder={"Numero Baños"}
            className="card__title input-txt"
            {...register("restroom", { required: true })}
          />
          {errors.restroom?.type === "required" && (
            <span className="errors">Este campo es requerido</span>
          )}
          <hr />

          <span>Incluye Parqueadero?</span>
          <select {...register("parking", { required: true })}>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
          {errors.parking?.type === "required" && (
            <span className="errors">Debe seleccionar una opción</span>
          )}

          <input
            type="text"
            name="listEmails"
            placeholder={"Lista correos sala de ventas"}
            className="card__title input-txt"
            {...register("list_emails", { required: true })}
          />
          {errors.list_emails?.type === "required" && (
            <span className="errors">Este campo es requerido</span>
          )}
          <hr />
          <button className="btn_createProject" type="submit">
            Crear Projecto
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
