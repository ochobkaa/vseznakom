import React from 'react';
import DatingsGroupProps from "./DatingsGroup.Props";
import {Avatar, Grid, Paper, Typography} from "@mui/material";
import {DatingGroupSx, GroupAvatarSx, GroupNameSx} from "./DatingGroup.sxStyled";

const DatingsGroup = (props: DatingsGroupProps) => {
    const {groupName, avatar, url} = props;

    return (
        <Grid item xs sx={DatingGroupSx}>
            <a href={url} style={{ display: "contents", color: "inherit", textDecoration: "none"}}>
                <Avatar src={avatar} sx={GroupAvatarSx}/>
                <Typography variant="h6" sx={GroupNameSx}>{groupName}</Typography>
            </a>
        </Grid>
    );
};

export default DatingsGroup;