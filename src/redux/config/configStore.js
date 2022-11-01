// src/redux/modules/config/configStore.js


// original code
import { createStore } from "redux";
import { combineReducers } from "redux";

// newly added part
import counter from "../modules/counter";

const rootReducer = combineReducers({
  counter: counter, // <-- newly added part
});
const store = createStore(rootReducer);

export default store;