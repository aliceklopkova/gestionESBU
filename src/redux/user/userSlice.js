import {createSlice} from "@reduxjs/toolkit";

const getInitialState = () => {
    const username = localStorage.getItem("username")
    const initialState = {username: "", isAuthenticated: false}
    if (username) {
        return {username: username, isAuthenticated: true}
    }
    return initialState
}
const userSlice = createSlice({
    name: "user",
    initialState: getInitialState(),
    reducers: {
        login: (state) => {
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.isAuthenticated = false
        }
    }
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer