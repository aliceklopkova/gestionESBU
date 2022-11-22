import React, {useEffect, useState} from "react"
import api from "../../api";
import {Autocomplete, TextField} from "@mui/material";

const ModelListField = ({id, model, label, required, setParams, fullWidth, width, defaultValue, sx, helperText}) => {
    const [data, setData] = useState([])
    const [value, setValue] = useState([])

    useEffect(() => {
        api[model]().list().then(resp => {
            setData(resp.data)
            if (defaultValue) {
                setValue(defaultValue)
                setParams(data => {
                    const state = []
                    defaultValue.map(({id}) => state.push(id))
                    return {...data, [id]: state}
                })
            }
        })
    }, [])

    const handleChange = (e, newValue) => {
        setValue(newValue)
        newValue ?
            setParams(data => {
                const state = []
                newValue.map(({id}) => state.push(id))
                return {...data, [id]: state}
            })
            :
            setParams(data => {
                return {...data, [id]: []}
            })
    }
    return (
        fullWidth ?
            <Autocomplete
                limitTags={2}
                multiple
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
                limitTags={2}
                multiple
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

export default ModelListField