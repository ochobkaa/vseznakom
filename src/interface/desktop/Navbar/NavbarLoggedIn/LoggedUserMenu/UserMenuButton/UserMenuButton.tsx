import React from 'react';
import {Avatar, Button} from "@mui/material";
import {ButtonAvatarSx, UserMenuButtonSx} from "./UserMenuButton.SxStyled";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import UserMenuButtonProps from "./UserMenuButton.Props";

const UserMenuButton = (props: UserMenuButtonProps) => {
    const {onClick} = props;

    return (
        <Button
            variant="text"
            sx={UserMenuButtonSx}
            startIcon={
                <Avatar sx={ButtonAvatarSx}/>
            }
            endIcon={
                <ArrowDropDown/>
            }
            onClick={onClick}
        >
            Мария
        </Button>
    );
};

export default UserMenuButton;