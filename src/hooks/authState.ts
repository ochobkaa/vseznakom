import {useSelector} from "react-redux";
import {AppState} from "../store";
import useAppSelector from "./appSelector";
import VkApi from "../api/vkApi";

const useAuthState = () => {
    return VkApi.isAuth;
}

export default useAuthState;