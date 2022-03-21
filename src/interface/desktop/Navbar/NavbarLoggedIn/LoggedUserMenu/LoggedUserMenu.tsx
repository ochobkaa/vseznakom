import React, {useContext, useState} from 'react';
import UserMenuButton from "./UserMenuButton";
import UserActionsMenu from "./UserActionsMenu";
import LoginCallbacksContext from "../../Navbar.Context.LoginCallbacks";
import VkApi from "../../../../../api/vkApi";
import useToken from "../../../../../hooks/token";
import useUserData from "./LoggedUserMenu.useUserData";

const LoggedUserMenu = () => {
    const {onLogout} = useContext(LoginCallbacksContext);

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const menuIsOpen = Boolean(anchorEl);

    const userData = useUserData();

    const onUserMenuButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const onClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            {userData && <UserMenuButton
                onClick={onUserMenuButtonClick}
                avatarSrc={userData.avatarSrc}
                lastName={userData.lastName}
            />}
            <UserActionsMenu
                open={menuIsOpen}
                onLogout={onLogout}
                onClose={onClose}
                anchorEl={anchorEl}
            />
        </>
    );
};

export default LoggedUserMenu;