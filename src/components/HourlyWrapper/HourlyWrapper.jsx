import React, { useState, useEffect } from 'react';
import { createCn } from 'bem-react-classname';
import './HourlyWrapper.less';
import HourlyItem from '../HourlyItem/HourlyItem';
import { getforecastHourInterval } from '../../api/getWeatherData';

const cn = createCn('hourly-wrapper');
const HourlyWrapper = () => {
    const [hourlyData, setHourlyData] = useState([]);

    async function fetchForecast() {
        const response = await getforecastHourInterval();
        setHourlyData(response.list);
    };

    useEffect(() => {
        fetchForecast()
    }, []);

    console.log('fetchForecast: ', hourlyData);

    const renderItems = hourlyData.map((item, index) => {
        return (
            <React.Fragment key = {index}>
                <HourlyItem data={item} />
            </React.Fragment>
        )
    })

    return (
        <div className={cn()}>
            <div className={cn('header-line')}>
                <div className={cn('header')}>Today</div>
                <button className={cn('button')}>7&nbsp;days</button>
            </div>
            <div className={cn('items')}>
                {renderItems}
            </div>
        </div>
    )
};

export default HourlyWrapper;
