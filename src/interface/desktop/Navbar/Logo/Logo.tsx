import React from 'react';
import {LogoSx} from "./Logo.SxStyled";
import {Typography} from "@mui/material";

const Logo = () => {
    return (
        <Typography sx={LogoSx} aria-label="logo">
            всезнаком
        </Typography>
    );
};

export default Logo;