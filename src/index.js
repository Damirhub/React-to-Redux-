import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { promiseMiddleware } from 'redux-promise'

ReactDOM.render(<App />, document.getElementById('root'));