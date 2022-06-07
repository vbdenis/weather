import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';
import App from './components/App/App';
import './styles/main.less';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
