import {ReactNode} from "react";

export default interface LeftMenuLinksProps {
    to: string;
    text?: ReactNode;
    icon?: ReactNode;
}