import React from 'react';
import DatingsGroupProps from "./DatingsGroup.Props";
import {Avatar, Grid, Paper, Typography} from "@mui/material";
import {DatingGroupSx, GroupAvatarSx} from "./DatingGroup.sxStyled";
import CustomLink from "../../../../components/CustomLink";

const DatingsGroup = (props: DatingsGroupProps) => {
    const {groupName, avatar, url} = props;

    return (
        <Grid item sx={DatingGroupSx}>
            <CustomLink to={url}>
                <Avatar src={avatar} sx={GroupAvatarSx}/>
                <Typography variant="h6">{groupName}</Typography>
            </CustomLink>
        </Grid>
    );
};

export default DatingsGroup;