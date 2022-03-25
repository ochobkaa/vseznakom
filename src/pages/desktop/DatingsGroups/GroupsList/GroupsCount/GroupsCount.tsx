import React from 'react';
import {Typography} from "@mui/material";
import {GroupsCountSx} from "./GroupsCount.SxStyled";
import GroupsCountProps from "./GroupsCount.Props";
import getPronoun from "./GroupsCount.getPronoun";

const GroupsCount = (props: GroupsCountProps) => {
    const {count} = props;
    const pronoun = getPronoun(count);

    return (
        <Typography variant="h5" sx={GroupsCountSx}>
            {count} групп{pronoun}
        </Typography>
    );
};

export default GroupsCount;