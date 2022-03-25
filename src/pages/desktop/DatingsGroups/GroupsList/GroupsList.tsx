import React from 'react';
import DatingsGroup from "./DatingsGroup";
import {Box, CircularProgress, Typography} from "@mui/material";
import useDatingsGroups from "../../../../hooks/datingsGroups";
import {GroupsListSx} from "./GroupsList.SxStyled";
import GroupsCount from "./GroupsCount";
import searchGroups from "./GroupsList.searchGroup";

const GroupsList = () => {
    const groups = useDatingsGroups();
    const searchedGroups = searchGroups(groups);

    return (
        <>
            {groups.length ? <>
                <GroupsCount count={searchedGroups.length}/>
                <Box sx={GroupsListSx}>
                    {searchedGroups.map(
                        group => <DatingsGroup
                            groupName={group.name}
                            avatar={group.photo_100 ?? ""}
                            url={`https://vk.com/${group.screen_name}`}
                        />
                    )}
                </Box>
            </>
            : <CircularProgress sx={{margin: "auto"}}/>}
        </>
    );
};

export default GroupsList;