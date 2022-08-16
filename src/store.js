import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer from "./store/reducer/counterReducer";
import todoReducer from "./store/reducer/todoReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  todos: todoReducer,
  counter: counterReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
