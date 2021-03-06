import React from 'react';
import { Link } from "react-router-dom";

import style from './HeaderLoginAndSignup.module.sass';

function HeaderLoginAndSignup(props) {
    const link = props.children;
    return (
        <div className={style.header}>
            <Link to={'/'}>
                <div className={style.logo} />
            </Link>
            <div className={style.loginBottom}>
                <Link to={`/${link.toLowerCase()}`}>{link}</Link>
            </div>
        </div>
    )
}
export default HeaderLoginAndSignup;
