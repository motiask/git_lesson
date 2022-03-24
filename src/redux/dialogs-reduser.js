const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


const dialogsReduser = (state, action) => {

    switch (action.type) {
        case (UPDATE_NEW_MASSAGE_TEXT):
            state.newMessageText = action.body;
            return state;
        case (SEND_MESSAGE):
            let newSendMessage = {
                id: '6',
                message: state.newMessageText
            };
            state.newMessageText = '';
            state.messagesData.push(newSendMessage)
            return state;
        default:
            return state;

    }
}

/*Dialogs*/
export const addSendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const pushNewMassageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MASSAGE_TEXT,
        body: text
    }
}

export default dialogsReduser