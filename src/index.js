import React from 'react';
import App from './App'
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './redux/store'

import './App.css';

import {
    BrowserRouter,
} from "react-router-dom"

const store = configureStore();

render(
    <Provider store={store}>
        <BrowserRouter >   
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
    );