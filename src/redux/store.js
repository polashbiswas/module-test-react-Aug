import { applyMiddleware, combineReducers, createStore } from "redux";
import { postReducer } from "./reducer/postReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    post: postReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;