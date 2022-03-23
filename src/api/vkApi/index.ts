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

    private checkSession(auth: Auth) {
        this.status = auth.status;
        if (!auth.session) return;

        const session = auth.session;
        const sessionString = `expire=${session.expire}mid=${session.mid}secret=${session.secret}sid=${session.sid}${process.env.REACT_APP_VK_APP_KEY}`;
        const sessionHash = MD5.hash(sessionString);

        this.isAuth = sessionHash === session.sig;

        this.isAuth && (this.userData = session.user);
    }

    private resetAuth (auth: Auth) {
        this.isAuth = false;
        this.userData = null;
        this.status = auth.status;
    }

    login() {
        // @ts-ignore
        VK.Auth.login(this.checkSession, 270336);

        return this.status;
    }

    getLoginStatus() {
        // @ts-ignore
        VK.Auth.getLoginStatus(this.checkSession);

        return this.status;
    }

    logout() {
        // @ts-ignore
        VK.auth.logout(this.resetAuth);

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