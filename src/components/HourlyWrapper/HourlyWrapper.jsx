import React from 'react';
import { createCn } from 'bem-react-classname';
import './HourlyWrapper.less';
import HourlyItem from '../HourlyItem/HourlyItem';

const cn = createCn('hourly-wrapper');
const HourlyWrapper = () => {
    const renderItems = (
        <>
            <HourlyItem />
            <HourlyItem />
            <HourlyItem />
            <HourlyItem />
        </>
    );

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
