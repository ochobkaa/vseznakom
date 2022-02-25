import React from 'react';
import {Menu, MenuItem} from "@mui/material";
import UserActionsMenuProps from "./UserActionsMenu.Props";

const UserActionsMenu = (props: UserActionsMenuProps) => {
    const {open, onLogout, onClose, anchorEl} = props;

    const onLogoutClick = () => {
        onLogout();
        onClose();
    };

    return (
        <Menu
            open={open}
            onClose={onClose}
            anchorEl={anchorEl}
        >
            <MenuItem onClick={onLogoutClick}>Выход</MenuItem>
        </Menu>
    );
};

export default UserActionsMenu;