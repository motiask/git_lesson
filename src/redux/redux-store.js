import authReduser from "./auth-reduser";
import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reducer";
import usersReducer from "./users-reduser";

const { createStore, combineReducers } = require("redux");

let redusers = combineReducers(
    {
        ProfilePage: profileReduser,
        DialogsPage: dialogsReduser,
        usersPage: usersReducer,
        auth: authReduser
    }
)

let store = createStore(redusers);

window.store = store;

export default store;