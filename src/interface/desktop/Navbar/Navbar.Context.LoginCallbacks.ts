import {createContext} from "react";

interface LoginCallbacks {
    onLogin: () => void;
    onLogout: () => void;
}

const Default = {
    onLogin() {},
    onLogout() {}
}

const LoginCallbacksContext = createContext<LoginCallbacks>(Default);

export default LoginCallbacksContext;