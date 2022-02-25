import React from 'react';
import Notifications from "@mui/icons-material/Notifications";
import {Badge, IconButton, Box} from "@mui/material";
import {
    NotificationBadgeSx,
    NotificationsButtonSx,
    NotificationsIconSx
} from "./NotificationsButton.SxStyled";
import NotificationsButtonProps from "./NotificationsButton.Props";

const NotificationsButton = (props: NotificationsButtonProps) => {
    const {onClick} = props;

    return (
        <IconButton
            size="large"
            sx={NotificationsButtonSx}
            onClick={onClick}
        >
            <Badge
                badgeContent={<Box sx={NotificationBadgeSx}>1</Box>}
                color="secondary"
            >
                <Notifications sx={NotificationsIconSx}/>
            </Badge>
        </IconButton>
    );
};

export default NotificationsButton;