import React from 'react';
import Main from '../Main/Main';
import { createCn } from 'bem-react-classname';
import './App.less';
import HourlyWrapper from '../HourlyWrapper/HourlyWrapper';

const cn = createCn('app');
const App = () => {
    return (
        <div className={cn()}>
            <div className={cn('main')}>
                <Main/>
            </div>
            <div className={cn('hours')}>
                <HourlyWrapper />
            </div>
        </div>
    )
}

export default App;
