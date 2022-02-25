export default interface NotificationsMenuProps {
    open : boolean;
    onClose: () => void;
    anchorEl: HTMLElement | null;
}