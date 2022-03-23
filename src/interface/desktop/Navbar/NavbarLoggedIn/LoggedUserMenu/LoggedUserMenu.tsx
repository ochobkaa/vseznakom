import React, {useContext, useState} from 'react';
import UserMenuButton from "./UserMenuButton";
import UserActionsMenu from "./UserActionsMenu";
import LoginCallbacksContext from "../../Navbar.Context.LoginCallbacks";
import useLoggedUser from "../../../../../hooks/loggedUser";

const LoggedUserMenu = () => {
    const {onLogout} = useContext(LoginCallbacksContext);

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const menuIsOpen = Boolean(anchorEl);

    const userData = useLoggedUser();
    console.log(userData ? userData : "ДА СУКА ГОВНА ПОЖУЙ НАХУЙ С НУЛЛОМ СВОИМ НАХУЙ СУКА ПИДОРАС")

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
                avatarSrc={userData.photo_100 ?? ""}
                lastName={userData.last_name}
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