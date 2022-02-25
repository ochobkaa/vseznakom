import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import AuthSlice from "./authSlice";
import RootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware({});

const Store = configureStore({
    reducer: {
        auth: AuthSlice.reducer
    },

    middleware: (getDefaultMiddleware) => {
        const defaultMiddleware = getDefaultMiddleware({thunk: false});

        return defaultMiddleware.concat(sagaMiddleware);
    }
});

sagaMiddleware.run(RootSaga);

export type AppState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch;
export default Store;