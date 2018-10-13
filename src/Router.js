import React from 'react';
import App from './pages/Index'
import CheckoutApp from './pages/Checkout'
import {
    Route,
    Switch
} from "react-router-dom"


const Index = () => 
    <section className="home">
        <App />
    </section>
    
const Checkout = () => 
    <section className="checkout">
        <CheckoutApp />
    </section>
    
const Whoops404 = ({ location }) => 
        <div className="whoops-404">
            <h1>Resource not found at '{location.pathname}'</h1> 
        </div>
            
const Router = () => ( 
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/checkout" component={Checkout} />
            <Route component={Whoops404} />
        </Switch>
)

export default Router