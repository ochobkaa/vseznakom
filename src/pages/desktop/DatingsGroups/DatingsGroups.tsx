import React from 'react';
import useDatingsGroups from "../../../hooks/datingsGroups";
import {Box, Grid} from "@mui/material";
import DatingsGroup from "./DatingsGroup";
import {DatingsGroupsSx} from "./DatingsGroups.SxStyled";

const DatingsGroups = () => {
    const groups = useDatingsGroups();

    return (
        <>
            <Box sx={DatingsGroupsSx}>
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

export default DatingsGroups;