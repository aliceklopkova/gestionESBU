import React from 'react';
import ReactDOM from "react-dom/client";
import './Dbody.css';
import Pizarra from "./Pizarra";
import Estadistica from "./Estadistica";
import {Route, Routes} from "react-router-dom";


function Dbody({authRoutes}) {
    return (
        <div className={'box'}>
            <Routes>
                {authRoutes.map(({path, page}) => (
                    <Route key={path} path={path} element={page}/>
                ))}
            </Routes>
        </div>
    );
}

export default Dbody;