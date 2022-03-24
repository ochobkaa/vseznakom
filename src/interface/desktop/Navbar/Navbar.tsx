import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import {ToolbarSx} from "./Navbar.SxStyled";
import LoginCallbacksContext from "./Navbar.Context.LoginCallbacks";
import NavbarLoggedIn from "./NavbarLoggedIn";
import NavbarGuest from "./NavbarGuest";
import Logo from "./Logo";
import useAuthState from "../../../hooks/authState";
import VkApi from "../../../api/vkApi";
import useLogin from "./Navbar.useLogin";

const Navbar = () => {
    const isAuth = useAuthState();
    useLogin();

    const onLogin = () => VkApi.login();

    const onLogout = () => VkApi.logout();

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