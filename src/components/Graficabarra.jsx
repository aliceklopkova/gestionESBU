import React from "react";
import ReactDOM from "react-dom/client";
import './Graficabarra.css';

function Graficabarra(){
    return(
        <div >
            <p className={'texto'}>7mo</p>
            <div className="containerd">
                <div className="skills html">90%</div>
            </div>

            <p className={'texto'}>8vo</p>
            <div className="containerd">
                <div className="skills css">80%</div>
            </div>

            <p className={'texto'}>9no</p>
            <div className="containerd">
                <div className="skills js">65%</div>
            </div>

            <p className={'texto'}>Curso</p>
            <div className="containerd">
                <div className="skills php">60%</div>
            </div>
        </div>

    );
}
export default Graficabarra;