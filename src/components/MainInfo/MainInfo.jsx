import React from 'react';
import { createCn } from 'bem-react-classname';
import './MainInfo.less';
import image from './image.png';

const cn = createCn('main-info');
const MainInfo = ({ temperature, situation }) => {
    const roundedTemp = Math.round(temperature);

    return (
        <div className={cn()}>
            <div className={cn('image-wrapper')}>
                <img className={cn('image')} src={image} alt="" />
            </div>
            <div className={cn('temp')}>
                {roundedTemp}
            </div>
            <div className={cn('situation')}>{situation}</div>
            <div className={cn('date')}>Monday, 17 May</div>
        </div>
    )
};

export default MainInfo;
