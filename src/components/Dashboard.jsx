import React from "react"
import Navbarapp from "./Navbar";
import Buttonsgroup from "./Buttonsgroup";
import Dbody from "./Dbody";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const Dashboard = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    if (!isAuthenticated) {
        return <Navigate to="/login"/>
    }
    return (
        <div>
            <Navbarapp/>
            <Buttonsgroup/>
            <Dbody/>
        </div>
    )
}
export default Dashboard