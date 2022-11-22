import React from 'react'
import ModelCell from "./ModelCell";
import ModelListCell from "./ModelListCell";
import SelectCell from "./SelectCell";
import TextCell from "./TextCell";

const CustomCell = (props) => {
    const {type} = props.description
    switch (type){
        case "model":
            return <ModelCell {...props}/>
        case "modelList":
            return <ModelListCell {...props}/>
        case "select":
            return <SelectCell {...props}/>
        default:
            return <TextCell {...props}/>
    }

}

export default CustomCell