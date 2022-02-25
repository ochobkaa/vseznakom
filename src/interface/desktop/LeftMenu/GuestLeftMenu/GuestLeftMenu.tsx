import React from 'react';
import {Divider, List} from "@mui/material";
import Home from "@mui/icons-material/Home";
import LeftMenuLink from "../LeftMenuLink";
import {
    AboutLink,
    FeedbackLink,
    MainPageLink,
} from "../../../../etc/links";
import {MenuDividerSx} from "./GuestLeftMenu.SxStyled";

const GuestLeftMenu = () => {
    return (
        <>
            <List component="nav">
                <LeftMenuLink
                    to={MainPageLink}
                    icon={<Home/>}
                    text="Главная"
                />

                <Divider sx={MenuDividerSx}/>

                <LeftMenuLink
                    to={AboutLink}
                    text="О сайте"
                />

                <LeftMenuLink
                    to={FeedbackLink}
                    text="Обратная связь"
                />
            </List>
        </>
    );
};

export default GuestLeftMenu;