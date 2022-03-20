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

    let dialogsData = [
        { id: '1', name: 'user 1' },
        { id: '2', name: 'user 2' },
        { id: '3', name: 'user 3' },
        { id: '4', name: 'user 4' },
        { id: '5', name: 'user 5' }
    ]

    let messagesData = [
        { id: '1', message: 'message 1' },
        { id: '2', message: 'message 2' },
        { id: '3', message: 'message 3' },
        { id: '4', message: 'message 4' },
        { id: '5', message: 'message 5' }
    ]

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <DialogsItems_1 name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItems_1 name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogsItems_1 name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogsItems_1 name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogsItems_1 name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div className={d.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} />
            </div>
        </div>
    )
}

export default Dialogs;