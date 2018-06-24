import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'
import './index.css';
import CardList from './CardList';
import {contacts} from './contacts';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CardList contacts={contacts}/>, document.getElementById('root'));
registerServiceWorker();
