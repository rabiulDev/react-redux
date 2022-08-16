import { createStore } from "redux";
import counterReducer from "./store/reducer/counterReducer";

const store = createStore(counterReducer);

export default store;
