import {useEffect, useState} from "react";
import Token from "./vkAuth.Token";
import getAuth from "./vkAuth.getAuth";
import TokenError from "./vkAuth.TokenError";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
import AuthSlice from "../../store/authSlice";

const useVkAuth = () => {
    const [error, setError] = useState<TokenError | null>(null);

    const dispatch = useDispatch<AppDispatch>();
    const actions = AuthSlice.actions;

    const setToken = (token: Token) => {
        dispatch(actions.login(token))
    }

    const onHashChange = () => {
        const response = getAuth();

        if (response.tokenDidReceived) {
            const receivedToken = response.response as Token;
            setToken(receivedToken);
        }
        else {
            const error = response.response as TokenError;
            setError(error);
        }
    };

    useEffect(
        () => {
            window.addEventListener("hashchange", onHashChange)

            return () => window.removeEventListener("hashchange", onHashChange)
        }
    )

    return error
}

export default useVkAuth;