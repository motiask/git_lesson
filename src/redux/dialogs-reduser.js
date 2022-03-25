const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

/*-42-1 Создаем начальные данные для redux!*/
let initialState = {
    dialogsData: [
        { id: '1', nameD: 'user 1' },
        { id: '2', nameD: 'user 2' },
        { id: '3', nameD: 'user 3' },
        { id: '4', nameD: 'user 4' },
        { id: '5', nameD: 'user 5' },
        { id: '6', nameD: 'user 6' }
    ],
    messagesData: [
        { id: '1', message: 'message 1' },
        { id: '2', message: 'message 2' },
        { id: '3', message: 'message 3' },
        { id: '4', message: 'message 4' },
        { id: '5', message: 'message 5' }
    ],
    newMessageText: ''
}

const dialogsReduser = (state = initialState, action) => {

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