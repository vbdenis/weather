import React from 'react';
import { createCn } from 'bem-react-classname';
import './Main.less';

const cn = createCn('main');
const Main = () => {
    return (
        <div className={cn()}>
            <div className={cn('image')}>SUN.jpg</div>
            <div className={cn('temp')}>30&deg;</div>
            <div className={cn('condition')}>Storm</div>
            <div className={cn('date')}>Monday, 17 May</div>
        </div>
    )
};

export default Main;