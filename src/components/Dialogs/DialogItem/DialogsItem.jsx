import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './../Dialogs.module.css';

const DialogsItems = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={`${d.dialog} ${d.active}`}>
        <NavLink to={path}>{props.nameD}</NavLink>
    </div>
}

export default DialogsItems;