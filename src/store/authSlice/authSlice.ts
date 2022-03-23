import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import AuthSliceState from "./authSlice.State";
import LoggedUser from "./authSlice.LoggedUser";

const initialState : AuthSliceState = {
    loggedUser: null
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login(state, action : PayloadAction<LoggedUser>) {
            state.loggedUser = action.payload;
        },
        logout(state) {
            state.loggedUser = null;
        }
    }
})

const AuthSlice = {
    actions: authSlice.actions,
    reducer: authSlice.reducer
}

export default AuthSlice;