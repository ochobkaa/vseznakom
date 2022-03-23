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
import VkApi from "../../../api/vkApi";
import LoggedUser from "../../../store/authSlice/authSlice.LoggedUser";
import {UsersGetResponse} from "@vkontakte/api-schema-typescript";
import VK_API_VERSION from "../../../etc/vkApiVersion";

const Navbar = () => {
    const isAuth = useAuthState();

    const dispatch = useAppDispatch();
    const actions = AuthSlice.actions;

    const dispatchLoggedUser = (response: UsersGetResponse) => {
        const loggedUser = response[0];
        dispatch(actions.login(loggedUser as LoggedUser));
    }

    const onLogin = () => {
        VkApi.login();

        if (VkApi.isAuth) {
            VkApi.call(
                "users.get",
                dispatchLoggedUser,
                {
                    fields: "city,status,photo_100,photo_400",
                    v: VK_API_VERSION
                }
            )
        }
    }

    const onLogout = () => {
        VkApi.logout();

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