import AuthResponse from "./vkAuth.AuthResponse";
import InvalidAuthResponseError from "./vkAuth.InvalidAuthResponseError";

const getAuth = () : AuthResponse => {
    const urlStr = window.location.href;
    const urlStrNoHash = urlStr.replace('#', '?');
    const urlNoHash = new URL(urlStrNoHash);

    const params = urlNoHash.searchParams;

    const accessToken = params.get("access_token");
    const tokenDidReceived = Boolean(accessToken);

    let response;

    if (tokenDidReceived) {
        const expiresIn = params.get("expires_in");
        const userId = params.get("user_id");
        const state = params.get("state");

        if (!accessToken || !expiresIn || !userId)
            throw new InvalidAuthResponseError("Invalid response");

        response = {accessToken, expiresIn, userId, state}
    }
    else {
        const error = params.get("error");
        const errorDescription = params.get("error_description");

        if (!error || !errorDescription)
            throw new InvalidAuthResponseError("Invalid response");

        response = {error, errorDescription}
    }

    return {tokenDidReceived, response}
}

export default getAuth;