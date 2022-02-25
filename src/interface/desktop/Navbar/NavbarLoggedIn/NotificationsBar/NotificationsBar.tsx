import React, {useState} from 'react';
import NotificationsButton from "./NotificationsButton";
import NotificationsMenu from "./NotificationsMenu";

const NotificationsBar = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const showNotificationsMenu = Boolean(anchorEl);

    const onNotificationsButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const onNotificationsMenuClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <NotificationsButton onClick={onNotificationsButtonClick}/>
            <NotificationsMenu
                open={showNotificationsMenu}
                onClose={onNotificationsMenuClose}
                anchorEl={anchorEl}
            />
        </>
    );
};

export default NotificationsBar;