import React from 'react';
import { createCn } from 'bem-react-classname';
import './MainHeader.less';

const cn = createCn('main-header');
const MainHeader = () => {
    return (
        <div className={cn()}>
            <div className={cn('icon')} />
            <div className={cn('title')}>
                Moscow
            </div>
        </div>
    )
};

export default MainHeader;
