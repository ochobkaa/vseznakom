import {useEffect} from "react";
import VkApi from "../../../api/vkApi";
import {UsersGetResponse} from "@vkontakte/api-schema-typescript";
import LoggedUser from "../../../store/authSlice/authSlice.LoggedUser";
import VK_API_VERSION from "../../../etc/vkApiVersion";
import useAppDispatch from "../../../hooks/appDispatch";
import AuthSlice from "../../../store/authSlice";
import {LOCAL_STORAGE_LOGGED_USER} from "../../../etc/localStorage";

const useLogin = () => {
    const dispatch = useAppDispatch();
    const actions = AuthSlice.actions;

    useEffect(
        () => {
            window.addEventListener("load", onLoad);
            VkApi.subscribe("auth.login", onVkApiLoginEvent);
            VkApi.subscribe("auth.logout", onVkApiLogoutEvent);

            return () => {
                window.removeEventListener("load", onLoad);
                VkApi.unsubscribe("auth.login", onVkApiLoginEvent);
                VkApi.unsubscribe("auth.logout", onVkApiLogoutEvent);
            }
        },
        []
    );

    const onLoad = () => {
        const loginStatus = VkApi.getLoginStatus();
        const loggedUserStr = window.localStorage.getItem(LOCAL_STORAGE_LOGGED_USER);

        if (loggedUserStr && loginStatus === "connected") {
            dispatch(actions.login());

            const loggedUser = JSON.parse(loggedUserStr) as LoggedUser;
            dispatch(actions.setLoggedUser(loggedUser));
        }
        else if (!loggedUserStr && loginStatus === "connected") {
            onVkApiLoginEvent();
        }
        else if (loggedUserStr && loginStatus !== "connected") {
            onVkApiLogoutEvent();
        }
    }

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

        window.localStorage.setItem(LOCAL_STORAGE_LOGGED_USER, JSON.stringify(loggedUser));
    }

    const onVkApiLoginEvent = () => {
        dispatch(actions.login());

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

        window.localStorage.removeItem(LOCAL_STORAGE_LOGGED_USER);
    }
}

export default useLogin;