import {useSelector} from "react-redux";
import {AppState} from "../store";

const useAuthState = () => {
    const token = useSelector((state : AppState) => state.auth.token);
    return Boolean(token);
}

export default useAuthState;