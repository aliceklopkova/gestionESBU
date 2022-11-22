import React from "react"
import Navbarapp from "./Navbar";
import Buttonsgroup from "./Buttonsgroup";
import Dbody from "./Dbody";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {Box} from "@mui/material";

const Dashboard = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    if (!isAuthenticated) {
        return <Navigate to="/login"/>
    }
    return (
        <div>
            <Navbarapp/>
            <Box sx={{display:"flex"}}>
            <Buttonsgroup/>
            <Dbody/>
            </Box>
        </div>
    )
}
export default Dashboard