import React from 'react';
import './Buttonsgroup.css';
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';


function Buttonsgroup() {
  return (
      <div className="sidebar">
          <Link  to={"/home"}><HomeIcon /><span>Home</span></Link>
          <Link to={"/estudiante"}>Estudiantes</Link>
          <Link to={"/profesor"}>Profesores</Link>


      </div>

  );
}

export default Buttonsgroup;

