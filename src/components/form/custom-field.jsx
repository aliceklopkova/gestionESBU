import React, {useEffect} from "react"
import SelectField from "./select-field";
import ModelField from "./model-field";
import TextField from "@mui/material/TextField";
import ModelListField from "./model-list-field";
import {Input} from "@mui/material";


const CustomField = (props) => {
    const {id, label, required, type, setParams, fullWidth, defaultValue, helperText, sx} = props

    useEffect(() => {
        if (defaultValue) {
            setParams(data => {
                return {...data, [id]: defaultValue}
            })
        }
    }, [])

    const handleChange = (event) => {
        const {name, value} = event.target
        setParams(data => {
            return {...data, [name]: value}
        })
    }
    // const handleFile = (event) => {
    //     console.log(event)
    //     const {name, files} = event.target
    //     const reader = new FileReader()
    //     setParams(data => {
    //             return {
    //                 ...data, [name]: formData
    //             }})}
    if (type === 'select') {
        return <SelectField {...props}/>
    }
    if (type === 'file') {
        return <input id={id} required={required} style={sx} name={id} onChange={handleChange}
                      type={type}/>
    }
    if (type === 'modelList') {
        return <ModelListField {...props}/>
    }
    if (type === 'model') {
        return <ModelField {...props}/>
    }
    return (
        defaultValue ?
            <TextField defaultValue={defaultValue} fullWidth={fullWidth} size="small" onChange={handleChange}
                       required={required}
                       id={id}
                       type={type}
                       name={id}
                       label={label}
                       helperText={helperText}
                       sx={sx}
            />
            :
            <TextField fullWidth={fullWidth} size="small" onChange={handleChange}
                       required={required}
                       type={type}
                       id={id}
                       name={id}
                       label={label}
                       helperText={helperText}
                       sx={sx}
            />
    )
}

export default CustomField