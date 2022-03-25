import React from 'react';
import DatingsGroup from "./DatingsGroup";
import {Box} from "@mui/material";
import useDatingsGroups from "../../../../hooks/datingsGroups";
import {GroupsListSx} from "./GroupsList.SxStyled";

const GroupsList = () => {
    const groups = useDatingsGroups();

    return (
        <Box sx={GroupsListSx}>
            {groups.map(
                group => <DatingsGroup
                    groupName={group.name}
                    avatar={group.photo_100 ?? ""}
                    url={`https://vk.com/${group.screen_name}`}
                />
            )}
        </Box>
    );
};

export default GroupsList;