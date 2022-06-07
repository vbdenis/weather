import React from 'react';
import { createCn } from 'bem-react-classname';
import { useSelector } from 'react-redux';
import './Main.less';
import MainHeader from '../MainHeader/MainHeader';
import MainInfo from '../MainInfo/MainInfo';
import MainConditionWrapper from '../MainConditionWrapper/MainConditionWrapper';
import convertPressure from '../../utils/convertPressure';

const cn = createCn('main');
const Main = () => {

    /*
        с помощью хука useSelector достаем стейт
        из глобального хранилища.
        Через деструктуризацию вытаскиваем inputReducer.
        Название свойства "inputReducer" берется из корневого
        редьюсера rootReducer.
        Записываем в переменную data
    */
    const data = useSelector((state => {
        const { inputReducer } = state;
        return inputReducer;
    }));

    /*
        Из объекта data деструктурируем свойства,
        переименовываем в понятные значения,
        которые передаем в дочерние компоненты
    */
    const {
        main: { temp: temperature, humidity, pressure },
        weather: [{ main: situation }],
        wind: { speed: windSpeed },
    } = data;

    const convertedPressure = convertPressure(pressure);
    const conditionData = [ windSpeed, humidity, convertedPressure ];

    return (
        <div className={cn()}>
            <div className={cn('header')}>
                <MainHeader />
            </div>
            <div className={cn('info')}>
                <MainInfo
                    temperature={temperature}
                    situation={situation}
                />
            </div>
            <div className={cn('condition')}>
                <MainConditionWrapper conditionData = {conditionData} />
            </div>
        </div>
    )
};

export default Main;
