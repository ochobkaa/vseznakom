import React from 'react';
import {GroupSearchSx} from "./SearchInput.SxStyled";
import Search from "@mui/icons-material/Search";
import {TextField} from "@mui/material";
import useAppDispatch from "../../../../hooks/appDispatch";
import DatingsGroupsSlice from "../../../../store/datingsGroupsSlice";

const SearchInput = () => {
    const dispatch = useAppDispatch();
    const actions = DatingsGroupsSlice.actions;

    const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(actions.search(event.currentTarget.value))
    }

    return (
        <TextField
            variant="outlined"
            placeholder="Найти..."
            sx={GroupSearchSx}
            InputProps={{
                startAdornment: <Search sx={{mr: "4px"}}/>
            }}
            onChange={onInput}
        />
    );
};

export default SearchInput;