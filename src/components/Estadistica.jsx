import React from 'react';
import ReactDOM from "react-dom/client";
import './Estadistica.css';
import Cardr from "./Card";
import Graficabarra from "./Graficabarra";

function Estadistica() {
    return (
        <div className={'estadistic'}>
            <div className={'posicion_card'}>
                <Cardr style={"colore"} symbol="face" name="Cantidad de Estudiantes"
                       number="500"/>
            </div>
                <div className={'posicion_card'}>
                     <Cardr style={"colore-b"} symbol="face_4" name="Cantidad de Profesores"
                       number="40"/>
                </div>
             <div className={'posicion_card'}>
                     <Cardr style={"colore-c"} symbol="group" name="Cantidad de Grupos"
                       number="40"/>
                </div>
            <div className={'posicion_card'}>
                     <Cardr style={"colore-d"} symbol="workspaces" name="Cantidad de Aulas"
                       number="40"/>
                </div>
            <div className={'posicion_graf'}>
                <p className={'text_a'}>Promedio por grado y del curso escolar</p>
                <Graficabarra/>
            </div>

        </div>

    );
}

export default Estadistica;