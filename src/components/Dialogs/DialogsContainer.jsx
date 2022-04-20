import { connect } from 'react-redux';
import { addSendMessageCreator, pushNewMassageTextCreator } from '../../redux/dialogs-reduser';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

/*-45- перешли на контекст. Рабоботаем без пропсов
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
*/

/*-45- работа с context redux - название по документации.  */
let mapStateToProps = (state) => {
    console.log('DialogsContainer компонента');
    return {
        DialogsPage: state.DialogsPage
    }
}
/*-45- работа с context redux - название по документации.  */
let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageText_callback: (text) => { dispatch(pushNewMassageTextCreator(text)) },
        onSendMessageClick_callback: () => { dispatch(addSendMessageCreator()) }
    }
}

//-69 HOC
let AuthRedirectComponent = withAuthRedirect(Dialogs);

/*-45- работа с context redux - название по документации.  Это правила как правильно законнектить к стору*/
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;