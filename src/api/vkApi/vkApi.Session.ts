import LoggedUserData from "./vkApi.LoggedUserData";

interface Session {
    expire: number;
    mid: number;
    secret: string;
    sid: string;
    sig: string;
    user: LoggedUserData;
}

export default Session;