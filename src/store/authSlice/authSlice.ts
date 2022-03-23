import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import AuthSliceState from "./authSlice.State";
import LoggedUser from "./authSlice.LoggedUser";
import VkApi from "../../api/vkApi";

const initialState : AuthSliceState = {
    isAuth: false,
    loggedUser: null
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login(state, action : PayloadAction<LoggedUser>) {
            state.loggedUser = action.payload;
            state.isAuth = VkApi.isAuth;
        },
        logout(state) {
            state.loggedUser = null;
            state.isAuth = VkApi.isAuth;
        }
    }
})

const AuthSlice = {
    actions: authSlice.actions,
    reducer: authSlice.reducer
}

export default AuthSlice;