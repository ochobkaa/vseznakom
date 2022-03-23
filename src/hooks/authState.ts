import {useSelector} from "react-redux";
import {AppState} from "../store";
import useAppSelector from "./appSelector";

const useAuthState = () => {
    return useAppSelector(state => state.auth.isAuth);
}

export default useAuthState;