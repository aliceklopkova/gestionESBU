import React from "react"
import {Box, Stack, TextField} from "@mui/material";
import formFieldDescription from "../data/formFieldDescription";

const FilterForm = ({selectedFilters, setFilterParams}) => {
    const handleChange = (e) => {
        const {name, value} = e.target
        setFilterParams((data) => {
            return {...data, [name]: value}
        })
    }
    return (
        <Stack sx={{marginBottom: "30px", marginLeft: "30px", marginRight: "20px"}} direction="row" spacing={2}>
            {selectedFilters.map(filter => (
                <TextField
                    size="small"
                    type={formFieldDescription[filter].type}
                    id={filter}
                    label={formFieldDescription[filter].name}
                    name={filter}
                    onChange={handleChange}
                />
            ))}
        </Stack>
    )
}

export default FilterForm