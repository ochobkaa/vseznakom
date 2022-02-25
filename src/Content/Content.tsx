import React from 'react';
import Navbar from "../interface/desktop/Navbar";
import Page from "../interface/desktop/Page";
import {Box} from "@mui/material";
import {BackgroundSx} from "./Content.SxStyled";
import LeftMenu from "../interface/desktop/LeftMenu";

const Content = () => {
    return (
        <>
            <Navbar/>
            <Box sx={BackgroundSx}>
                <LeftMenu/>
                <Page/>
            </Box>
        </>
    );
};

export default Content;