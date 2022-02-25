import React, {useContext, useState} from 'react';
import UserMenuButton from "./UserMenuButton";
import UserActionsMenu from "./UserActionsMenu";
import LoginCallbacksContext from "../../Navbar.Context.LoginCallbacks";

const LoggedUserMenu = () => {
    const {onLogout} = useContext(LoginCallbacksContext);

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const menuIsOpen = Boolean(anchorEl);

    const onUserMenuButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const onClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <UserMenuButton onClick={onUserMenuButtonClick}/>
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