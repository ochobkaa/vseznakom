interface UserActionsMenuProps {
    open: boolean;
    onLogout: () => void;
    onClose: () => void;
    anchorEl: HTMLElement | null;
}

export default UserActionsMenuProps