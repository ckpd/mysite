import React from 'react';
import App from './App'
import CheckoutApp from './components/checkout/App'


export const Index = () => 
    <section className="home">
        <App />
    </section>
    
export const Checkout = () => 
    <section className="checkout">
        <CheckoutApp />
    </section>
    
export const Whoops404 = ({ location }) => 
        <div className="whoops-404">
            <h1>Resource not found at '{location.pathname}'</h1> 
        </div>
            
            