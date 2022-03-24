import {useEffect} from "react";
import VkApi from "../../../api/vkApi";
import {UsersGetResponse} from "@vkontakte/api-schema-typescript";
import LoggedUser from "../../../store/authSlice/authSlice.LoggedUser";
import VK_API_VERSION from "../../../etc/vkApiVersion";
import useAppDispatch from "../../../hooks/appDispatch";
import AuthSlice from "../../../store/authSlice";

const useLogin = () => {
    const dispatch = useAppDispatch();
    const actions = AuthSlice.actions;

    useEffect(
        () => {
            VkApi.subscribe("auth.login", onVkApiLoginEvent);
            VkApi.subscribe("auth.logout", onVkApiLogoutEvent);

            return () => {
                VkApi.unsubscribe("auth.login", onVkApiLoginEvent);
                VkApi.unsubscribe("auth.logout", onVkApiLogoutEvent);
            }
        },
        []
    );

    const dispatchLoggedUser = (responseArr: {response: UsersGetResponse}) => {
        const response = responseArr.response[0];
        const loggedUser : LoggedUser = {
            id: response.id,
            first_name: response.first_name,
            last_name: response.last_name,
            city: response.city,
            status: response.status,
            photo_100: response.photo_100,
            photo_400: response.photo_400
        }
        dispatch(actions.setLoggedUser(loggedUser));
    }

    const onVkApiLoginEvent = () => {
        dispatch(actions.login());
        console.log(VkApi.userData)

        VkApi.userData && VkApi.call(
            "users.get",
            dispatchLoggedUser,
            {
                user_ids: VkApi.userData.id,
                fields: "city,status,photo_100,photo_400",
                v: VK_API_VERSION
            }
        );
    }

    const onVkApiLogoutEvent = () => {
        dispatch(actions.logout());
    }
}

export default useLogin;