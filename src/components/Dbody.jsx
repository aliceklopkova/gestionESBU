import React from 'react';
import './Dbody.css';
import {Outlet} from "react-router-dom";


function Dbody() {
    return (<div className={'box'}>
        <Outlet/>
    </div>);
}

export default Dbody;