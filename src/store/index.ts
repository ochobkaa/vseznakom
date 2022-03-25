import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import DatingsGroupsSlice from "./datingsGroupsSlice";

const Store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        datingsGroups: DatingsGroupsSlice.reducer
    }
});

export type AppState = ReturnType<typeof Store.getState>;
export type AppStore = typeof Store;
export type AppDispatch = AppStore["dispatch"];
export default Store;