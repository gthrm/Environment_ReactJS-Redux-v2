import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './Components/App';
import initialStore from './store/store';

const store = initialStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
