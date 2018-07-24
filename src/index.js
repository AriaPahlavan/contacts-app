import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import 'tachyons'

import './index.css';
import App from './containers/App';
import {searchRobots} from './reducers.js'

import registerServiceWorker from './registerServiceWorker';


const store = createStore(searchRobots);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
