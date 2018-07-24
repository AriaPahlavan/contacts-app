import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import 'tachyons'

import './index.css';
import App from './containers/App';
import {searchRobots} from './reducers.js'

import registerServiceWorker from './registerServiceWorker';


const logger = createLogger();
const store = createStore(searchRobots, 
                          applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
