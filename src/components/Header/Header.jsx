import React from 'react';
import { NavLink } from 'react-router-dom';
import h from './Header.module.css';

const Header = (props) => {
    return (
        <header className={h.header_1}>
            <img src='https://www.logodesign.net/images/nature-logo.png' />
            <div className={h.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>login</NavLink>
                }
            </div>
        </header>)
}

export default Header