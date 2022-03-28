import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from './redux/store';
import api from './redux/api/api.js'

ReactDOM.render(
  <Provider store={configureStore({api})}>
    <App />
  </Provider>,
  document.getElementById('root')
);
