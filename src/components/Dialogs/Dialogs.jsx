import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';

const DialogsItems_1 = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={`${d.dialog} ${d.active}`}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={d.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <DialogsItems_1 name='user 1' id='1' />
                <DialogsItems_1 name='user 2' id='2' />
                <DialogsItems_1 name='user 3' id='3' />
                <DialogsItems_1 name='user 4' id='4' />
                <DialogsItems_1 name='user 5' id='5' />
            </div>
            <div className={d.messages}>
                <Message message = 'message 1'/>
                <Message message = 'message 2'/>
                <Message message = 'message 3'/>
            </div>
        </div>
    )
}

export default Dialogs;