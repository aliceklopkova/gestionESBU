import React from "react";
import './Card.css';
import {Link} from "react-router-dom";


function Cardr(props) {
    const {url} = props
    return (
        <div className={'cardc'}>
            <div className={props.style}/>
            <div className="containerc">
                <h4 className={'material-symbols-outlined'}>
                    <p style={{fontSize: "30px"}}>{props.symbol}</p>
                    <b className={'letrac'}>{props.name}</b>
                    <div className={'num'}>
                        <p className={'letrac'}>{props.number}</p>
                    </div>
                    <Link to={`/${url}`} style={{textDecoration: "none"}}>
                    <button className={'btnc'}> más...</button>
                        </Link>
                </h4>
            </div>
        </div>
    );
}

export default Cardr;