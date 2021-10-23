import React from 'react';
import { createCn } from 'bem-react-classname';
import './Main.less';
import MainHeader from '../MainHeader/MainHeader';
import MainInfo from '../MainInfo/MainInfo';
import MainCondition from '../MainCondition/MainCondition';

const cn = createCn('main');
const Main = () => {
    return (
        <div className={cn()}>
            <div className={cn('header')}>
                <MainHeader />
            </div>
            <div className={cn('info')}>
                <MainInfo />
            </div>
            <div className={cn('condition')}>
                <MainCondition />
            </div>
        </div>
    )
};

export default Main;
