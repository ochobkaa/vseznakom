import React from 'react';
import useDatingsGroups from "../../../hooks/datingsGroups";
import {Grid} from "@mui/material";
import DatingsGroup from "./DatingsGroup";

const DatingsGroups = () => {
    const groups = useDatingsGroups();

    return (
        <>
            <Grid>
                {groups.map(
                    group => <DatingsGroup
                        groupName={group.name}
                        avatar={group.photo_200 ?? ""}
                        url={`vk.com/${group.type === "page" ? "public" : group.type}${group.id}`}
                    />
                )}
            </Grid>
        </>
    );
};

export default DatingsGroups;