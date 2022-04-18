import authReduser from "./auth-reduser";
import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reducer";
import usersReducer from "./users-reduser";
import thunkMiddleware from "redux-thunk";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let redusers = combineReducers(
    {
        ProfilePage: profileReduser,
        DialogsPage: dialogsReduser,
        usersPage: usersReducer,
        auth: authReduser
    }
)

let store = createStore(redusers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;