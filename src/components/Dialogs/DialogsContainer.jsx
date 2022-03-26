import React from 'react';
import { addSendMessageCreator, pushNewMassageTextCreator } from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let onNewMessageText_callback = (text) => {
        props.store.dispatch(pushNewMassageTextCreator(text))
    };

    let onSendMessageClick_callback = () => {
        props.store.dispatch(addSendMessageCreator());
    }

    let _state = props.store.getState();

    return (
        <Dialogs onNewMessageText_callback={onNewMessageText_callback} onSendMessageClick_callback={onSendMessageClick_callback} DialogsPage={_state.DialogsPage} />)
}

export default DialogsContainer;