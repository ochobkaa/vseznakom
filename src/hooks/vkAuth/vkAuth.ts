import {useEffect, useState} from "react";
import Token from "./vkAuth.Token";
import getAuth from "./vkAuth.getAuth";
import TokenError from "./vkAuth.TokenError";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
import AuthSlice from "../../store/authSlice";
import checkReferrer from "./vkAuth.checkReferrer";

const useVkAuth = () => {
    const [error, setError] = useState<TokenError | null>(null);

    const dispatch = useDispatch<AppDispatch>();
    const actions = AuthSlice.actions;

    const setToken = (token: Token) => {
        dispatch(actions.login(token))
    }

    const onLoad = () => {
        if (!checkReferrer()) return;

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
            window.addEventListener("load", onLoad)

            return () => window.removeEventListener("load", onLoad)
        }
    )

    return error;
}

export default useVkAuth;