import React from 'react';
import './Buttonsgroup.css';
import {Link} from "react-router-dom";


function Buttonsgroup() {
  return (
      <div className="sidebar">
          <Link to={"/home"}>Home</Link>
          <Link to={"/estudiante"}>Estudiantes</Link>
          <Link to={"/profesor"}>Profesores</Link>


      </div>

  );
}

export default Buttonsgroup;

