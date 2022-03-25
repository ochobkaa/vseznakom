import React from 'react';
import {TextField} from "@mui/material";
import GroupsList from "./GroupsList";
import {GroupSearchSx} from "./DatingsGroups.SxStyled";
import Search from "@mui/icons-material/Search";

const DatingsGroups = () => {
    return (
        <>
            <TextField
                variant="outlined"
                label="Найти..."
                sx={GroupSearchSx}
                InputProps={{
                    startAdornment: <Search/>
                }}
            />
            <GroupsList/>
        </>
    );
};

export default DatingsGroups;