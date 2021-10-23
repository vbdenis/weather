import React from 'react';
import Main from '../Main/Main';
import { createCn } from 'bem-react-classname';
import './App.less';
import DaysWrapper from '../DaysWrapper/DaysWrapper';

const cn = createCn('app');
const App = () => {
    return (
        <div className={cn()}>
            <div className={cn('main')}>
                <Main />
            </div>
            <div className={cn('days')}>
                <DaysWrapper />
            </div>
        </div>
    )
}

export default App;
