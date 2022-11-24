import React, {useEffect, useState} from "react";
import './Graficabarra.css';
import estudianteApi from "../api/estudiante";
import graficas from "../data/graficas";

function Graficabarra() {
    const [promedio, setPromedio] = useState({})

    const promedioGeneral = () => (
        (promedio.septimo + promedio.octavo + promedio.noveno) / 3
    )
    const skillsStyle = {
        textAlign: "right",
        paddingTop: "10px",
        paddingBottom: "10px",
        color: "midnightblue",
    }
    useEffect(() => {
        estudianteApi().get_promedio("1").then(resp => {
            setPromedio(oldData => (
                {...oldData, septimo: resp.data['promedio']}
            ))
        })
        estudianteApi().get_promedio("2").then(resp => {
            setPromedio(oldData => (
                {...oldData, octavo: resp.data['promedio']}
            ))
        })
        estudianteApi().get_promedio("3").then(resp => {
            setPromedio(oldData => (
                {...oldData, noveno: resp.data['promedio']}
            ))
        })

    }, [])

    useEffect(()=>{
        setPromedio(oldData => (
            {...oldData, general: promedioGeneral()}
        ))
    }, [promedio.septimo, promedio.octavo, promedio.noveno])

    return (
        graficas.map(({id, label, style}) => (
            <div key={id}>
                <p className={'texto'}>{label}</p>
                <div className="containerd">
                    <div style={{...skillsStyle, ...style, width: `${promedio[id]}%`}}>{promedio[id]}</div>
                </div>
            </div>
        ))

    );
}

export default Graficabarra;