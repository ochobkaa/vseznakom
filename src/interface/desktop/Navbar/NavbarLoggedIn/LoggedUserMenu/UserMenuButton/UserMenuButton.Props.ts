import React from "react";

export default interface UserMenuButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    avatarSrc: string;
    lastName: string;
}