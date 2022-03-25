import React from 'react';
import {Typography} from "@mui/material";
import {GroupsCountSx} from "./GroupsCount.SxStyled";
import GroupsCountProps from "./GroupsCount.Props";
import getPronounedGroup from "./GroupsCount.getPronounedGroup";

const GroupsCount = (props: GroupsCountProps) => {
    const {count} = props;
    const pronounedGroup = getPronounedGroup(count);
    const pronounedSearchStatus = getPronounedGroup(count);

    return (
        <Typography variant="h4" sx={GroupsCountSx}>
            {pronounedSearchStatus} {count} {pronounedGroup}
        </Typography>
    );
};

export default GroupsCount;