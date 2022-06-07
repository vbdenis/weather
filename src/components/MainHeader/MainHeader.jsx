import React, { useState } from 'react';
import { createCn } from 'bem-react-classname';
import { useDispatch } from 'react-redux';
import { inputText } from '../../redux/actions';
import './MainHeader.less';
import { getforecastToday } from '../../api/getWeatherData';

const cn = createCn('main-header');
    const MainHeader = () => {
    // Записываем в стейт компонента значение инпута(город)
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    // Отслеживаем изменение инпута, и записываем в стейт
    const handleChange = (e) => {
        setTitle(e.target.value)
    };

    /*
        По сабмиту формы отменяем дефолтное поведение,
        и делаем запрос на сервер с введенным городом,
        название которого берем из стейта
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchItems(title);
    }

    /* 
        получаем данные о погоде на текущий момент,
        передаем их в экшн inputText,
        и передаем в диспач
    */
    async function fetchItems(cityName) {
        const response = await getforecastToday(cityName);
        dispatch(inputText(response));
    };

    return (
        <div className={cn()}>
            {/* <div className={cn('icon')} /> */}
            <div className={cn('title')}>{title}</div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={title} placeholder='введи город'/>
                <input type='submit' />
            </form>
        </div>
    )
};

export default MainHeader;
