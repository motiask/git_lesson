import { connect } from 'react-redux';
import { addPostActionCreator, pushPostText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

/*-45 перестаем работать с пропсами. переходим на контекст
const MyPostsContainer = (props) => {

    let addPost_callback = () => {
        {/*-31-32-3)Считываем/записывем значение элемента в прокинутую функцию из BLL*/
/*  {/*-33-0 после записи новых данных - перерисовка страницы
  props.store.dispatch(addPostActionCreator());
}

let onPostChange_callback = (text) => {
  props.store.dispatch(pushPostText(text));
}

let _state = props.store.getState();



return (
  <MyPosts postData={_state.ProfilePage.postData} newPostText={_state.ProfilePage.newPostText} addPost_callback={addPost_callback} onPostChange_callback={onPostChange_callback} />)
} */


//переменные названы по документации
let mapStateToProps = (state) => {
  console.log('MyPostsContainer компонента');
  return {
    postData: state.ProfilePage.postData,
    newPostText: state.ProfilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost_callback: () => { dispatch(addPostActionCreator()) },
    onPostChange_callback: (text) => { dispatch(pushPostText(text)) }
  }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;