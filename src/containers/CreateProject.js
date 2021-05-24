import React from 'react'
import "../assets/styles/components/CreateProject.scss"
import Header from "../components/Header"

const CreateProject = () => {
    return (
        <>
        <Header/>
        <div className="container__form--project">
            formulario
            <form>
                <input
                    type="text"
                    name='name_project'
                    placeholder={"Nombre Proyecto"}
                    className="card__title input-txt"
                    autoFocus
                    required
                ></input>

                <p>Tipo Projecto:</p>
                <input type="radio" id="residencial" name="type" value="residencial" />
                <label for="residencial">Residencial</label>
                <input type="radio" id="comercial" name="type" value="comercial" /> 
                <label for="comercial">Comercial</label>
                <input type="radio" id="industrial" name="type" value="industrial" />
                <label for="industrial">Industrial</label>
                <input type="radio" id="lotes" name="type" value="lotes" />
                <label for="lotes">Lotes</label>

                <input
                    type="text"
                    name='ciudad'
                    placeholder={"Ciudad"}
                    className="card__title input-txt"
                    required
                ></input>

                <input
                    type="text"
                    name='direccion'
                    placeholder={"Direccion"}
                    className="card__title input-txt"
                    required
                ></input>

                <input
                    type="text"
                    name='precio'
                    placeholder={"Precio"}
                    className="card__title input-txt"
                    required
                ></input>

                <p>Areas:</p>
                <>
                    <input
                        type="text"
                        name='privada'
                        placeholder={"Privada"}
                        className="card__title input-txt"
                        required
                    ></input>
                    <input
                    type="text"
                    name='construida'
                    placeholder={"Construida"}
                    className="card__title input-txt"
                    required
                    ></input>
                </>

                <p>Aplica subsidio VIS?:</p>
                <input type="radio" id="si_subsidy" name="type" value="si" />
                <label for="si_subsidy">Si</label>
                <input type="radio" id="no_subsidy" name="type" value="no" /> 
                <label for="no_subsidy">No</label>

                <input
                    type="text"
                    name='restroom'
                    placeholder={"Numero Baños"}
                    className="card__title input-txt"
                    required
                ></input>

                <p>Incluye Parqueadero?:</p>
                <input type="radio" id="si_parking" name="type" value="si" />
                <label for="si_parking">Si</label>
                <input type="radio" id="no_parking" name="type" value="no" /> 
                <label for="no_parking">No</label>

                <input
                    type="text"
                    name='listEmails'
                    placeholder={"Lista correos sala de ventas"}
                    className="card__title input-txt"
                    required
                ></input>
                <button className="card__btnPost" type='submit'>
                    Crear Projecto
                </button>
            </form>
        </div>
        </>
    );
};

export default CreateProject;