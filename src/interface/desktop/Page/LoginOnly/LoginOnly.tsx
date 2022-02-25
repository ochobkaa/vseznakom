import React from 'react';
import LoginOnlyProps from "./LoginOnly.Props";
import NeedLogin from "../../../../pages/desktop/NeedLogin";

const LoginOnly = (props: LoginOnlyProps) => {
    const {isAuth, page} = props;

    return (
        <>
            {isAuth
                ? page
                : <NeedLogin/>
            }
        </>
    );
};

export default LoginOnly;