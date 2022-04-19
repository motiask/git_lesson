import React from 'react';
import { Navigate } from 'react-router';
import DialogsItems from './DialogItem/DialogsItem';
import d from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    /*перезапись массива под новые теги*/
    let DialogsElements = props.DialogsPage.dialogsData.map((dialog) => (<DialogsItems nameD={dialog.nameD} key={dialog.id} id={dialog.id} />))

    /*перезапись массива под новые теги*/
    let MessageElements = props.DialogsPage.messagesData.map((message) => (<Message message={message.message} key={message.id} />))

    let onNewMessageText = (e) => {
        props.onNewMessageText_callback(e.target.value)
    };

    let onSendMessageClick = () => {
        props.onSendMessageClick_callback();
    }

    //-68-redirect
    if (!props.isAuth) return <Navigate to={'/login'} />

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={d.messages}>
                <div>
                    {MessageElements}
                </div>
                <div>
                    <div><textarea onChange={onNewMessageText} value={props.DialogsPage.newMessageText} placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>SendMessage</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;