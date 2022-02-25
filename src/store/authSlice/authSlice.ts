import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import AuthSliceState from "./authSlice.State";
import Token from "../../hooks/vkAuth/vkAuth.Token";

const initialState : AuthSliceState = {
    token: null,
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
        }
    }
})

const AuthSlice = {
    actions: authSlice.actions,
    reducer: authSlice.reducer
}

export default AuthSlice;