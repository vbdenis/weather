import React from 'react';
import { createCn } from 'bem-react-classname';
import './MainInfo.less';
import image from './image.png';

const cn = createCn('main-info');
const MainInfo = () => {
    return (
        <div className={cn()}>
            <div className={cn('image-wrapper')}>
                <img className={cn('image')} src={image} alt="storm" />
            </div>
            <div className={cn('temp')}>
                21
                <span className={cn('degree')}>&deg;</span>
            </div>
            <div className={cn('situation')}>Thunderstorm</div>
            <div className={cn('date')}>Monday, 17 May</div>
        </div>
    )
};

export default MainInfo;
