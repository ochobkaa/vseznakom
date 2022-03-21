import {useSelector} from "react-redux";
import {AppState} from "../store";
import useAppSelector from "./appSelector";

const useAuthState = () => {
    const token = useAppSelector(state=> state.auth.token);
    return Boolean(token);
}

export default useAuthState;