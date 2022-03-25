import React from 'react';
import {TextField, Typography} from "@mui/material";
import GroupsList from "./GroupsList";
import {GroupSearchSx} from "./DatingsGroups.SxStyled";
import Search from "@mui/icons-material/Search";

const DatingsGroups = () => {
    return (
        <>
            <TextField
                variant="outlined"
                placeholder="Найти..."
                sx={GroupSearchSx}
                InputProps={{
                    startAdornment: <Search sx={{mr: "4px"}}/>
                }}
            />
            <GroupsList/>
        </>
    );
};

export default DatingsGroups;