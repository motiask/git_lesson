import React from 'react';
import DialogsItems from './DialogItem/DialogsItem';
import d from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let DialogsElements = props.DialogsPage.dialogsData.map((dialog) => (<DialogsItems nameD={dialog.nameD} id={dialog.id} />))

    let MessageElements = props.DialogsPage.messagesData.map((message) => (<Message message={message.message} />))

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