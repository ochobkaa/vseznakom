import React from 'react';
import {IconButton} from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import {SettingsButtonSx, SettingsIconSx} from "./SettingsButton.SxStyled";

const SettingsButton = () => {
    return (
        <IconButton
            sx={SettingsButtonSx}
            size="large"
        >
            <Settings sx={SettingsIconSx}/>
        </IconButton>
    );
};

export default SettingsButton;