import React, {useEffect, useState} from 'react'
import TextField from "@mui/material/TextField";
import {useLocation} from "react-router-dom";
import api from "../../api";

const CustomTextField = (props) => {
    const [data, setData] = useState([])
    const {id, label, required, type, setParams, fullWidth, defaultValue, helperText, sx, errorText, inputProps, InputProps} = props
    const [invalid, setInvalid] = useState(false)
    const location = useLocation()
    const model = location.pathname.split("/")[1]
    useEffect(() => {
        if (type === "date") {
            setParams(oldParams => (
                {...oldParams, [id]: defaultValue}
            ))
        }
        if (id === "ci") {
            api[model]().list().then((resp) => {
                setData(resp.data)
            })
        }
    }, [])
    const handleChange = (event) => {
        setInvalid(false)
        const {name, value} = event.target
        if (data.filter(item => item.ci === value).length > 0) {
            setInvalid(true)
        }
        setParams(data => {
            if (id === 'numero_telefono')
                return {...data, [name]: `+53${value}`}
            return {...data, [name]: value}
        })
    }

    return (
        id === "numero_telefono" ?
            <TextField defaultValue={defaultValue ? defaultValue.replace("+53", "") : ''} fullWidth={fullWidth}
                       size="small" onChange={handleChange}
                       error={invalid}
                       onInvalid={() => setInvalid(true)}
                       required={required}
                       id={id}
                       type={type}
                       name={id}
                       label={label}
                       helperText={invalid ? errorText : helperText}
                       sx={sx}
                       inputProps={inputProps}
                       InputProps={InputProps}
            />
            :
            <TextField defaultValue={defaultValue || ''} fullWidth={fullWidth} size="small" onChange={handleChange}
                       error={invalid}
                       onInvalid={() => setInvalid(true)}
                       required={required}
                       id={id}
                       type={type}
                       name={id}
                       label={label}
                       helperText={invalid ? errorText : helperText}
                       sx={sx}
                       inputProps={inputProps}
                       InputProps={InputProps}
            />
    )
}

export default CustomTextField