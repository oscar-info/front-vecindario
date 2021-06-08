import React from 'react';
import '../assets/styles/components/FormModal.scss';
import btnClose from '../assets/images/btn-close.png';
import ReactModal from 'react-modal';
import { useForm } from "react-hook-form";

const FormModal = ({type = '', isOpen, onRequestClose, onSubmit }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const RenderRegisterForm = () => {
        return (
            <>
                <input
                type="text"
                name='name'
                placeholder={"Nombres"}
                className="input-txt"
                autoFocus
                {...register("name", { required: true })}
                />
                {errors.name?.type === 'required' && "El nombre es requerido"}
                <hr></hr>
                <input
                type="text"
                name='last_name'
                placeholder={"Apellidos"}
                className="input-txt"
                {...register("last_name", { required: true })}
                />
                {errors.last_name?.type === 'required' && "El apellido es requerido"}
                <hr></hr>
                <input
                type="text"
                name='phone'
                placeholder={"Telefono Movil"}
                className="input-txt"
                {...register("phone", { required: true, pattern: /^[+][(]{0,1}[5][7][)]{0,1}[-\s./0-9]*$/  })}
                />
                {errors.phone?.type === 'required' && "Telefono requerido, formato valido: +57 300 000 0000"}
                <hr></hr>
                <small>Formato valido: +57 300 000 0000</small>
                <input
                type="email"
                name='email'
                placeholder={"Email"}
                className="input-txt"
                {...register("email", { required: true })}
                />
                {errors.email?.type === 'required' && "El email es requerido"}
                <hr></hr>
                <input
                type="password"
                name='password'
                placeholder={"Contraseña"}
                className="input-txt"
                {...register("password", { required: true, minLength: 8 })}
                />
                {errors.password?.type === 'required' && "La contraseña es requerida, minimo 8 caracteres"}
                <hr></hr>
                <small>La contraseña debe tener como minimo 8 caracteres</small>
                <button className="card__btnRegister" type='submit'>
                Registrarse
                </button>
            </>
        )
    };

    const RenderLoginForm = () => {
        return (
            <>
                <input
                type="email"
                name='email'
                placeholder={"Email"}
                className="input-txt"
                autoFocus
                {...register("email", { required: true })}
                />
                {errors.email?.type === 'required' && "Este campo es requerido"}
                <hr></hr>
                <input
                type="password"
                name='password'
                placeholder={"Contraseña"}
                className="input-txt"
                {...register("password", { required: true })}
                />
                {errors.password?.type === 'required' && "Este campo es requerido"}
                <hr></hr>
                <button className="card__btnRegister" type='submit'>
                Ingresar
                </button>
            </>
        )
    };

    const RenderLeadForm = (createLead) => {
        return (
            <>
                <input
                type="text"
                name='name'
                placeholder={"Nombres"}
                className="input-txt"
                autoFocus
                {...register("name", { required: true })}
                />
                {errors.name?.type === 'required' && "Este campo es requerido"}
                <hr></hr>
                <input
                type="text"
                name='last_name'
                placeholder={"Apellidos"}
                className="input-txt"
                {...register("last_name", { required: true })}
                />
                {errors.last_name?.type === 'required' && "Este campo es requerido"}
                <hr></hr>
                <input
                type="text"
                name='phone'
                placeholder={"Telefono Movil"}
                className="input-txt"
                {...register("phone", { required: true, pattern: /^[+][(]{0,1}[5][7][)]{0,1}[-\s./0-9]*$/ })}
                />
                {errors.phone?.type === 'required' && "Telefono requerido, formato valido: +57 300 000 0000"}
                <hr></hr>
                <small>Formato valido: +57 300 000 0000</small>
                <input
                type="email"
                name='email'
                placeholder={"Email"}
                className="input-txt"
                {...register("email", { required: true })}
                />
                {errors.email?.type === 'required' && "Este campo es requerido"}
                <hr></hr>
                <button className="card__btnRegister" type='submit'>
                Enviar
                </button>
            </>
        )
    };

    return (
        <ReactModal 
            ariaHideApp={false}
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            className="continer__formModal" shouldCloseOnOverlayClick={true}
            >
                <button
                className="card__btnClose"
                onClick={onRequestClose}
                >
                    <img src={btnClose} alt="button close"></img>
                </button>
                <form onSubmit={handleSubmit(onSubmit)}>
                {type === 'register'  &&  <RenderRegisterForm />}
                {type === 'login' && <RenderLoginForm />}
                {type === 'lead' && <RenderLeadForm />}
                </form>
        </ReactModal>
    );
};

export default FormModal;