import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
    Route,
    BrowserRouter,
    Switch
} from "react-router-dom"

import {
    Index,
    Checkout,
    Whoops404
} from "./routes"

render(
    <Provider store={store}>
    <BrowserRouter >   
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/checkout" component={Checkout} />
            <Route component={Whoops404} />
        </Switch>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
    );
registerServiceWorker();
