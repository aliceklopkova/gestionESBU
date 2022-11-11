import React, {useEffect} from "react"
import Auth from "../api/auth";
import {useDispatch} from "react-redux";
import {logout} from "../redux/user/userSlice";
import {Navigate} from "react-router-dom";

const Logout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        Auth.logout()
        dispatch(logout)
    }, [])
    return <Navigate to="/login" />
}

export default Logout