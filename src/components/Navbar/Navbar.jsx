import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

console.log(s);

const Navbar = () => {
  return (
    <nav className={s.nav_1}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/profile' className = {navData => navData.isActive ? s.activeLink : s.item}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' className = {navData => navData.isActive ? s.activeLink : s.item}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
    </nav>)
}

export default Navbar