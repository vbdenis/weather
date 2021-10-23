import React from 'react';
import { createCn } from 'bem-react-classname';
import './MainCondition.less';

const cn = createCn('main-condition');
const Condition = () => {
    const renderItems = (
        <>
            <div className={cn('item')}>
                <div className={cn('item-icon')} />
                <div className={cn('item-value')}>13 km/h</div>
                <div className={cn('item-text')}>Wind</div>
            </div>
            <div className={cn('item')}>
                <div className={cn('item-icon')} />
                <div className={cn('item-value')}>24%</div>
                <div className={cn('item-text')}>Humidity</div>
            </div>
            <div className={cn('item')}>
                <div className={cn('item-icon')} />
                <div className={cn('item-value')}>87%</div>
                <div className={cn('item-text')}>Chanse of rain</div>
            </div>
        </>
    );

    return (
        <div className={cn()}>
            <div className={cn('items')}>
                {renderItems}
            </div>
        </div>
    )
};

export default Condition;
