import { createStore } from "redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    //module에 있는 state그룹
});
const store = createStore(rootReducer)

export default store