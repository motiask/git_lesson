import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reducer";
import usersReducer from "./users-reduser";

const { createStore, combineReducers } = require("redux");

let redusers = combineReducers(
    {
        ProfilePage: profileReduser,
        DialogsPage: dialogsReduser,
        usersPage: usersReducer
    }
)

let store = createStore(redusers);

window.store = store;

export default store;