import React from 'react';
import LeftMenuLinksProps from "./LeftMenuLinks.Props";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import CustomLink from "../../../../components/CustomLink";

const LeftMenuLink = (props: LeftMenuLinksProps) => {
    const {to, text, icon} = props;

    return (
        <CustomLink to={to}>
            <ListItemButton>
                {Boolean(icon) && <ListItemIcon>
                    {icon}
                </ListItemIcon>}
                <ListItemText>
                    {text}
                </ListItemText>
            </ListItemButton>
        </CustomLink>
    );
};

export default LeftMenuLink;