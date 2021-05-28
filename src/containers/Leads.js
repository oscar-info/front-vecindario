import React from 'react'
import Header from '../components/Header';
import '../assets/styles/components/Leads.scss'


const Leads = () => {
    return (
        <>
            <Header/>
            <div className="container__cms--leads">
                <div>
                    <h2>Kamelot</h2>
                    <div className="resum__leads">
                        <p>4</p>
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
                            <tr>
                                <td>Oscar Eduardo Info Giraldo</td>
                                <td>12/04/2021</td>
                                <td>prueba@gmail.com</td>
                                <td>3192337645</td>
                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>Jackson</td>
                                <td>94</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>Jackson</td>
                                <td>94</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>Jackson</td>
                                <td>94</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>Jackson</td>
                                <td>94</td>
                                <td>50</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
};

export default Leads;