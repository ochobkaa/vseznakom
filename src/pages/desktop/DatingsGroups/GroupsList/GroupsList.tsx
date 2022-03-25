import React from 'react';
import DatingsGroup from "./DatingsGroup";
import {Box} from "@mui/material";
import useDatingsGroups from "../../../../hooks/datingsGroups";
import {GroupsListSx} from "./DatingsGroup/GroupsList.SxStyled";
import style from "./GroupsList.module.css";

const GroupsList = () => {
    const groups = useDatingsGroups();

    return (
        <Box sx={GroupsListSx} style={style}>
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