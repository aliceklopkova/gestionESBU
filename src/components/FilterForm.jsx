import React from "react"
import {Box, Stack, TextField} from "@mui/material";
import formFieldDescription from "../data/formFieldDescription";
import CustomField from "./form/custom-field";

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
                <CustomField
                    {...formFieldDescription[filter]}
                    sx={{width: "200px"}}
                    size="small"

                    onChange={handleChange}
                    setParams={setFilterParams}
                />
            ))}
        </Stack>
    )
}

export default FilterForm