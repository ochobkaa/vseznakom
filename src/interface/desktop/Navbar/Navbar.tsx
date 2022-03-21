import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import {ToolbarSx} from "./Navbar.SxStyled";
import LoginCallbacksContext from "./Navbar.Context.LoginCallbacks";
import NavbarLoggedIn from "./NavbarLoggedIn";
import NavbarGuest from "./NavbarGuest";
import Logo from "./Logo";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store";
import AuthSlice from "../../../store/authSlice";
import {AuthLink} from "../../../api/vkApi/vkApi.implicitFlow";
import useAuthState from "../../../hooks/authState";
import useAppDispatch from "../../../hooks/appDispatch";

const Navbar = () => {
    const isAuth = useAuthState();

    const dispatch = useAppDispatch();
    const actions = AuthSlice.actions;

    const onLogin = () => {
        window.location.href = AuthLink;
    }

    const onLogout = () => {
        dispatch(actions.logout());
    }

    return (
        <AppBar position="sticky" aria-label="navbar">
            <Toolbar sx={ToolbarSx}>
                <Logo/>
                <LoginCallbacksContext.Provider value={{onLogin, onLogout}}>
                    {isAuth
                        ? <NavbarLoggedIn/>
                        : <NavbarGuest/>
                    }
                </LoginCallbacksContext.Provider>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;