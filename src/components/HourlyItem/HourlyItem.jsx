import React from 'react';
import { createCn } from 'bem-react-classname';
import './HourlyItem.less';
import image from './image.png';

const cn = createCn('hourly-item');
const HourlyItem = () => {
    return (
        <div className={cn()}>
            <div className={cn('temp')}>23&deg;</div>
            <div className={cn('image-wrapper')}>
                <img className={cn('image')} src={image} alt="storm" />
            </div>
            <div className={cn('time')}>10:00</div>
        </div>
    )
};

export default HourlyItem;
