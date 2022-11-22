import React, {useEffect, useState} from "react"
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";

const SelectField = ({id, label, values, required, setParams, fullWidth, width, defaultValue, sx, helperText}) => {
    const [selectValue, setSelectValue] = useState("")

    useEffect(() => {
        if (defaultValue) {
            setSelectValue(defaultValue)
        }
    }, [])

    const handleChange = (event) => {
        const {value} = event.target
        setSelectValue(value)
        setParams(data => {
            return {...data, [id]: value}
        })
    }
    return (
        defaultValue ?
            <FormControl required={required} fullWidth={fullWidth} sx={{width: width, ...sx}} size="small">
                <InputLabel id={`${id}-label`}>{label}</InputLabel>
                <Select
                    autoWidth
                    id={`${id}_select`}
                    labelId={`${id}_label`}
                    value={selectValue}
                    label={label}
                    size="small"
                    onChange={handleChange}
                >
                    {values.map(({id, name}) => (
                        <MenuItem key={id} value={id}>{name}</MenuItem>
                    ))}
                </Select>
                <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            :
            <FormControl required={required} fullWidth={fullWidth} sx={{width: width, ...sx}} size="small">
                <InputLabel id={`${id}-label`}>{label}</InputLabel>
                <Select
                    autoWidth
                    id={`${id}-select`}
                    labelId={`${id}-label`}
                    value={selectValue}
                    label={label}
                    size="small"
                    onChange={handleChange}
                >
                    {values.map(({id, name}) => (
                        <MenuItem key={id} value={id}>{name}</MenuItem>
                    ))}
                </Select>
                <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
    )
}

export default SelectField