import { INPUT_TEXT } from "./types";

/*
    создаем начальное состояние,
    в момент загрузки/перезагрузки приложения
*/
const initialState = {
    main: { temp: 0, humidity: 0, pressure: 0 },
    weather: [{ main: 'Загрузка...' }],
    wind: { speed: 0 },
}

/*
    создаем редьюсер, который добавляет в глобальное хранилище
    данные, полученные запросом при вводе города после сабмита формы
*/
export const inputReducer = (state = initialState, action) => {
    switch(action.type) {
        case INPUT_TEXT:
            return {
                /* 
                    Возвращаем новый объект;
                    Нельзя менять стейт напрямую,
                    поэтому создаем его копию, разворачиваем
                    через рест оператор, и добавляем (заменяем)
                    его свойста свойствами, которые получим через 
                    экшен (inputText);
                */
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
};
