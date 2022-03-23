import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import AuthSliceState from "./authSlice.State";
import LoggedUser from "./authSlice.LoggedUser";
import VkApi from "../../api/vkApi";
import vkApi from "../../api/vkApi";

const initialState : AuthSliceState = {
    isAuth: false,
    loggedUser: null
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login(state) {
            VkApi.login();
            console.log(vkApi.isAuth);
            state.isAuth = vkApi.isAuth;
        },
        logout(state) {
            VkApi.logout();
            state.isAuth = false;
        },
        setLoggedUser(state, action : PayloadAction<LoggedUser>) {
            state.loggedUser = action.payload;
        }
    }
})

const AuthSlice = {
    actions: authSlice.actions,
    reducer: authSlice.reducer
}

export default AuthSlice;