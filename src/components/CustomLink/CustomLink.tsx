import React from 'react';
import {Link} from 'react-router-dom';
import CustomLinkProps from "./CustomLink.Props";
import style from './CustomLink.module.css';

const CustomLink = (props: CustomLinkProps) => {
    const {to, children} = props;

    return (
        <Link to={to} className={style.a}>
            {children}
        </Link>
    );
};

export default CustomLink;