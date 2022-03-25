import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import DatingsGroupsSliceState from "./datingsGroupsSlice.State";
import {GroupsGroup} from "@vkontakte/api-schema-typescript";

const initialState : DatingsGroupsSliceState = {
    datingsGroups: []
}

const datingsGroupsSlice = createSlice({
    name: "datingsGroups",
    initialState: initialState,
    reducers: {
        setDatingsGroups(state, action: PayloadAction<GroupsGroup[]>) {
            state.datingsGroups = action.payload;
        }
    }
});

const DatingsGroupsSlice = {
    actions: datingsGroupsSlice.actions,
    reducer: datingsGroupsSlice.reducer,
}

export default DatingsGroupsSlice;