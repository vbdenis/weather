import React from 'react';
import Head from '../Head/Head';
import Main from '../Main/Main';
import { createCn } from 'bem-react-classname';
import './App.less';

const cn = createCn('app');
const App = () => {
    return (
        <div className={cn()}>
            <div className={cn('main')}>
                <Head />
                <Main />
            </div>
        </div>
    )
}

export default App;