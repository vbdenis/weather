import React, {useState, useEffect} from 'react';
import Main from '../Main/Main';
import { createCn } from 'bem-react-classname';
import './App.less';
import HourlyWrapper from '../HourlyWrapper/HourlyWrapper';
import { getforecastToday } from '../../api/getWeatherData';

const initialState = {
    main: { temp: 0, humidity: 0, pressure: 0 },
    weather: [{ main: 'Загрузка...' }],
    wind: { speed: 0 },
}

const cn = createCn('app');
const App = () => {
    const [items, setItems] = useState(initialState);

    async function fetchItems() {
        const response = await getforecastToday();
        setItems(response);
        // console.log('fetchItems: ', response);
    };

    useEffect(() => {
        fetchItems()
    }, []);
    
    return (
        <div className={cn()}>
            <div className={cn('main')}>
                <Main data={items} />
            </div>
            <div className={cn('hours')}>
                <HourlyWrapper />
            </div>
        </div>
    )
}

export default App;
