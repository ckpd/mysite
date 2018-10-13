import React, { Component } from 'react';
import bag from '../../assets/imgs/bag.png'
import './Cart.css';

export default class Cart extends Component{
    render(){
        return(
            <nav>
                <header className="logo">
                <a href="/"><h1 className="App-title"><span>BRANDED</span></h1></a>
                </header>
                <header className="nav-links">
                <ul>
                <li><a href="/checkout" data-badge={this.props.cartTotal}><img src={bag} alt="checkout-bag"/></a></li>
            </ul>   
            </header>
        </nav>
        );
    }
}
