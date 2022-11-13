import React from "react";
import './Searchbar.css';
import {Box, TextField} from "@mui/material";


function NavScrollExample({setSearchParam}) {

    const handleChange = (event) => {
        const {value} = event.target
        setSearchParam(value)
    }
    return (
        <Box sx={{width: "700px", maxWidth: "100%"}}>
            <TextField fullWidth onChange={handleChange} size="small" label="Buscar"/>
        </Box>
    );
}

export default NavScrollExample;