import {Action, createSlice, PayloadAction} from "@reduxjs/toolkit";
import AuthSliceState from "./authSlice.State";
import Token from "../../hooks/vkAuth/vkAuth.Token";
import {UsersUser} from "@vkontakte/api-schema-typescript";
import LoggedUser from "./authSlice.LoggedUser";

const initialState : AuthSliceState = {
    token: null,
    loggedUser: null
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login(state, action : PayloadAction<Token>) {
            state.token = action.payload;
        },
        logout(state) {
            state.token = null;
        },
        setUserData(state, action: PayloadAction<UsersUser>) {
            state.loggedUser = action.payload as LoggedUser;
        }
    }
})

const AuthSlice = {
    actions: authSlice.actions,
    reducer: authSlice.reducer
}

export default AuthSlice;