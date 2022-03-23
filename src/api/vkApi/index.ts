import Session from "./vkApi.Session";
import MD5 from 'md5-es';
import LoggedUserData from "./vkApi.LoggedUserData";
import Auth from "./vkApi.Auth";

type MethodParams = {
    [p: string]: string | number,
    v: string
};

class VkApi {
    isAuth = false;
    status: Auth["status"] = "unknown";
    userData: LoggedUserData | null = null;

    private checkSession(auth: Auth, onCheck?: (isAuth: boolean) => void) {
        this.status = auth.status;
        if (!auth.session) {
            onCheck && onCheck(false);
            return;
        }

        const session = auth.session;
        const sessionString = `expire=${session.expire}mid=${session.mid}secret=${session.secret}sid=${session.sid}${process.env.REACT_APP_VK_APP_KEY}`;
        const sessionHash = MD5.hash(sessionString);

        this.isAuth = sessionHash === session.sig;
        onCheck && onCheck(this.isAuth);

        console.log(auth);
        console.log(session.sig);
        console.log(sessionHash);
        console.log(this.isAuth);
        console.log(process.env.REACT_APP_VK_APP_KEY ? "заебись ключ есть" : "ДА ЧТОБЫ МАТЬ ТВОЯ СОСАЛА ДО КОНЦА ДНЕЙ АНДЕФАЙНЕД ЕБУЧИЙ")

        this.isAuth && (this.userData = session.user);
    }

    private resetAuth (auth: Auth, onReset?: (isAuth: boolean) => void) {
        this.isAuth = false;
        this.userData = null;
        this.status = auth.status;

        onReset && onReset(false);
    }

    login(onLogin?: (isAuth: boolean) => void) {
        const loginCallback = (auth: Auth) => this.checkSession(auth, onLogin)

        // @ts-ignore
        VK.Auth.login(loginCallback, 270336);

        return this.status;
    }

    getLoginStatus() {
        // @ts-ignore
        VK.Auth.getLoginStatus(this.checkSession);

        return this.status;
    }

    logout(onLogout?: (isAuth: boolean) => void) {
        const logoutCallback = (auth: Auth) => this.checkSession(auth, onLogout)

        // @ts-ignore
        VK.auth.logout(logoutCallback);

        return this.status;
    }

    call<Response>(methodName: string, callback: (response: Response) => void, params?: MethodParams) {
        // @ts-ignore
        VK.Api.call(methodName, params, callback);
    }

    subscribe(eventName: string, handler: () => void) {
        // @ts-ignore
        VK.Observer.subscribe(eventName, handler);
    }

    unsubscribe(eventName: string, handler: () => void) {
        // @ts-ignore
        VK.Observer.unsubscribe(eventName, handler);
    }
}

export default new VkApi();