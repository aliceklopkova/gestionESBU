import React from 'react';
import './Buttonsgroup.css';
import {Link} from "react-router-dom";
import navItems from "../data/nav-items";


const Buttonsgroup = () => (
    <div className="sidebar">
        {navItems.map(({icon, path, name}) => (
            <Link key={name} to={path}>
                <div style={{display: "flex"}}>
                    {icon}
                    <span style={{padding: "0 5px"}}>{name}</span>
                </div>
            </Link>
        ))}
    </div>

)

export default Buttonsgroup;

