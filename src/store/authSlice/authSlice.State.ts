import LoggedUser from "./authSlice.LoggedUser";

export default interface AuthSliceState {
    loggedUser: LoggedUser | null;
}