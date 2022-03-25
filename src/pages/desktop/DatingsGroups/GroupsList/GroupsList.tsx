import React from 'react';
import DatingsGroup from "./DatingsGroup";
import {Box, Typography} from "@mui/material";
import useDatingsGroups from "../../../../hooks/datingsGroups";
import {GroupsCountSx, GroupsListSx} from "./GroupsList.SxStyled";

const GroupsList = () => {
    const groups = useDatingsGroups();

    return (
        <>
            <Typography variant="h6" sx={GroupsCountSx}>
                {groups.length} групп
            </Typography>
            <Box sx={GroupsListSx}>
                {groups.map(
                    group => <DatingsGroup
                        groupName={group.name}
                        avatar={group.photo_100 ?? ""}
                        url={`https://vk.com/${group.screen_name}`}
                    />
                )}
            </Box>
        </>
    );
};

export default GroupsList;