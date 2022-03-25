import React from 'react';
import {Typography} from "@mui/material";
import {GroupsCountSx} from "./GroupsCount.SxStyled";
import GroupsCountProps from "./GroupsCount.Props";
import getPronounedGroup from "./GroupsCount.getPronounedGroup";
import getPronounedSearchStatus from "./GroupsCount.getPronounedSearchStatus";

const GroupsCount = (props: GroupsCountProps) => {
    const {count} = props;
    const pronounedGroup = getPronounedGroup(count);
    const pronounedSearchStatus = getPronounedSearchStatus(count);

    return (
        <Typography variant="h4" sx={GroupsCountSx}>
            {pronounedSearchStatus} {count} {pronounedGroup}
        </Typography>
    );
};

export default GroupsCount;