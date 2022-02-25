import Token from "./vkAuth.Token";
import TokenError from "./vkAuth.TokenError";

interface AuthResponse {
    tokenDidReceived: boolean;
    response: Token | TokenError;
}

export default AuthResponse;