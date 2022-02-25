import React, {useContext} from 'react';
import {Button} from "@mui/material";
import {LoginButtonSx} from "./LoginButton.SxStyled";
import LoginCallbacksContext from "../../Navbar.Context.LoginCallbacks";

const LoginButton = () => {
    const {onLogin} = useContext(LoginCallbacksContext);

    return (
        <Button
            variant="text"
            sx={LoginButtonSx}
            onClick={onLogin}
        >
            Вход
        </Button>
    );
};

export default LoginButton;