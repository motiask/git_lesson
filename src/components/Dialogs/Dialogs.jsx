import React from 'react';
import DialogsItems from './DialogItem/DialogsItem';
import d from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    debugger
    /*перезапись массива под новые теги*/
    let DialogsElements = props.DialogsPage.dialogsData.map((dialog) => (<DialogsItems nameD={dialog.nameD} id={dialog.id} />))

    /*перезапись массива под новые теги*/
    let MessageElements = props.DialogsPage.messagesData.map((message) => (<Message message={message.message} />))

    let onNewMessageText = (e) => {
        props.onNewMessageText_callback(e.target.value)
    };

    let onSendMessageClick = () => {
        props.onSendMessageClick_callback();
    }

    debugger

    console.log(props.DialogsPage.newMessageText)
    console.log(props.DialogsPage.dialogsData)
    console.log(props.DialogsPage.messagesData)

    

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