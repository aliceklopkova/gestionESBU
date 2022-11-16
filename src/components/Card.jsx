import React from "react";
import './Card.css';


function Cardr(props) {
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
                    <button className={'btnc'}> más...</button>
                </h4>
            </div>
        </div>
    );
}

export default Cardr;