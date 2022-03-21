import useAppSelector from "./appSelector";

class TokenError extends Error {}

const useToken = () => {
    const token = useAppSelector(state => state.auth.token?.accessToken);

    if (!token) throw new TokenError("Access token is not received");

    return token;
}

export default useToken;