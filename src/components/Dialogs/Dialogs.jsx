import React from 'react';
import { addSendMessageCreator, pushNewMassageTextCreator } from '../../redux/state';
import DialogsItems from './DialogItem/DialogsItem';
import d from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    /*перезапись массива под новые теги*/
    let DialogsElements = props.DialogsPage.dialogsData.map((dialog) => (<DialogsItems nameD={dialog.nameD} id={dialog.id} />))

    /*перезапись массива под новые теги*/
    let MessageElements = props.DialogsPage.messagesData.map((message) => (<Message message={message.message} />))

    let onNewMessageText = (e) => {
        props.dispatch(pushNewMassageTextCreator(e.target.value))
    };

    let onSendMessageClick = () => {
        props.dispatch(addSendMessageCreator());
    }


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