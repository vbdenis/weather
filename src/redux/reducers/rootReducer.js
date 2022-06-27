import { combineReducers } from "redux";
import { inputReducer } from "./inputReducer";

/*
    с помощью combineReducers объединяем
    все редьюсеры приложения
*/
export const rootReducer =  combineReducers({
    inputReducer,
});
