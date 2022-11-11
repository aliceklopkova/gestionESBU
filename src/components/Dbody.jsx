import React from 'react';
import './Dbody.css';
import {Outlet} from "react-router-dom";
import Footer from "./Footer";


function Dbody() {
    return (<div className={'box'}>
        <Outlet/>
        <Footer/>
    </div>);
}

export default Dbody;