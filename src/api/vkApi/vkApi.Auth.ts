import Session from "./vkApi.Session";

interface Auth {
    session: Session;
    status: "connected" | "not_authorized" | "unknown";
    settings?: number;
}

export default Auth;