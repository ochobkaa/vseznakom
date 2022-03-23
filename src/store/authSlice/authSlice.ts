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
        login(state) {
            VkApi.subscribe("auth.login", () => console.log(VkApi.isAuth));
            VkApi.login();
        },
        logout(state) {
            VkApi.subscribe("auth.logout", () => state.isAuth = VkApi.isAuth);
            state.isAuth = VkApi.isAuth;
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