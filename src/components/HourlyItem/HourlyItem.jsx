import React, { useState } from 'react';
import { createCn } from 'bem-react-classname';
import './HourlyItem.less';
import image from './image.png';

const cn = createCn('hourly-item');
const HourlyItem = ({ data }) => {

    const {
        main: { temp: temperature } = {},
        dt_txt: time,
    } = data;

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive)
    };

    const roundedTemp = Math.round(temperature);
    const convertedTime = time.substring(11, 16);

    return (
        <div className={cn({active: isActive})} onClick={handleClick} >
            <div className={cn('temperature')}>{roundedTemp}</div>
            <div className={cn('image-wrapper')}>
                <img className={cn('image')} src={image} alt="" />
            </div>
            <div className={cn('time')}>{convertedTime}</div>
        </div>
    )
};

export default HourlyItem;
