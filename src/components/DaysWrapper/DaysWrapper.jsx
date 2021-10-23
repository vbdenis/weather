import React from 'react';
import { createCn } from 'bem-react-classname';
import './DaysWrapper.less';
import MainHeader from '../MainHeader/MainHeader';

const cn = createCn('days-wrapper');
const DaysWrapper = () => {
    return (
        <div className={cn()}>
            <div className={cn('header-line')}>
                <div className={cn('header')}>Today</div>
                <button className={cn('button')}>7&nbsp;days</button>
            </div>
        </div>
    )
};

export default DaysWrapper;
