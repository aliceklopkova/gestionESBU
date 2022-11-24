import React, {useEffect, useState} from "react"
import {Autocomplete, TextField} from "@mui/material";
import api from "../../api"
import {useLocation} from "react-router-dom";


const ModelField = (props) => {
    const {
        id,
        label,
        required,
        setParams,
        // params,
        fullWidth,
        width,
        defaultValue,
        sx,
        helperText,
        noOptionsText
    } = props
    const [data, setData] = useState([])
    const [value, setValue] = useState(null)
    const [invalid, setInvalid] = useState(false)
    const location = useLocation()
    const model = location.pathname.split("/")[1]

    useEffect(() => {
        // model === "estudiante" && id === "grupo"?
        //     api[id]().list({grado: params['grado'] || "0"}).then(resp => {
        //         setData(resp.data)
        //         setValue(null)
        //         if (defaultValue) {
        //             setValue(defaultValue)
        //             setParams(params => (
        //                 {...params, [id]: defaultValue.id}
        //             ))
        //         }
        //     })
        //     :
            api[id]().list().then(resp => {
                setData(resp.data)
                if (defaultValue) {
                    setValue(defaultValue)
                    setParams(params => (
                        {...params, [id]: defaultValue.id}
                    ))
                }
            })
    }, [])

    const handleChange = (e, newValue) => {
        setInvalid(false)
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
        <Autocomplete
            onInvalid={() => setInvalid(true)}
            noOptionsText={noOptionsText}
            size="small"
            fullWidth={fullWidth || false}
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
                <TextField required={required} error={invalid} helperText={helperText} fullWidth {...params}
                           label={label}/>)}
        />
    )
}

export default ModelField






