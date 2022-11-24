import React, {useEffect, useState} from 'react';
import './Estadistica.css';
import Cardr from "./Card";
import Graficabarra from "./Graficabarra";
import api from "../api/index"

function Estadistica() {
    const [data, setData] = useState({})
    useEffect(() => {
        api.estudiante().list().then(resp => {
            setData((oldData) => (
                {...oldData, estudiante: resp.data.length}
            ))
        })
        api.profesor().list().then(resp => {
            setData((oldData) => (
                {...oldData, profesor: resp.data.length}
            ))
        })
        api.grupo().list().then(resp => {
            setData((oldData    ) => (
                {...oldData, grupo: resp.data.length}
            ))
        })
        api.asignatura().list().then(resp => {
            setData((oldData) => (
                {...oldData, asignatura: resp.data.length}
            ))
        })

    }, [])
    return (
        <div className={'estadistic'}>
            <div className={'posicion_card'}>
                <Cardr url="estudiante" style={"colore"} symbol="face" name="Estudiantes"
                       number={data.estudiante}/>
            </div>
            <div className={'posicion_card'}>
                <Cardr url="profesor" style={"colore-b"} symbol="face_4" name="Profesores"
                       number={data.profesor}/>
            </div>
            <div className={'posicion_card'}>
                <Cardr url="grupo" style={"colore-c"} symbol="group" name="Grupos"
                       number={data.grupo}/>
            </div>
            <div className={'posicion_card'}>
                <Cardr url="asignatura" style={"colore-d"} symbol="workspaces" name="Asignaturas"
                       number={data.asignatura}/>
            </div>
            <div className={'posicion_graf'}>
                <p className={'text_a'}>Promedio por grado y del curso escolar</p>
                <Graficabarra/>
            </div>
        </div>

    );
}

export default Estadistica;