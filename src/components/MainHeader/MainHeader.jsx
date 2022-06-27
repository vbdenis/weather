import React, { useState, useRef } from 'react';
import { createCn } from 'bem-react-classname';
import { useDispatch } from 'react-redux';
import { inputText } from '../../redux/actions/actions';
import './MainHeader.less';
import { getforecastToday } from '../../api/getWeatherData';
import searchIcon from '../../icons/search.svg';
import editIcon from '../../icons/edit.svg';

const cn = createCn('main-header');
    const MainHeader = () => {
    // Записываем в стейт компонента значение инпута(город)
    const [ title, setTitle ] = useState('');
    const [ inputVisibility, setInputVisibility ] = useState(false);
    const inputNode = useRef();

    const dispatch = useDispatch();

    // Отслеживаем изменение инпута, и записываем в стейт
    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    /*
        По сабмиту формы отменяем дефолтное поведение,
        и делаем запрос на сервер с введенным городом,
        название которого берем из стейта
    */
    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetchItems(title);
        // после запроса скрываем инпут
        setInputVisibility(false);
    }

    /*
        При нажатии на заговок меняем inputVisible на противоположный
        и выделяем(фокусимся) на инпут для удобства
    */
    const handleInputVisibility = () => {
        setInputVisibility(!inputVisibility);
        /* Почему inputVisible = false, если строчка выше
        делает его true??? Или сначала компонент перересуется, и уже тогда
        inputVisible станет true? */
        if(!inputVisibility) {
            // без setTimeout не фокусится на скрытый инпут
            setTimeout(() => inputNode.current.select(), 5);
        }
    }

    /*
        При нажатии на название города,
        показываем инпут для ввода города
    */
    const renderTitle = (
        !inputVisibility
        ? <div className={cn('title', { define: !!title })} onClick={handleInputVisibility}>{title || 'Default city'}</div>
        :(<form onSubmit={handleFormSubmit}>
            <input
                className={cn('input')}
                type='text'
                onChange={handleInputChange}
                value={title}
                ref={inputNode}
            />
            <input type='submit' hidden/>
        </form>)
    );

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
            <div className={cn('title-wrapper', { active: inputVisibility})}>
                {renderTitle}
                <img
                    className={cn('icon', { edit: !inputVisibility })}
                    src={inputVisibility ? searchIcon : editIcon}
                    onClick={inputVisibility ? handleFormSubmit : null}
                />
            </div>
        </div>
    )
};

export default MainHeader;
