import LoggedUser from "./authSlice.LoggedUser";

export default interface AuthSliceState {
    isAuth: boolean;
    loggedUser: LoggedUser | null;
}