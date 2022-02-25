import React from 'react';
import {Stack} from "@mui/material";
import {RightStackSx} from "./NavbarLoggedIn.SxStyled";
import SettingsButton from "./SettingsButton";
import LoggedUserMenu from "./LoggedUserMenu";
import NotificationsBar from "./NotificationsBar";

const NavbarLoggedIn = () => {
    return (
        <Stack
            direction="row"
            spacing="18px"
            sx={RightStackSx}
        >
            <NotificationsBar/>
            <SettingsButton/>
            <LoggedUserMenu/>
        </Stack>
    );
};

export default NavbarLoggedIn;