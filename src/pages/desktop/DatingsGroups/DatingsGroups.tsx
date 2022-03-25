import React from 'react';
import useDatingsGroups from "../../../hooks/datingsGroups";
import {Grid} from "@mui/material";
import DatingsGroup from "./DatingsGroup";

const DatingsGroups = () => {
    const groups = useDatingsGroups();
    console.log(groups);

    return (
        <>
            <Grid container spacing={3} columns={{ sm: 3, md: 4, lg: 5, xl: 6 }}>
                {groups.map(
                    group => <DatingsGroup
                        groupName={group.name}
                        avatar={group.photo_100 ?? ""}
                        url={`https://vk.com/${group.screen_name}`}
                    />
                )}
            </Grid>
        </>
    );
};

export default DatingsGroups;