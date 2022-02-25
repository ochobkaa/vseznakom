import {ReactNode} from "react";

export default interface LoginOnlyProps {
    isAuth: boolean;
    page: ReactNode;
}