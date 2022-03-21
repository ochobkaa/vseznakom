import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import vkApi from "../api/vkApi";

const Store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        [vkApi.reducerPath]: vkApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(vkApi.middleware)
});

export type AppState = ReturnType<typeof Store.getState>;
export type AppStore = typeof Store;
export type AppDispatch = AppStore["dispatch"];
export default Store;