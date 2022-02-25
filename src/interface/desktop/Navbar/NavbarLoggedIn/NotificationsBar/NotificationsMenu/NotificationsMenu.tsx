import React from 'react';
import {Box, Popover} from "@mui/material";
import NotificationsMenuProps from "./NotificationsMenu.Props";
import {NotificationsMenuSx} from "./NotificationsMenu.SxStyled";

const NotificationsMenu = (props: NotificationsMenuProps) => {
    const {open, onClose, anchorEl} = props;

    return (
        <Popover
            open={open}
            onClose={onClose}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
            }}
        >
            <Box sx={NotificationsMenuSx}>
                Пизда
            </Box>
        </Popover>
    );
};

export default NotificationsMenu;