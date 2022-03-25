import React from 'react';
import DatingsGroupProps from "./DatingsGroup.Props";
import {Avatar, Box, Typography} from "@mui/material";
import {DatingsGroupSx, GroupAvatarSx, GroupNameSx} from "./DatingGroup.sxStyled";

const DatingsGroup = (props: DatingsGroupProps) => {
    const {groupName, avatar, url} = props;

    return (
        <Box sx={DatingsGroupSx}>
            <a href={url} style={{ display: "contents", color: "inherit", textDecoration: "none"}}>
                <Avatar src={avatar} sx={GroupAvatarSx}/>
                <Typography variant="h6" sx={GroupNameSx}>{groupName}</Typography>
            </a>
        </Box>
    );
};

export default DatingsGroup;