import React from 'react';
import {Autocomplete, Box, TextField} from "@mui/material";
import formFieldDescription from "../data/formFieldDescription";

function FilterParams({selectedFilters, setSelectedFilter, filterFields}) {
    return (
        <Box sx={{width: "400px", maxWidth:"100%"}}>
            <Autocomplete
                value={selectedFilters}
                onChange={(e, value) =>{
                    setSelectedFilter(value)
                }}
                size="small"
                multiple
                limitTags={3}
                id="multiple-limit-tags"
                options={filterFields}
                getOptionLabel={(option) => formFieldDescription[option].label}
                renderInput={(params) => (
                    <TextField {...params} label="Filtros" placeholder=""/>
                )}
            />
        </Box>

    );
}

export default FilterParams;