import Token from "../../hooks/vkAuth/vkAuth.Token";
import LoggedUser from "./authSlice.LoggedUser";

export default interface AuthSliceState {
    token: Token | null;
    loggedUser: LoggedUser | null;
}