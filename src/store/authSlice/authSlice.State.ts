import Token from "../../hooks/vkAuth/vkAuth.Token";

export default interface AuthSliceState {
    token: Token | null;
}