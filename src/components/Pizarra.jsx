import React from 'react';
import './Pizarra.css';

function Pizarra() {
    return (
        <div >
            <img className={'pizarra_fondo'} src={"./27563.jpg"} alt="fondo pizarra dibujada"/>
            <img className={'pizarra'} src={"./2e1359db06bf912cd6864dde05753a4d.jpg"} alt="fondo pizarra"/>
            <p className={'letra'}>Sistema de Gestión de la ESBU José Martí</p>
            <p className={'curso'}>Curso 2021-2022</p>
            <p className={'promedio'}>Promedio de Calificaciones</p>

        </div>

    )

}

export default Pizarra;