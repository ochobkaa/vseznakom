import React from 'react';
import {Paper} from "@mui/material";
import {LeftMenuSx} from "./LeftMenu.SxStyled";
import UserLeftMenu from "./UserLeftMenu";
import GuestLeftMenu from "./GuestLeftMenu";
import useAuthState from "../../../hooks/authState";

const LeftMenu = () => {
    const isAuth = useAuthState();

    return (
        <Paper sx={LeftMenuSx}>
            {isAuth
                ? <UserLeftMenu/>
                : <GuestLeftMenu/>
            }
        </Paper>
    );
};

export default LeftMenu;