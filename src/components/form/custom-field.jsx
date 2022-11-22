import React, {useEffect} from "react"
import SelectField from "./select-field";
import ModelField from "./model-field";
import ModelListField from "./model-list-field";
import CustomTextField from "./custom-text-field";


const CustomField = (props) => {
    const {type} = props
        switch (type) {
            case 'select':
                return <SelectField {...props}/>
            case 'modelList':
                return <ModelListField {...props}/>
            case 'model':
                return <ModelField {...props}/>
            default:
                return <CustomTextField {...props}/>
        }
}

export default CustomField