import React, {useEffect, useState} from "react"
import {Autocomplete, TextField} from "@mui/material";
import api from "../../api"


const ModelField = ({id, label, required, setParams, fullWidth, width, defaultValue, sx, helperText}) => {
    const [data, setData] = useState([])
    const [value, setValue] = useState(null)

    useEffect(() => {
        api[id]().list().then(resp => {
            console.log(resp)
            setData(resp.data)
        })
    }, [])

    const handleChange = (e, newValue) => {
        setValue(newValue)
        newValue ?
            setParams(data => {
                return {...data, [id]: newValue.id}
            })
            :
            setParams(data => {
                return {...data, [id]: null}
            })
    }

    return (
        fullWidth ?
            <Autocomplete
                size="small"
                value={value}
                disablePortal
                id="combo-box-demo"
                onChange={handleChange}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                options={data}
                getOptionLabel={option => option["object_name"]}
                sx={{width: width, ...sx}}
                freeSolo
                renderOption={((props, option) => <li {...props}>{option["object_name"]}</li>)}
                renderInput={(params) => (
                    <TextField helperText={helperText} fullWidth {...params} label={label}/>)}
            />
            :
            <Autocomplete
                size="small"
                value={value}
                disablePortal
                id="combo-box-demo"
                onChange={handleChange}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                options={data}
                getOptionLabel={option => option["object_name"]}
                sx={{width: width, ...sx}}
                freeSolo
                renderOption={((props, option) => <li {...props}>{option["object_name"]}</li>)}
                renderInput={(params) => (
                    <TextField helperText={helperText} {...params} label={label}/>)}
            />
    )
}

export default ModelField






