import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';

const DialogsItems = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={`${d.dialog} ${d.active}`}>
        <NavLink to={path}>{props.nameD}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={d.message}>{props.message}</div>
}



const Dialogs = (props) => {

    let dialogsData = [
        { id: '1', nameD: 'user 1' },
        { id: '2', nameD: 'user 2' },
        { id: '3', nameD: 'user 3' },
        { id: '4', nameD: 'user 4' },
        { id: '5', nameD: 'user 5' }
    ]

    let messagesData = [
        { id: '1', message: 'message 1' },
        { id: '2', message: 'message 2' },
        { id: '3', message: 'message 3' },
        { id: '4', message: 'message 4' },
        { id: '5', message: 'message 5' }
    ]

    let DialogsElements = dialogsData.map((dialog) => (<DialogsItems nameD={dialog.nameD} id={dialog.id} />))

    let MessageElements = messagesData.map((message) =>(<Message message={message.message} />))

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={d.messages}>
                {MessageElements}
             </div>
        </div>
    )
}

export default Dialogs;