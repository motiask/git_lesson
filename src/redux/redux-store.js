import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reducer";

const { createStore, combineReducers } = require("redux");

let redusers = combineReducers(
    {
        ProfilePage: profileReduser,
        DialogsPage: dialogsReduser
    }
)

let store = createStore(redusers);

window.store = store;

export default store;