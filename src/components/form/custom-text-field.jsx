import React, {useEffect} from 'react'
import TextField from "@mui/material/TextField";

const CustomTextField = (props) => {
    const {id, label, required, type, setParams, fullWidth, defaultValue, helperText, sx} = props
    const handleChange = (event) => {
        const {name, value} = event.target
        setParams(data => {
            return {...data, [name]: value}
        })
    }

    return (
        <TextField defaultValue={defaultValue || ''} fullWidth={fullWidth} size="small" onChange={handleChange}
                   required={required}
                   id={id}
                   type={type}
                   name={id}
                   label={label}
                   helperText={helperText}
                   sx={sx}
        />
    )
}

export default CustomTextField