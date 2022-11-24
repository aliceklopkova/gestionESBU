import React, {useEffect, useState} from "react"
import api from "../../api";
import {Autocomplete, TextField} from "@mui/material";

const ModelListField = (props) => {
    const {id, model, label, required, setParams, fullWidth, width, defaultValue, sx, helperText, noOptionsText} = props
    const [data, setData] = useState([])
    const [value, setValue] = useState([])
    const [invalid, setInvalid] = useState(false)

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
        setInvalid(false)
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
        <Autocomplete
            onInvalid={() => setInvalid(true)}
            limitTags={2}
            noOptionsText={noOptionsText}
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
            renderOption={((props, option) => <li {...props}>{option["object_name"]}</li>)}
            renderInput={(params) => (
                <TextField required={required} error={invalid} helperText={helperText}
                           fullWidth={fullWidth} {...params} label={label}/>)}
        />
    )
}

export default ModelListField