import React from "react";
import './Searchbar.css';
import {Box, Stack, TextField} from "@mui/material";
import FilterParams from "./Filterparams";


function NavScrollExample({setSearchParam}) {

    const handleChange = (event) => {
        const {value} = event.target
        setSearchParam(value)
    }
    return (
        <Box>
            <Stack direction="row"  spacing={2}>

            <Box sx={{width: "700px", maxWidth: "100%"}} >
                <TextField fullWidth onChange={handleChange} size="small" label="Buscar"/>
            </Box>
                 <Box sx={{width:"20px", maxWidth: "100%", paddingTop:"5px"}}>
                <span className="material-symbols-outlined">search</span>
            </Box>
            </Stack>

        </Box>


    );
}

export default NavScrollExample;