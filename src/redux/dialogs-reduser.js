const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

/*-42-1 Создаем начальные данные для redux!*/
let initialState = {
    dialogsData: [
        { id: '1', nameD: 'user 01' },
        { id: '2', nameD: 'user 02' },
        { id: '3', nameD: 'user 03' },
        { id: '4', nameD: 'user 04' },
        { id: '5', nameD: 'user 05' },
        { id: '6', nameD: 'user 06' }
    ],
    messagesData: [
        { id: '1', message: 'message 01' },
        { id: '2', message: 'message 02' },
        { id: '3', message: 'message 03' },
        { id: '4', message: 'message 04' },
        { id: '5', message: 'message 05' }
    ],
    newMessageText: ''
}

const dialogsReduser = (state = initialState, action) => {
    console.log(`'dialogsReduser компонента' ${action}`);
    switch (action.type) {
        case (UPDATE_NEW_MASSAGE_TEXT):
            {
                let stateCopy = { ...state };
                stateCopy.newMessageText = action.body;
                return stateCopy;
            }
        case (SEND_MESSAGE):
            {
                let newSendMessage = {
                    id: '6',
                    message: state.newMessageText
                };
                /*-47 для redux требуеться работать с копией данных, чтобы он мог их сравнить и перерисовать*/
                let stateCopy = { ...state };
                stateCopy.messagesData = [...state.messagesData];
                stateCopy.newMessageText = '';
                stateCopy.messagesData.push(newSendMessage)
                return stateCopy;
            }
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